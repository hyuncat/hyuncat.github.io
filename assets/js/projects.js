// projects.js

// import Matter from 'matter-js';

class ProjectVisualizer {
    constructor(projects, containerId) {
        this.containerId = containerId;
        this.projects = projects;
        this.container = document.getElementById(containerId); // Access the container element

        this.initMatter();
    }

    initMatter() {
        // Create an engine
        this.engine = Matter.Engine.create();
        this.world = this.engine.world;

        // Create a renderer
        this.render = Matter.Render.create({
            element: this.container,
            engine: this.engine,
            options: {
                width: this.container.offsetWidth,
                height: this.container.offsetHeight,
                wireframes: false, // Show solid shapes
                background: '#f0f0f0' // Set the background color
            }
        });

        // Create a static ground
        this.ground = Matter.Bodies.rectangle(this.container.offsetWidth / 2, this.container.offsetHeight+20, this.container.offsetWidth, 10, {
            isStatic: true,
            label: 'ground',
            render: {
                fillStyle: '#6A7D95',
                strokeStyle: '#6A7D95'
            }
        });
        Matter.World.add(this.world, this.ground);

        // Create boundary walls
        const walls = [
            Matter.Bodies.rectangle(this.container.offsetWidth / 2, -10, this.container.offsetWidth, 20, { isStatic: true }), // top
            Matter.Bodies.rectangle(this.container.offsetWidth / 2, this.container.offsetHeight + 10, this.container.offsetWidth, 20, { isStatic: true }), // bottom
            Matter.Bodies.rectangle(-10, this.container.offsetHeight / 2, 20, this.container.offsetHeight, { isStatic: true }), // left
            Matter.Bodies.rectangle(this.container.offsetWidth + 10, this.container.offsetHeight / 2, 20, this.container.offsetHeight, { isStatic: true }) // right
        ];
        Matter.World.add(this.world, walls);

        // Create boxes for each project
        this.boxWidth = 150;
        this.boxHeight = 150;
        this.boxes = this.projects.map(project => {
            let img = new Image();
            img.src = project.imgPath;
        
            const box = Matter.Bodies.rectangle(
                Math.random() * (this.container.offsetWidth - 200) + this.boxWidth / 2,
                Math.random() * (this.container.offsetHeight - 300) + this.boxHeight / 2,
                this.boxWidth, this.boxHeight,
                {
                    isStatic: false,
                    render: {
                        fillStyle: '#91B6E2',
                        sprite: {
                            texture: project.imgPath
                        }
                    },
                    project: project
                }
            );
        
            img.onload = () => {
                const scaleX = this.boxWidth / img.naturalWidth;
                const scaleY = this.boxHeight / img.naturalHeight;
                const scale = Math.min(scaleX, scaleY);
        
                box.render.sprite.xScale = scaleX;
                box.render.sprite.yScale = scaleY;
            };
        
            return box;
        });
        Matter.World.add(this.world, this.boxes);

        // Setup mouse constraints to allow dragging
        this.setupMouseConstraint();

        // Run the engine
        Matter.Engine.run(this.engine);

        // Run the renderer
        Matter.Render.run(this.render);

        // Add hover and click event listeners
        this.addHoverAndClickEvents();
    }

    setupMouseConstraint() {
        const mouse = Matter.Mouse.create(this.render.canvas);
        const mouseConstraint = Matter.MouseConstraint.create(this.engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: false
                }
            }
        });
        Matter.World.add(this.world, mouseConstraint);
        this.render.mouse = mouse;

        // Track whether a box is being dragged
        this.isDragging = false;

        Matter.Events.on(mouseConstraint, 'startdrag', () => {
            this.isDragging = true;
        });
        Matter.Events.on(mouseConstraint, 'enddrag', () => {
            this.isDragging = false;
        });
    }

    addHoverAndClickEvents() {
        this.render.canvas.addEventListener('mousemove', (event) => {
            const mousePos = this.render.mouse.absolute;
            this.boxes.forEach(box => {
                if (Matter.Bounds.contains(box.bounds, mousePos)) {
                    // Change box color and display info
                    box.render.fillStyle = '#ffcc00'; // Change color on hover
                    const project = box.project;
                    const context = this.render.context;
                    context.fillStyle = '#000';
                    context.fillText(project.info, box.position.x - 75, box.position.y - 20);
                } else {
                    // Reset box color
                    box.render.fillStyle = '#91B6E2'; // Reset color
                }
            });
        });

        this.render.canvas.addEventListener('mouseout', () => {
            tooltip.style.display = 'none';
        });

        this.render.canvas.addEventListener('click', (event) => {
            if (!this.isDragging) {
                const mousePos = this.render.mouse.absolute;
                this.boxes.forEach(box => {
                    if (Matter.Bounds.contains(box.bounds, mousePos)) {
                        const project = box.project;
                        window.location.href = project.url;
                    }
                });
            }
        });
    }
}

export default ProjectVisualizer;
