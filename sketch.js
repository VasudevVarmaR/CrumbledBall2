
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperObject;
var wall1,wall2,wall3;
var rightSide,leftSide,bottomide;



function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

  ground = new Ground(600,height,1200,70);

  //rightSide
   wall1 = new Bin(728,382,20,175);

  //bottomSide 
   wall2 = new Bin(675,460,90,20);

  //leftSide
   wall3 = new Bin(640,382,20,175);

   paperObject =new Paper(100,445,40);
   

   Engine.run(engine);
   
   keyPressed();
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  
  

  paperObject.display();
  ground.display();
  wall1.display();
  wall2.display();
  wall3.display(); 
  
  //drawSprites();
 
}

function keyPressed()
{
  if(keyCode===UP_ARROW)
  {
    Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:65,y:-70});
  }
}



