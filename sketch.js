
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
  Engine.run(engine);
	//Create the Bodies Here.
  roof = new Roof(800,100,600,20)
  bob1 = new Bob(650,250,25)
  bob2 = new Bob(700,250,25)
  bob3 = new Bob(750,250,25)
  bob4 = new Bob(800,250,25)
  bob5 = new Bob(850,250,25)
  rope1=new Rope(bob1.body,roof.body,-50,0);
rope2=new Rope(bob2.body,roof.body,-25,0);
rope3=new Rope(bob3.body,roof.body,0,0);
rope4=new Rope(bob4.body,roof.body,25,0);
rope5=new Rope(bob5.body,roof.body,50,0);
//Engine.update(engine)




	
  
}


function draw() {
  rectMode(CENTER);
  background(120);

  roof.display();
  bob1.display();
  rope1.display();
  bob2.display();
  rope2.display();
  bob3.display();
  rope3.display();
  bob4.display();
  rope4.display();
  bob5.display();
  rope5.display();
  //line(bob1.body.position.x,bob1.body.position.y,roof.body.position.x-50,roof.body.position.y)
  //line(bob2.body.position.x,bob2.body.position.y,roof.body.position.x-25,roof.body.position.y)
  //line(bob3.body.position.x,bob3.body.position.y,roof.body.position.x+0,roof.body.position.y)
 // line(bob4.body.position.x,bob4.body.position.y,roof.body.position.x+25,roof.body.position.y)
  //line(bob5.body.position.x,bob5.body.position.y,roof.body.position.x+50,roof.body.position.y)
  drawSprites();
 
}
function keyPressed () {
  if (keyCode === UP_ARROW){
   Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45})
  }
}


