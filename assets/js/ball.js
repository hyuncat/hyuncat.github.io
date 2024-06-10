class DraggableBall {
    constructor(containerId) {
        this.containerId = containerId;
        this.myP5 = new p5((sketch) => this.run(sketch), containerId);
    }

    run(sketch) {
        sketch.setup = () => {
            let canvas = sketch.createCanvas(sketch.select(`#${this.containerId}`).width, sketch.select(`#${this.containerId}`).height);
            canvas.parent(this.containerId);
            this.setupMatter(sketch);
        };

        sketch.draw = () => {
            sketch.background(255);
            this.updateMatter(sketch);
        };
    }

    setupMatter(sketch) {
        this.engine = Matter.Engine.create();
        this.world = this.engine.world;
        
        // Create a ball
        this.ball = Matter.Bodies.circle(sketch.width / 2, sketch.height / 2, 30, {
            isStatic: false
        });
        Matter.World.add(this.world, this.ball);

        // Create a ground
        this.ground = Matter.Bodies.rectangle(sketch.width / 2, sketch.height - 20, sketch.width, 40, {
            isStatic: true
        });
        Matter.World.add(this.world, this.ground);

        // Create a mouse
        let mouse = Matter.Mouse.create(sketch.canvas.elt);
        mouse.pixelRatio = sketch.pixelDensity(); 

        this.mConstraint = Matter.MouseConstraint.create(this.engine, {
            mouse: Matter.Mouse.create(sketch.canvas.elt),
            constraint: {
                stiffness: 0.2,
                render: { visible: false }
            }
        });
        Matter.World.add(this.world, this.mConstraint);
    }

    updateMatter(sketch) {
        Matter.Engine.update(this.engine);
        sketch.push();
        sketch.translate(this.ball.position.x, this.ball.position.y);
        sketch.ellipseMode(sketch.RADIUS);
        sketch.ellipse(0, 0, 30, 30);
        sketch.pop();
    }
}

export default DraggableBall;
