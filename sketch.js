const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12;
var polygon;
var sling;
var score;
var backgroundImg;
var bg = "pure-white-background.jpg";
function preload(){
  getBackgroundImg();
}
function setup() {
  createCanvas(1000,600);
 // createSprite(400, 200, 50, 50);
 engine = Engine.create();
 world = engine.world;


 box1=new Box(300,200,50,50);
 box2=new Box(350,200,50,50);
 box3=new Box(400,200,50,50);
 box4=new Box(325,150,50,50);
 box5=new Box(375,150,50,50);
 box6=new Box(350,100,50,50);

 box7=new Box(500,550,50,50);
 box8=new Box(550,550,50,50);
 box9=new Box(600,550,50,50);
 box10=new Box(525,500,50,50);
 box11=new Box(575,500,50,50);
 box12=new Box(550,450,50,50);

 box13=new Box(750,350,50,50);
 box14=new Box(800,350,50,50);
 box15=new Box(850,350,50,50);
 box16=new Box(775,300,50,50);
 box17=new Box(825,300,50,50);
 box18=new Box(800,250,50,50);

ground1=new Ground(350,225,170,10);
ground2=new Ground(550,575,170,10);
ground3=new Ground(800,375,170,10);
support=new Ground(500,600,1000,10);


polygon=new Polygon(100,50);
sling=new SlingShot(polygon.body,{x:100,y:300});

 
 score=0;
 Engine.run(engine);
}

function draw() {
  if(backgroundImg)
  background(backgroundImg);
 
  textSize(35)
  fill("white")
  text("Score: " + score, 100, 50)
  
  Engine.update(engine);

 
  fill("red");
  box1.display();
  box1.score();
  fill("yellow");
  box2.display();
  box2.score();
  fill("pink");
  box3.display();
  box3.score();
  fill("green");
  box4.display();
  box4.score();
  fill("blue");
  box5.display();
  box5.score();
  fill("cyan");
  box6.display();
  box6.score();
  fill("red");
  box7.display();
  box7.score();
  fill("green");
  box8.display();
  box8.score();
  fill("cyan");
  box9.display();
  box9.score();
  fill("yellow");
  box10.display();
  box10.score();
  fill("blue");
  box11.display();
  box11.score();
  fill("pink");
  box12.display();
  box12.score();

  fill("pink");
  box13.display();
  box13.score();
  fill("blue");
  box14.display();
  box14.score();
  fill("cyan");
  box15.display();
  box15.score();
  fill("yellow");
  box16.display();
  box16.score();
  fill("green");
  box17.display();
  box17.score();
  fill("red");
  box18.display();
  box18.score();

 ground1.display();
 ground2.display();
 ground3.display();

 fill("orange");
 polygon.display();
support.display();
 sling.display();
 // drawSprites();
}

function keyPressed(){
  if(keyCode===32){
      sling.attach(polygon.body)
      
  }
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling.fly();
}
async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  console.log(hour);
  if(hour>=060 && hour<=190){
      bg = "pure-white-background.jpg";
  }
  else{
      bg = "free-video.jpg";
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}