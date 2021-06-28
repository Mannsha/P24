const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper, ground, box1, box2, box3;
var engine, world;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper = new Paper(200,200,20)
	console.log(paper.x,paper.y,paper.width)
	ground = new Ground(400,680,800,50)
	box1 = new Dustbin(715,617,20,80)
	box2 = new Dustbin(580,617,20,80)
	box3 = new Dustbin(647,650,155,20)





	Engine.run(engine);

	rectMode(CENTER);
	

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

  paper.display()
  ground.display()
  box1.display()
  box2.display()
  box3.display()
  drawSprites();
 
}

function keyPressed()
{
	//not being thrown
    if(keyCode===UP_ARROW)
    {
	    Matter.Body.applyForce(paper.body, paper.body.position, {x:50, y:-60})
		console.log("Returned")

        
		
    }
}

