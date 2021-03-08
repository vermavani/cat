var cat;
var mouse;


function preload() {
    //load the images here
    gardenImg = loadImage("garden.png")
    cat1 = loadImage("cat1.png")
    mouse1= loadImage("mouse1.png")
    cat2 = loadAnimation(running,"cat2.png")
    mouse2= loadAnimation(running,"mouse2.png")

}

function setup(){
    createCanvas(1000,800);

    garden = createSprite(800,800)
    garden.addImage(gardenImg)

    //create tom and jerry sprites here
      cat = createSprite(200,300,50,50)
      cat.addImage(cat1)

      mouse = createSprite(500,600,50,50)
      mouse.addImage(mouse1)
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
    cat.velocityX =3;
    cat.addAnimation("running",cat2)


  }

}
