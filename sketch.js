const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var pig;
var log;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,height,1200,20);
    box1 = new Box(700,300,70,70);
    box2 = new Box(920,300,70,70);
    pig=new Pig(810,320);
    log=new Log(810,250,300,PI/2)
    box3= new Box(700,230,70,70);
    box4 = new Box(920,230,70,70);
    pig2=new Pig(810,200);
    log2=new Log(810,180,300,PI/2)
    bird=new Bird(100,100);
    log3=new Log(760,130,150,PI/6);
    log4=new Log( 870,130,150,-PI/6);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig.display();
    log.display();
    box3.display();
    box4.display();
    log2.display();
    pig2.display();
    bird.display();
    log3.display();
    log4.display();
}