class Drop {
    constructor(x,y){
        var options = {
            'isStatic': false,
            'density': 1,
            'friction': 0.1
        }

        this.body = Bodies.circle(x, y, 5, options);
        this.radius = 5;
        //this.rain = Matter.Body.circle(x,y,options);
        World.add(world, this.body);
    }

    update(){
        if(this.body.position.y > 694){
            Matter.Body.setPosition(this.body, {x:random(5,400), y:random(5,400)})
        }
    }

    showDrop(){
        ellipseMode(CENTER);
        fill("blue");
        noStroke();
        ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
    }
}