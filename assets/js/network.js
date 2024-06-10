// Example data for the nodes and links
const data = {
  nodes: [
    { id: "Home", url: "/" },
    { id: "Blog", url: "/blog" },
    { id: "Projects", url: "/projects" },
    { id: "Notes", url: "/notes"}
  ],
  links: [
    { source: "Home", target: "Blog" },
    { source: "Home", target: "Projects" },
    { source: "Home", target: "Notes" }
  ]
};


class NetworkGraph {
  constructor(data, containerId) {
    this.data = data;
    this.containerId = containerId
    this.container = document.getElementById(containerId);
    this.width = this.container.clientWidth;  // Get the width of the container
    this.height = this.container.clientHeight; // Get the height of the container

    // Node variables
    this.nodeColor = "#CDDEF4";
    this.nodeHoverColor = "#BACADE";
    this.nodeRadius = 30;
    this.nodeHoverRadius = 34;

    // Text variables
    this.textColor = "#2C3B4E";
    this.textHoverColor = "#FFFFFF";
    this.textSize = "0.6em";
    this.maxFontSize = 12; 
    this.minFontSize = 8;  

    // Link variables
    this.linkColor = "#91B6E2";
    this.linkWidth = 2;

    // Simulation force variables
    this.linkDistance = 200;
    this.chargeStrength = -2000;
    this.centerStrength = 0.6;

    this.ticks = 0; // running total ticks (for graph resizing)


    this.initGraph();
  }

  initGraph() {
    
    this.zoom = d3.zoom()
    .scaleExtent([0.5, 4])
    .on("zoom", event => {
      this.container.attr("transform", event.transform);  // Apply the zoom transformation directly
    });
    
    // Svg stuff
    this.svg = d3.select(this.container).append("svg")
      .attr("width", this.width)
      .attr("height", this.height)
      .call(this.zoom);

    this.container = this.svg.append("g")
      .attr("class", "everything");


    // Link
    this.link = this.container.selectAll("line")
      .data(this.data.links)
      .enter()
      .append("line")
      .style("stroke", this.linkColor);

    // Node
    this.node = this.container.selectAll(".node")
      .data(this.data.nodes)
      .enter().append("g")
      .attr("class", "node")
      .on('mouseover', (event, d) => this.handleMouseOver(event, d))
      .on('mouseout', (event, d) => this.handleMouseOut(event, d))
      .call(d3.drag()
        .on("start", (event) => this.dragstarted(event))
        .on("drag", (event) => this.dragged(event))
        .on("end", (event) => this.dragended(event)))
      .on("click", (event, d) => this.handleClick(event, d));

    this.node.append("circle")
      .attr("r", this.nodeRadius)
      .style("fill", this.nodeColor);

    this.node.append("text")
      .attr("dy", ".35em")
      .attr("text-anchor", "middle")
      .text(d => d.title.length > 8 ? `${d.title.substring(0, 7)}...` : d.title) // Truncate long titles
      .style("fill", this.textColor)
      .style("font-size", d => `${this.calculateFontSize(this.nodeRadius)}px`);

    
    
    // Simulations
    this.simulation = d3.forceSimulation(this.data.nodes)
      .force("link", d3.forceLink(this.data.links).id(d => d.id).distance(this.linkDistance))
      .force("charge", d3.forceManyBody()
        .strength(this.chargeStrength)
        // .distanceMin(150)
        // .distanceMax(350)
      )
      .force("center", d3.forceCenter(this.width / 2, this.height / 2))
        // .strength(this.centerStrength)
      .force("collide", d3.forceCollide().radius(d => d.radius).iterations(3))

    this.simulation
      .nodes(this.data.nodes)
      .on("tick", () => this.ticked());
      // .on("end", () => this.fitGraphToScreen());

    // Call fitGraphToScreen after a delay to allow initial layout
    setTimeout(() => this.fitGraphToScreen(), 100);

    this.simulation.force("link")
      .links(this.data.links);

    this.tooltip = d3.select("body").append("div")
      .attr("class", "tooltip");

    // Listen for resizing
    window.addEventListener('resize', () => this.resize());
  }

  // Interactive node events
  handleMouseOver(event, d) {
    this.tooltip.html(`${d.title}`)
      .style("visibility", "visible")
      .style("left", (event.pageX + 10) + "px") // Offset by 10px from cursor
      .style("top", (event.pageY - 10) + "px"); // Offset by 10px from cursor

    d3.select(event.currentTarget).select("circle")
      .style('fill', this.nodeHoverColor)
      .attr("r", this.nodeHoverRadius);
    d3.select(event.currentTarget).select("text")
      .style("fill", this.textHoverColor);
  }
  handleMouseOut(event, d) {
    this.tooltip.style("visibility", "hidden");

    d3.select(event.currentTarget).select("circle")
      .style('fill', this.nodeColor)
      .attr("r", this.nodeRadius);
    d3.select(event.currentTarget).select("text")
      .style("fill", this.textColor);
  }
  handleClick(event, d) {
    window.location.href = d.url;
  }

  // Dragging events
  dragstarted(event) {
    if (!event.active) this.simulation.alphaTarget(0.3).restart();
    event.subject.fx = event.subject.x;
    event.subject.fy = event.subject.y;
  }
  dragged(event) {
    event.subject.fx = event.x;
    event.subject.fy = event.y;
  }
  dragended(event) {
    if (!event.active) this.simulation.alphaTarget(0);
    event.subject.fx = null;
    event.subject.fy = null;
  }

  // Simulation ticks
  ticked() {
    this.link
      .attr("x1", d => d.source.x)
      .attr("y1", d => d.source.y)
      .attr("x2", d => d.target.x)
      .attr("y2", d => d.target.y);

    this.node
      .attr("transform", d => `translate(${d.x},${d.y})`);
  }

  // Resize
  resize() {
    this.width = this.container.clientWidth;
    this.height = this.container.clientHeight;
  
    this.svg.attr('width', this.width)
            .attr('height', this.height);
  
    // Recalculate forces based on new dimensions
    this.simulation.force("center", d3.forceCenter(this.width / 2, this.height / 2));
    this.simulation.alpha(1).restart();
  
    // If using transform rescaling
    const transform = d3.zoomTransform(this.svg.node());
    this.svg.call(this.zoom.transform, transform);
  }

  calculateFontSizeOld(radius) {
    let size = Math.min(this.maxFontSize, radius/2);
    return Math.max(this.minFontSize, size);
  }

  calculateFontSize(radius) {
    let size = Math.min(this.maxFontSize, radius/2);
    return size;
  }

  // Make all nodes fit in the graph at once
  fitGraphToScreen() {
    const bounds = this.calculateBounds(); // Calculate the boundaries of nodes
    const dx = bounds.xMax - bounds.xMin;
    const dy = bounds.yMax - bounds.yMin;
    const x = (bounds.xMax + bounds.xMin) / 2;
    const y = (bounds.yMax + bounds.yMin) / 2;
    const scale = 0.8 / Math.max(dx / this.width, dy / this.height); // Scale to fit the graph with a little padding
    const translate = [this.width / 2 - scale * x, this.height / 2 - scale * y];
  
    this.svg.transition()
      .duration(750) // Smooth transition
      .call(this.zoom.transform, d3.zoomIdentity.translate(translate[0], translate[1]).scale(scale));
  }
  
  calculateBounds() {
    let xMin = Infinity, xMax = -Infinity, yMin = Infinity, yMax = -Infinity;
    this.data.nodes.forEach(node => {
      if (node.x < xMin) xMin = node.x;
      if (node.x > xMax) xMax = node.x;
      if (node.y < yMin) yMin = node.y;
      if (node.y > yMax) yMax = node.y;
    });
    return { xMin, xMax, yMin, yMax };
  }
  
}

export default NetworkGraph;
