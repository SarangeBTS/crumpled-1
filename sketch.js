
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var paper1;
var ground;
var side1,side2,side3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper1=new PAPER(100,100,20)
	ground=new GROUND();
	side1=new Dustbin(520,600,10,128)
	side2=new Dustbin(720,600,10,128)
	side3=new Dustbin(620,655,192,12)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper1.display();
  ground.display();
  side1.display();
  side2.display();
  side3.display();
}



function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.this.body.applyForce(this.paper.body,this.paper.position,{x:85,y:85})
	}
	}




