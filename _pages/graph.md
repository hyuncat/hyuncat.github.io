---
title: "Graph View"
layout: default
permalink: /graph/
---

{% include big-network.html %}

<div id="network-graph"></div>

<script src="https://d3js.org/d3.v6.min.js"></script>
<script src="/assets/js/network.js"></script>

<script src="https://d3js.org/d3.v6.min.js"></script>
<script src="/assets/js/network.js"></script>
<script type="module">
    import NetworkGraph from '/assets/js/network.js';
    
    const data = {
        nodes: [
        { id: "home", url: "/", title: "Home" },
        { id: "blog", url: "/blog", title: "Blog" },
        { id: "projects", url: "/projects", title: "Projects" },
        { id: "notes", url: "/notes", title: "Notes" },
        { id: "about", url: "/about", title: "About"},
        { id: "search", url: "/search", title: "Search"},
        {
            "id": "cpp-classes",
            "url": "/notes/cpp-classes",
            "title": "C++ Classes"
        },
        {
            "id": "tkinter",
            "url": "/notes/tkinter",
            "title": "Tkinter"
        },
        {
            "id": "vim",
            "url": "/notes/vim",
            "title": "Vim"
        },
        {
            "id": "2024-02-11-2024-courseload",
            "url": "/blog/2024-Courseload",
            "title": "2024 Courseload"
        },
        {
            "id": "2024-02-26-sail-torch-1",
            "url": "/blog/sail-torch-1",
            "title": "Training a neural network to poorly predict sailboat prices..."
        }
        ],
        links: [
        { source: "home", target: "blog" },
        { source: "home", target: "projects" },
        { source: "home", target: "notes" },
        { source: "home", target: "about" },
        { source: "home", target: "search" },
        {
            "source": "notes",
            "target": "cpp-classes"
        },
        {
            "source": "notes",
            "target": "tkinter"
        },
        {
            "source": "notes",
            "target": "vim"
        },
        {
            "source": "blog",
            "target": "2024-02-11-2024-courseload"
        },
        {
            "source": "blog",
            "target": "2024-02-26-sail-torch-1"
        }
        ]
    };
    
    const networkGraph = new NetworkGraph(data, "network-graph");
</script>
