const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world,body;

function setup()
{
createCanvas(400,400);
engine=Engine.create();
world=engine.world;

var option= { restitution : 1.0}
body=Bodies.rectangle(200,200,50,50,option);
World.add(world,body);

var groundoption= { isStatic : true}
groundbody=Bodies.rectangle(200,390,400,20,groundoption);
World.add(world,groundbody);

var balloption= { restitution : 1.0}
ball=Bodies.circle(200,300,20,balloption);
World.add(world,ball);


}

function draw()
{
 background("gold");
 Engine.update(engine);
 rectMode(CENTER);
 rect(body.position.x,body.position.y,50,50);
 rectMode(CENTER);
 rect(groundbody.position.x,groundbody.position.y,400,20);

 ellipseMode(RADIUS);
 ellipse(ball.position.x,ball.position.y,20,20);
}