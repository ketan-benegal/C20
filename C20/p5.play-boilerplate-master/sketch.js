var fixed,moving



function setup() {
  createCanvas(800,400);
  fixed=createSprite(400, 200, 50, 50);
  moving=createSprite(100, 200, 100, 50);
  fixed.shapeColor="Blue"
  moving.shapeColor="Blue"
}

function draw() {
  background(255,255,255);
  moving.x=mouseX
  moving.y=mouseY 
  
  if(moving.x-fixed.x <= moving.width/2+fixed.width/2
    && fixed.x-moving.x <= moving.width/2+fixed.width/2
    && moving.y-fixed.y <= moving.height/2+fixed.height/2
    && fixed.y-moving.y <= moving.height/2+fixed.height/2 ){
      fixed.shapeColor="Red"
  moving.shapeColor="Red"
    }
    else{
      fixed.shapeColor="Blue"
  moving.shapeColor="Blue"

    }
  drawSprites();
}

