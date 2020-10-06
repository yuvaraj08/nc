
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rope1,roof1,bob1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	rope1=new rope(200,200,10,10);
	roof1=new roof(200,180,10,10);
	bob1=new bob(200,170,10,10);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 bob1.display();
 roof1.display();
 rope1.display();
 
}



