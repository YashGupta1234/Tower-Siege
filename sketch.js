const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var rope1;
var ground,stand1,stand2,stand3,wall;
var ball;
var box1

function setup() {
	createCanvas(1800, 800);
	engine = Engine.create();
	world = engine.world;

	ball = new Ball(150,400);

	rope1= new Launcher(ball.body,{x:150,y:300})

	ground = new Ground(800,800,2000,100,"grey");
	wall=new Ground(1900,800,100,1800,"black");

	stand1=new Ground(810,500,400,10,"red");
	stand2=new Ground(1500,300,400,10,"red");
	stand3=new Ground(1200,700,400,10,"red");
	
	box1=new Box(750,490,"blue");
	box2=new Box(780,490,"blue");
	box3=new Box(810,490,"blue");
	box4=new Box(840,490,"blue");
	box5=new Box(870,490,"blue");
	box6=new Box(780,440,"black");
	box7=new Box(810,440,"black");
	box8=new Box(840,440,"black");
	box9=new Box(810,390,"black");
	box10=new Box(1440,290,"blue");
	box11=new Box(1470,290,"blue");
	box12=new Box(1500,290,"blue");
	box13=new Box(1530,290,"blue");
	box14=new Box(1560,290,"blue");
	box15=new Box(1470,240,"black");
	box16=new Box(1500,240,"black");
	box17=new Box(1530,240,"black");
    box18=new Box(1500,190,"black");
	box19=new Box(1140,690,"blue");
	box20=new Box(1170,690,"blue");
	box21=new Box(1200,690,"blue");
	box22=new Box(1230,690,"blue");
	box23=new Box(1260,690,"blue");
	box24=new Box(1170,640,"black");
	box25=new Box(1200,640,"black");
	box26=new Box(1230,640,"black");
    box27=new Box(1200,590,"black");
	
	Engine.run(engine); 
}

function draw() {
  rectMode(CENTER);
  background("white");

	ground.display();
	wall.display();

	ball.display();
	rope1.display();
	stand1.display();
	stand2.display();
	stand3.display();
	box1.display();
	box2.display();
	box3.display();
	box4.display();
	box5.display();
	box6.display();
	box7.display();
	box8.display();
	box9.display();
	box10.display();
	box11.display();
	box12.display();
	box13.display();
	box14.display();
	box15.display();
	box16.display();
	box17.display();
	box18.display();
	box19.display();
	box20.display();
	box21.display();
	box22.display();
	box23.display();
	box24.display();
	box25.display();
	box26.display();
	box27.display();

  drawSprites();
}
function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
    rope1.fly();
}