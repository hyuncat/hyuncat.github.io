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

    // Link variables
    this.linkColor = "#91B6E2";
    this.linkWidth = 2;

    this.initGraph();
  }

  initGraph() {
    this.svg = d3.select("#network-graph").append("svg")
      .attr("width", this.width)
      .attr("height", this.height);

    this.container = this.svg.append("g")
      .attr("class", "everything");

    this.svg.call(d3.zoom().scaleExtent([0.5, 4]).on("zoom", (event) => {
      this.container.attr("transform", event.transform);
    }));

    this.link = this.container.selectAll("line")
      .data(this.data.links)
      .enter()
      .append("line")
      .style("stroke", this.linkColor);

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
      .text(d => d.id)
      .style("fill", this.textColor)
      .style("font-size", this.textSize);;

    this.simulation = d3.forceSimulation(this.data.nodes)
      .force("link", d3.forceLink(this.data.links).id(d => d.id).distance(200))
      .force("charge", d3.forceManyBody()
        .strength(-300)
        .distanceMin(150)
        .distanceMax(350)
      )
      .force("center", d3.forceCenter(this.width / 2, this.height / 2))
      .force("collide", d3.forceCollide().radius(this.nodeRadius).iterations(3))

    this.simulation
      .nodes(this.data.nodes)
      .on("tick", () => this.ticked());

    this.simulation.force("link")
      .links(this.data.links);

    window.addEventListener('resize', () => this.resize());
  }

  handleMouseOver(event, d) {
    d3.select(event.currentTarget).select("circle")
      .style('fill', this.nodeHoverColor)
      .attr("r", this.nodeHoverRadius);
    d3.select(event.currentTarget).select("text")
      .style("fill", this.textHoverColor);
  }
  handleMouseOut(event, d) {
    d3.select(event.currentTarget).select("circle")
      .style('fill', this.nodeColor)
      .attr("r", this.nodeRadius);
    d3.select(event.currentTarget).select("text")
      .style("fill", this.textColor);
  }
  handleClick(event, d) {
    window.location.href = d.url;
  }

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

  ticked() {
    this.link
      .attr("x1", d => d.source.x)
      .attr("y1", d => d.source.y)
      .attr("x2", d => d.target.x)
      .attr("y2", d => d.target.y);

    this.node
      .attr("transform", d => `translate(${d.x},${d.y})`);
  }

  resize() {
    // Update dimensions based on the container's current size
    this.container = document.getElementById("network-graph");
    this.width = this.container.clientWidth;
    this.height = this.container.clientHeight;

    // Apply the new dimensions to the SVG element
    this.svg.attr('width', this.width)
            .attr('height', this.height);

    // Update the center force to the new dimensions
    this.simulation.force("center", d3.forceCenter(this.width / 2, this.height / 2));

    // Restart the simulation with the new settings
    this.simulation.alpha(1).restart();  // Reheats the simulation necessary for the layout to adjust

    this.svg.on(".zoom", null); // Remove previous zoom handlers if necessary
    this.svg.call(d3.zoom().scaleExtent([0.5, 4]).on("zoom", (event) => {
        this.container.attr("transform", event.transform);
    }));
  }
}

export default NetworkGraph;
