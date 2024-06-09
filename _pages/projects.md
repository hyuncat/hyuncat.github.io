---
title: "Projects"
layout: single
permalink: /projects/
---
<div id="p5-canvas" style="width: 100%; height: 60vh;"></div>
<div id="tooltip" style="display: none; position: absolute; background: rgba(0, 0, 0, 0.7); color: white; padding: 10px; border-radius: 5px;"></div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.17.1/matter.min.js"></script>

<script type="module">
  import ProjectVisualizer from '/assets/js/projects.js';

  document.addEventListener('DOMContentLoaded', () => {
    const projects = [
      { imgPath: '/assets/images/sarah_avatar.jpg', title: 'RichStudio', info: 'Clusteringggg', url: '/projects/' },
      { imgPath: '/assets/images/pretty.jpeg', title: 'Playlistify', info: 'Music stuff', url: '/projects/' }
    ];

    console.log("Initializing ProjectVisualizer with projects:", projects);
    new ProjectVisualizer(projects, 'p5-canvas');
  });
</script>
