var boy;
var ground;
var stone;
var tree;
var mango1;
var mango2;
var mango3;
var mango4;
var sling;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(800,500);


	engine = Engine.create();
	world = engine.world;

	mango1 = new Mango(462,193,40,40);
	mango2 = new Mango(615,71,40,40);
	mango3 = new Mango(685,171,40,40);
	mango4 = new Mango(500,95,40,40);
	mango5 = new Mango(577,198,40,40);
	tree = new Tree(578,260,450,450);
	ground = new Ground(400,478,800,1);
	boy = new Boy(160,440,200,200);
	stone = new Stone(500,400,40,40);
	sling = new Sling(stone.body,boy.body);

	//Create the Bodies Here.



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  ground.display();
  boy.display();
  stone.display();
  sling.display();
 
}



