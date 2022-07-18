
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 900);
 

	engine = Engine.create();
	world = engine.world;

	var ball_options = {

		isStatic:false,
		restitution: 0.3,
		friction: 0,
		density: 1.2,

	}

	ball= Bodies.circle(30,710,10,10[ball_options])
     World.add(world,ball);
	//Create the Bodies WHere.






	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  groundx.display();
  leftSide.display();
  rightSide.display();
  
  drawSprites();
 
}

function forcex(){

if(KeyCode === UP_ARROW){
Matter.Body.applyForce(ball,ball.position,{x:50,y:85})}

}


