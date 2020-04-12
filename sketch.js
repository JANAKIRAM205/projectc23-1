function setup() {
  createCanvas(1200,800);
  body=createSprite(600,400,350,600);
  body.shapeColor="brown";
  guard1=createSprite(325,475,200,450);
  guard1.shapeColor="red";
  guard2=createSprite(875,475,200,450);
  guard2.shapeColor="red";
  door=createSprite(600,525,200,350);
  door.shapeColor="black";
  knock1=createSprite(550,600,50,50);
  knock1.shapeColor="yellow";
  knock2=createSprite(650,600,50,50);
  knock2.shapeColor="yellow";
  rews=createSprite(600,525,5,350);
  rews.shapeColor="yellow";
  window1=createSprite(325,475,100,225);
  window1.shapeColor="black";
  window2=createSprite(875,475,100,225);
  window2.shapeColor="black";
  brick1=createSprite(600,75,75,75);
  brick1.shapeColor="brown";
  brick2=createSprite(460,75,75,75);
  brick2.shapeColor="brown";
  brick3=createSprite(740,75,75,75);
  brick3.shapeColor="brown";
  block1=createSprite(275,225,50,50);
  block2=createSprite(375,225,50,50);
  block1.shapeColor="red";
  block2.shapeColor="red";
  block3=createSprite(825,225,50,50);
  block4=createSprite(925,225,50,50);
  block3.shapeColor="red";
  block4.shapeColor="red";

}

function draw() {
  background(225,225,225);  
  drawSprites();


}
