---
title: "Projects"
layout: default
permalink: /projects/
---
<style>
    /* body {
        margin: 30px;
        padding: 0;
        width: 100;
        text-align: center;
    } */
    #p5-canvas {
        display: block;
        margin-top: 40px;
        margin-left: 5%;
        margin-right: 5%;
        width: 90%;
        height: 80vh;
    }
</style>
<div id="p5-canvas"></div>
<div id="tooltip" style="display: none; position: absolute; background: rgba(0, 0, 0, 0.7); color: white; padding: 10px; border-radius: 5px;"></div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.17.1/matter.min.js"></script>

<script type="module">
  import ProjectVisualizer from '/assets/js/projects.js';

  document.addEventListener('DOMContentLoaded', () => {
    const projects = [
    { 
        imgPath: '/assets/images/projects/richstudio.png', 
        title: 'RichStudio', 
        info: 'Clusteringggg', 
        url: 'https://github.com/hyuncat/RichStudio' 
    },
    {   
        imgPath: '/assets/images/projects/playlistify2.png', 
        title: 'Playlistify', 
        info: 'Music stuff', 
        url: 'https://github.com/hyuncat/playlistify' 
    },
    {   
        imgPath: '/assets/images/projects/origami.png', 
        title: 'DNA Coloring Algorithm', 
        info: 'Coloring', 
        url: 'https://github.com/hyuncat/DNA-origami' 
    },
    { 
        imgPath: '/assets/images/projects/integral.png', 
        title: 'daily-integral', 
        info: 'Yay math', 
        url: 'https://github.com/hyuncat/daily-integral' 
    }
    ];

    console.log("Initializing ProjectVisualizer with projects:", projects);
    new ProjectVisualizer(projects, 'p5-canvas');
  });
</script>
