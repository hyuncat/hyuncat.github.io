---
title: "Ball"
permalink: /ball
layout: single
---

<div id="p5-canvas" style="width: 100%; height: 500px;"></div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.17.1/matter.min.js"></script>
<script type="module">
    import DraggableBall from '/assets/js/ball.js';
    const ball = new DraggableBall('p5-canvas');
</script>