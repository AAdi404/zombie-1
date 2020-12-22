var PLAY=1;
var END=0;
var gameState=PLAY;
var helicopter;
var package;
var ground;
var gameover;
var restart;
var human;
var zombie;
var points;
var playground1;
var playground2;
var playground3;
var invisible1;
var invisible2;
var helicopterImage;
var packageImage;
var gameoverImage;
var restartImage;
var humanImage1;
var humanImage2;
var humanImage3;
var humanImage4;
var humanImage5;
var humanImage6;
var zombieImage1;
var zombieImage2;
var zombieImage3;
var zombieImage4;
var zombieImage5;
var playgroundImage;
var groundBody;
var packageBody
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;
function preload(){
helicopterImage=loadImage("helicopter.png");
packageImage=loadImage("package.png");
humanImage1=loadImage("human 1.png");
humanImage2=loadImage("human 2.png");
humanImage3=loadImage("human 3.png");
humanImage4=loadImage("human 4.png");
humanImage5=loadImage("human 5.png");
humanImage6=loadImage("human 6.png");
zombieImage1=loadImage("zombie 1.png");
zombieImage2=loadImage("zombie 2.png");
zombieImage3=loadImage("zombie 3.png");
zombieImage4=loadImage("zombie 4.png");
zombieImage5=loadImage("zombie 5.png");
playgroundImage=loadImage("zombie city.png");
}
function setup(){
createCanvas(800,500);
rectMode(CENTER);
playground1=createSprite(400,250,20,20);
playground1.addImage(playgroundImage);
playground1.depth=1.5;
playground2=createSprite(1200,250,20,20);
playground2.addImage(playgroundImage);
playground3=createSprite(2000,250,20,20);
playground3.addImage(playgroundImage);
helicopter=createSprite(400,100,10,10);
helicopter.addImage(helicopterImage);
helicopter.scale=0.6;
package=createSprite(400,100,10,10);
package.addImage(packageImage);
package.scale=0.2;
package.depth=3.5;
ground=createSprite(400,485,800,30);
ground.visible=false;
engine=Engine.create();
world=engine.world;
packageBody=Bodies.circle(400,100,5,{restitution:0.4,isStatic:true});
World.add(world,packageBody);
ground=Bodies.rectangle(400,485,800,30,{isStatic:true});
World.add(world,ground);
Engine.run(engine);
points=0;
}
function draw(){
rectMode(CENTER);
background("red");
package.x=packageBody.position.x
package.y=packageBody.position.y
playground1.velocityX=-5;
playground2.velocityX=-5;
playground3.velocityX=-5;
if(playground2.x<-395){
playground2.x=1200;
}
if(playground3.x<-395){
playground3.x=1200;
}
drop();
human();
zombie();
drawSprites();
}
function drop(){
if(keyCode===DOWN_ARROW){
Matter.Body.setStatic(packageBody,false);
}
}
function reset(){
gameState=PLAY;
playground2.x=900;
playground3.x=1500;
playground2.depth=2;
playground3.depth=3;
}
function human(){
if(frameCount%173===0){
var human=createSprite(-50,410,10,10);
human.velocityX=5;
human.scale=1;
human.lifetime=300;
var rand=Math.round(random(1,6));
switch(rand){
case 1:human.addImage(humanImage1);
break;
case 2:human.addImage(humanImage2);
break;
case 3:human.addImage(humanImage3);
break;
case 4:human.addImage(humanImage4);
break;
case 5:human.addImage(humanImage5);
break;
case 6:human.addImage(humanImage6);
break;
default: break;
}
}
}
function zombie(){
if(frameCount%250===0){
var zombie=createSprite(-50,410,10,10);
zombie.velocityX=5;
zombie.scale=1;
zombie.lifetime=300;
var rand=Math.round(random(1,5));
switch(rand){
case 1:zombie.addImage(zombieImage1);
break;
case 2:zombie.addImage(zombieImage2);
break;
case 3:zombie.addImage(zombieImage3);
break;
case 4:zombie.addImage(zombieImage4);
break;
case 5:zombie.addImage(zombieImage5);
break;
default: break;
}
}
}