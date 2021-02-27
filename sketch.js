var canvas;
var music;
var box;
var pole1,pole2,pole3,pole4;
var upEdg,downEdge,leftEdg,rightEdg;

function preload(){
    music = loadSound("music.mp3");

}

function setup(){
    canvas = createCanvas(650,600);
    background(0);

    //create 4 different surfaces
    pole1 = createSprite(80,560,150,20);
   pole1.shapeColor = ("RED");

  pole2 = createSprite(240,560,150,20);
   pole2.shapeColor = ("CYAN");
  
  pole3 = createSprite(400,560,150,20);
   pole3.shapeColor = ("BLUE");
  
  pole4 = createSprite(560,560,150,20);
   pole4.shapeColor = ("GREEN");
  
  box = createSprite(50,50,50,50)
  box.shapeColor = ("white")
  
  upEdg = createSprite(2,2,2,6000);
 downEdge = createSprite(2,598,6000,2);
  leftEdg = createSprite(648,2,2,6000);
  rightEdg = createSprite(598,2,6000,2);
    //create box sprite and give velocity
  box.velocityX=3;
  box.velocityY=3;

}
 
function draw() {
    background(rgb(169,169,169));
   
  drawSprites();
  
   //box.setCollider("edges");
    //add condition to check if box touching surface and make it box
  
  if(pole1.isTouching(box) && box.bounceOff(pole1)) {
      box.shapeColor = ("red");
    music.play();
    }
  
  if(pole2.isTouching(box) && box.bounceOff(pole2)) {
      box.shapeColor = ("cyan");
    music.play();
    }
  
  if(pole3.isTouching(box) && box.bounceOff(pole3)) {
      box.shapeColor = ("blue");
    music.play();
    }
  
  if(pole4.isTouching(box) && box.bounceOff(pole4)) {
      box.shapeColor = ("green");
    music.play();
    }
  
  if(upEdg.isTouching(box) && box.bounceOff(upEdg)) {
      box.shapeColor = ("white");
    music.play();
    }
  if(downEdge.isTouching(box) && box.bounceOff(downEdge)) {
      box.shapeColor = ("white");   
    }
  if(rightEdg.isTouching(box) && box.bounceOff(rightEdg)) {
      box.shapeColor = ("white");
    }
  if(leftEdg.isTouching(box) && box.bounceOff(leftEdg)) {
      box.shapeColor = ("white");
    }
  
  
  drawSprites();
}