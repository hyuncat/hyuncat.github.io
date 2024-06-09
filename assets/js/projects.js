// projects.js

// import Matter from 'matter-js';

class ProjectVisualizer {
    constructor(projects, containerId) {
        this.containerId = containerId;
        this.projects = projects.map(project => {
            return {
                ...project,
                darkImgPath: project.imgPath.replace('/assets/images/projects', '/assets/images/projects/dark/')
            };
        });
        this.container = document.getElementById(containerId); // Access the container element

        this.initMatter();
    }

    loadImage(src) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = src;
            img.onload = () => resolve(img);
            img.onerror = (err) => reject(err);
        });
    }

    async initMatter() {
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
        this.boxes = []

        for (let project of this.projects) {
            let img = await this.loadImage(project.imgPath);
            let darkImg = await this.loadImage(project.darkImgPath);

            const box = Matter.Bodies.rectangle(
                Math.random() * (this.container.offsetWidth - 200) + this.boxWidth / 2,
                Math.random() * (this.container.offsetHeight - 300) + this.boxHeight / 2,
                this.boxWidth, this.boxHeight,
                {
                    isStatic: false,
                    render: {
                        sprite: {
                            texture: project.imgPath,
                            xScale: this.boxWidth / img.naturalWidth,
                            yScale: this.boxHeight / img.naturalHeight
                        }
                    },
                    project: project,
                    originalTexture: project.imgPath,
                    darkTexture: project.darkImgPath
                }
            );
            this.boxes.push(box);
            Matter.World.add(this.world, box);
        }

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
            let foundHoveredBox = false;

            this.boxes.forEach(box => {
                if (Matter.Bounds.contains(box.bounds, mousePos)) {
                    // Change box color and display info
                    box.render.sprite.texture = box.darkTexture;
                    this.showOverlay = true;
                    this.hoveredBox = box;
                    foundHoveredBox = true;
                } else {
                    // Reset box color
                    box.render.sprite.texture = box.originalTexture;
                    this.showOverlay = false;
                }
            });

            if (!foundHoveredBox) {
                this.hoveredBox = null;
            }
        });

        this.render.canvas.addEventListener('click', (event) => {
            if (!this.isDragging && this.hoveredBox) {
                const project = this.hoveredBox.project;
                window.location.href = project.url;
            }
        });
    }
}

export default ProjectVisualizer;
