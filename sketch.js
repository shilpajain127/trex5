function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

var a ,b;

function setup(){

  createCanvas(800,800);

  a= createSprite(200,200,20,20);
  a.shapeColor="green";
  a.debug=true;

  b = createSprite(300,300,40,40);
  b.shapeColor="green";
  b.debug=true;

}



function draw() {
  background(255,255,255);  
  a.x=World.mouseX; 
  a.y=World.mouseY;

 

  var width1=a.width/2+b.width/2;

  console.log(width1);

  if(a.x-b.x < width1 && b.x-a.x<width1){
    a.shapeColor="red";
    b.shapeColor="red";
  }
  else{
    a.shapeColor="green";
    b.shapeColor="green";
  }

  drawSprites();
}