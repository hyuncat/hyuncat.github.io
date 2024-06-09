---
permalink: /about
layout: single
title: "About Me"
author_profile: true
header:
  image: /assets/images/pretty.jpeg
---
<style>
  #network-graph {
    width: 60vh;
    height: 60vh;
    border: 2px solid #ccc; 
    box-sizing: border-box;
    margin-top: 20px;
    margin-bottom: 30px;
  }
</style>


## Hello! 👋
I'm Sarah, I'm a 2nd year undergraduate at Columbia University majoring in computer science and applied mathematics. I'm interested in algorithm development, machine learning, and probability theory (admittedly very broad interests) which tie together the various projects I work on.

### 🌱 Currently:
I'm spending this summer working on 4 distinct projects!

1. **RichStudio (UND Hur Lab)** - A web-based application which implements a novel biological pathway clustering algorithm based on gene-level similarity. Hoping to release it as a package and write a publication by the end of summer! Under supervision of Dr. Junguk Hur at UND.
2. **DNA-origami (Columbia Gang Lab)** - Developing algorithms and programmatic interfaces for finding optimal # of unique voxels and DNA bindings to create a desired nanoparticle unit lattice. Under supervision of Dr. Oleg Gang at Columbia University.
3. **Walkwise** - Helping train and optimize a transformer model for predicting pedestrian movement at intersections: Kalman filtering, data pipelining, and model training. Under supervision of PhD. student Caspar Lant.
4. **Violin-CV** - An independent project trying to analyze violin technique by synthesizing audio processing, transformer architecture, and computer vision techniques. Under supervision of NYU Professor Dennis Shasha.

### Other interests:
Outside of coding, I love music! I play violin in the Columbia University Orchestra and am involved in chamber music. I also like drawing and playing tennis in my free time.

### Hate navbars?
Lately I've been really into network graphs and thinking about how memories are formed and strengthened in proportion to how well connected it is to the rest of your memory nodes. I made this small graph using D3.js incase you wanted to explore my website a-la graph traversal.

<div id="network-graph"></div>
<script src="https://d3js.org/d3.v6.min.js"></script>
<script type="module">
  import NetworkGraph from '/assets/js/network.js';
  
  const data = {
    nodes: [
      { id: "Home", url: "/" },
      { id: "Blog", url: "/blog" },
      { id: "Projects", url: "/projects" },
      { id: "Notes", url: "/notes" },
      { id: "About", url: "/about" }
    ],
    links: [
      { source: "Home", target: "Blog" },
      { source: "Home", target: "Projects" },
      { source: "Home", target: "Notes" },
      { source: "Home", target: "About" }
    ]
  };
  
  const networkGraph = new NetworkGraph(data, "network-graph");
</script>

### Contact me:
Feel free to reach out at ssh2198@columbia.edu! I'm always happy to create and work on new stuff.