---
permalink: /
layout: single
title: "About Me"
author_profile: true
header:
  image: /assets/images/pretty.jpeg
---
{% include inline-network.html %}

## Hello! 👋
I'm Sarah, I'm a 2nd year undergraduate at Columbia University majoring in computer science and applied mathematics. I'm interested in algorithm development, machine learning, and probability theory (admittedly very broad interests) which tie together the various projects I work on.

### 🌱 Currently:
I'm spending this summer working on 4 distinct projects!

1. **RichCluster (UND Hur Lab)** - A customizable C++ algorithm for clustering biological terms based on gene content, with supporting visualization functions. Under supervision of Dr. Junguk Hur at UND.
2. **Coloring Algorithm (Columbia Gang Lab)** - An algorithm for finding the optimal # of unique voxel + DNA bonds to create a desired nanoparticle unit lattice. Under supervision of Dr. Oleg Gang at Columbia University.
3. **Walkwise** - Helping train and optimize a transformer model for predicting pedestrian movement at intersections: Kalman filtering, data pipelining, and model training. Under supervision of PhD. student Caspar Lant.
4. **Violin-CV** - An independent project trying to analyze violin performance with dynamic time warping and music processing techniques. Under supervision of the kind NYU professor Dennis Shasha.

### Other interests:
Outside of coding, I love music! I play violin in the Columbia University Orchestra and am involved in chamber music. I also like drawing and playing tennis in my free time.

### Hate navbars?
Maybe it's because I'm recently transferred all my notes from Notion to Obsidian (check out my [current Obsidian graph](/notes/tools)), but I've lately been really into network graphs and reframing my mind to think about everything in terms of them. 

In that spirit, I wanted to make this website traversable purely by network graph. It's stil a work-in-progress, but I've left small boxes here and there incase you wanted to explore my website a-la graph traversal.

<div id="network-graph"></div>
<script src="https://d3js.org/d3.v6.min.js"></script>
<script type="module">
  import NetworkGraph from '/assets/js/network.js';
  
  const data = {
      nodes: [
      { id: "home", url: "/", title: "Home" },
      { id: "blog", url: "/blog", title: "Blog" },
      { id: "projects", url: "/projects", title: "Projects" },
      { id: "notes", url: "/notes", title: "Notes" },
      { id: "about", url: "/about", title: "About"},
      { id: "search", url: "/search", title: "Search"}
      ],
      links: [
      { source: "home", target: "blog" },
      { source: "home", target: "projects" },
      { source: "home", target: "notes" },
      { source: "home", target: "about" },
      { source: "home", target: "search" }
      ]
  };
  
  const networkGraph = new NetworkGraph(data, "network-graph");
</script>

You can explore the full graph-tree of this website [here](/graph).

### Contact me:
Feel free to reach out at ssh2198@columbia.edu! I'm always happy to create and work on new stuff.