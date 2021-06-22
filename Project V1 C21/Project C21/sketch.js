var wall,thickness;

var bullet, speed,weight;

var  damage;

function setup() {
  createCanvas(1600,400);
  thickness=random(22,83);

  speed=random(223,321);
  weight=random(30,52);

  bullet=createSprite(50, 200, 50, 50);
  

  wall=createSprite(1200, 200, thickness, height/2);

  bullet.velocityX=int(speed);
  
  //damage = 0.5 * speed*weight*speed/(thickness*thickness*thickness);
}

function draw() {
  background(255,255,255);  

 if (hascollided(bullet,wall)) {
  bullet.velocityX=0;
  bullet.x=wall.x-bullet.width;
  damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

  if (damage>10)
  {wall.shapeColor="red"}
  else{wall.shapeColor="green"}
   
 }
  
  drawSprites();
}




function hascollided(bulletp,wallp)
{
  bulletrtedge = bulletp.x + bulletp.width;
  wallltedge = wallp.x;
  console.log(bulletrtedge,wallltedge);

  if(bulletrtedge >= wallltedge){
    return true;
  }
  else{
    return false;
  }
}
