var tom1,tom2,tom3;
var jerry1,jerry2,jerry3;
var bg,bgImg;
var tom1Img,tom2Img,tom3Img;
var jerry1Img,jerry2Img,jerry3Img;

function preload() {
    //load the images here
    tom1Img = loadImage("cat1.png");
    tom2Img = loadAnimation("cat2.png","cat3.png");
    tom3Img = loadAnimation("cat4.png");
    jerry1Img = loadImage("mouse1.png");
    jerry2Img = loadAnimation("mouse2.png","mouse3.png");
    jerry3Img = loadImage("mouse4.png");
    bgImg = loadImg("garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom1 = createSprite(900,300,50,50);
    tom1.addImage("tom1",tom1Img);
    jerry1 = createSprite(100,300,50,50);
    jerry1.addImage("jerry1",jerry1Img);
    bg = createSprite(500,400,1000,800);
    bg.addImage("bg",bgImg);
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(tom2.x-jerry2.x < tom2.width/2+jerry2.width/2 && jerry2.x-tom2.x < tom2.width/2+jerry2.width/2  && jerry2.y-tom2.y < tom2.height/2+jerry2.height/2  && tom2.y - jerry2.y < tom2.height/2+jerry2.height/2  ){
        tom2.changeAnimation("tom3",tom3Img);
        jerry2.changeAnimation("jerry3",jerry3Img);
          }
          else{
            tom2.addAnimation("tom2",tom2Img);
            jerry2.addAnimation("jerry2",jerry2Img);
          }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyDown("LEFT_ARROW")){
     var tom2 = createSprite(900,300,50,50);
     tom2.addAnimation("tom2",tom2Img);
     tom2.velocityY = -4;
     var  jerry2 = createSprite(100,300,50,50)
     jerry2.addAnimation("jerry2",jerry2Img);

  }


}
