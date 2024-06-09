---
title: "Blog"
permalink: /blog/
layout: posts
author_profile: false
---
{% include inline-network.html %}

Blog posts, self-contained reflections.

<div id="network-graph"></div>

<script src="https://d3js.org/d3.v6.min.js"></script>
<script src="/assets/js/network.js"></script>

<script type="module">
  import NetworkGraph from '/assets/js/network.js';
  fetch('/assets/static/blog_nodes.json')
    .then(response => response.json())
    .then(data => {
      const networkGraph = new NetworkGraph(data, 'network-graph');
    });
</script>