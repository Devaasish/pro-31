const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var maxDrops = 100;
var drops;

function setup(){
   createCanvas(396,694) 
   engine = Engine.create();
   world = engine.world;
}

function draw(){
    background(0,0,0);
    
    for (var i = 0; i < maxDrops; i++) {
        drops = new Drop(random(5,600), random(5,600));
    }

    drops.showDrop();
    drops.update();
}

