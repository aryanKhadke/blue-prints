const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball,box;


function setup(){
    var canvas = createCanvas(1300,400);
    engine = Engine.create();
    world = engine.world;

    //() invokes construnctor of Ground class
   ground = new Ground(200, 380, 1200, 20);
    box = new Box(200, 200, 90, 90);

    var ball_options ={
        restitution: 1.0
    }

    ball = Bodies.circle(200,100,20, ball_options);
    World.add(world,ball);

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
   
    ground.display();
    box.display();
    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 20, 20);
}