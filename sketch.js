var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var paper,ground1;

function setup() {
	createCanvas(800, 700);

	paper = new Paper(200,455,50,50);
	
	Ground1 = new Ground(350,350,400,25);
  

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);

	
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper.display();
  
  drawSprites();
 
}

function keyPressed() {
    if(keyCode === UP_ARROW){

	}

}



