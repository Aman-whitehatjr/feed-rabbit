var garden,rabbit,apple;
var gardenImg,rabbitImg,appleImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  if (keyDown("LEFT")) {
    rabbit.x=rabbit.x-13;
   }

  if (keyDown("RIGHT")) {
    rabbit.x=rabbit.x+13;
   }
   //console.log(frameCount)




  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
}
function spawnApples(){
 // write your code here 
 if (frameCount%60===0){
 
  apple= createSprite(200,100,40,10)
 apple.velocityY = +3
 apple.addImage(appleImg)
 apple.scale =0.4
 apple.y =Math.round(random(+10,+100))
 apple.depth = rabbit.depth
 rabbit.depth = rabbit.depth+1
 console.log(rabbit.depth)
 console.log(apple.depth)
 
 }
 
 
 
 }
 