const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var boy1;
var ground1;
var mango1, mango2, mango3, mango4, mango5, mango6;
var tree1;
var stoneObj;
var stoneImg;
var boyImg;
var treeImg;


function preload()
{
	boyImg=loadImage("Plucking mangoes/boy.png");
    treeImg=loadImage("Plucking mangoes/tree.png");
	stoneImg=loadImage("Plucking mangoes/stone.png");
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  

	//Create the Bodies Here.
	ground1 = new Ground();
	mango1 = new Mango(500, 200, 20);
	//mango2 = new mango(510, 200, 20, 20);*/

	
  
}


function draw() {
  background("white");
  
  ground1.display();
  mango1.display();
  //mango2.display();*/
 
}



