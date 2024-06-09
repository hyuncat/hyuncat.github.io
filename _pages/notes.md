---
title: "Notes"
layout: collection
permalink: /notes/
collection: notes
entries_layout: list
author_profile: false
---
<!-- <style>
  #network-graph {
    width: 60vh;
    height: 60vh;
    border: 2px solid #ccc; 
    box-sizing: border-box;
    margin-top: 20px;
    margin-bottom: 30px;
  }
</style> -->

{% include inline-network.html %}

A collection of notes I've taken on various topics.

<div id="network-graph"></div>

<script src="https://d3js.org/d3.v6.min.js"></script>
<script src="/assets/js/network.js"></script>

<script type="module">
  import NetworkGraph from '/assets/js/network.js';
  fetch('/assets/static/notes_nodes.json')
    .then(response => response.json())
    .then(data => {
      const networkGraph = new NetworkGraph(data, 'network-graph');
    });
</script>
