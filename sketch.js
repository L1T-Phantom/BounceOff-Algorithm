var movingRect, fixedRect,gameObject1;
var box1,box2;

function setup() {
  createCanvas(800,400);

  fixedRect = createSprite(400,200,50,70);
  fixedRect.shapeColor="green";
  fixedRect.debug = true;

  movingRect = createSprite(200, 200, 70, 30);
  movingRect.shapeColor = "green";
  movingRect.debug= true;
  gameObject1 = createSprite(300,300,40,60);
  
  box1 = createSprite(50,50,50,50);
  box2 = createSprite(700,50,50,50);
    
  box1.velocityX = 4;
  box2.velocityX = -4;

  box1.debug = true;
  box2.debug = true;

}

function draw() {
  background("lightblue");  

  movingRect.x= mouseX;
  movingRect.y= mouseY;

  console.log(movingRect.width/2+fixedRect.width/2);
  console.log(movingRect.x-fixedRect.x);

  if(isTouching(movingRect,gameObject1)){
    gameObject1.shapeColor="red";
    movingRect.shapeColor = "red";
  }else {
    gameObject1.shapeColor="green";
    movingRect.shapeColor = "green";
  }

  bounceOff(box1,box2);
  drawSprites();
}

