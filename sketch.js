var sea;
var seaImg,shipImg1;

function preload(){
seaImg= loadImage("sea.png");
shipImg1=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);

  sea=createSprite(350,200,20,400);
  sea.addImage("sea.png",seaImg);
  sea.velocityX=-2;
 
  ship=createSprite(200,290,150,150);
  ship.addAnimation("moving",shipImg1);
  ship.scale=0.3;
}

function draw() {
  background("blue");

  if(sea.x<0){
    sea.x=sea.width/2;
  }
drawSprites();
}