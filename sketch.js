var path,girl;
var pw1,pw2,pw3,pw4,pw5,pw6,pw7,pw8;
var pathImg

var clap;
var clown;
var dance;
var eyeroll;
var float;
var hello;
var hug;
var jump;

var END =0;
var PLAY =1;
var gameState = PLAY;

var distance=0;
var gameOver, restart;

var pennyWise;

function preload(){

  standingLeft = loadAnimation("MC2/standingL.png")
  standingRight = loadAnimation("MC/standingR.png")
  runningRight = loadAnimation("MC/MC_00.png", "MC/MC_01.png", "MC/MC_02.png", 
  "MC/MC_03.png", "MC/MC_04.png", "MC/MC_05.png", "MC/MC_06.png", "MC/MC_07.png", 
  "MC/MC_08.png", "MC/MC_09.png", "MC/MC_10.png", "MC/MC_11.png", "MC/MC_12.png", 
  "MC/MC_13.png", "MC/MC_14.png", "MC/MC_15.png", "MC/MC_16.png");

  runningLeft = loadAnimation("MC2/MC2_00.png", "MC2/MC2_01.png", "MC2/MC2_02.png", 
  "MC2/MC2_03.png", "MC2/MC2_04.png", "MC2/MC2_05.png", "MC2/MC2_06.png", "MC2/MC2_07.png", 
  "MC2/MC2_08.png", "MC2/MC2_09.png", "MC2/MC2_10.png", "MC2/MC2_11.png", "MC2/MC2_12.png", 
  "MC2/MC2_13.png", "MC2/MC2_14.png", "MC2/MC2_15.png", "MC2/MC2_16.png")

  zombieRunLeft = loadAnimation("ZombieWalking/zombie_00.png", "ZombieWalking/zombie_01.png", "ZombieWalking/zombie_02.png", 
  "ZombieWalking/zombie_03.png", "ZombieWalking/zombie_04.png", "ZombieWalking/zombie_05.png", "ZombieWalking/zombie_06.png",
   "ZombieWalking/zombie_07.png", "ZombieWalking/zombie_08.png", "ZombieWalking/zombie_09.png", "ZombieWalking/zombie_10.png"
   , "ZombieWalking/zombie_11.png", "ZombieWalking/zombie_12.png", "ZombieWalking/zombie_13.png", 
   "ZombieWalking/zombie_14.png", "ZombieWalking/zombie_15.png", "ZombieWalking/zombie_16.png", "ZombieWalking/zombie_17.png"
   , "ZombieWalking/zombie_18.png", "ZombieWalking/zombie_19.png", "ZombieWalking/zombie_20.png", 
   "ZombieWalking/zombie_21.png", "ZombieWalking/zombie_22.png", "ZombieWalking/zombie_23.png", )

  backgroundImg = loadImage("background.jpeg");
}

function setup(){
  
createCanvas(windowWidth, windowHeight);
MCharacter = createSprite(width/2, 600, 15, 30);
MCharacter.addAnimation("runningR", runningRight);
MCharacter.addAnimation("runningL", runningLeft);
MCharacter.addAnimation("standingL",standingLeft)
MCharacter.addAnimation("standingR",standingRight)
MCharacter.scale = 0.75

// backDrop = createSprite(width/2, height/2);
// backDrop.addImage(backgroundImg);
}

function draw() {
  background(backgroundImg);
  frameRate(100)
  drawSprites();

  playerControl()

  spawnZombieLeft()

  console.log(MCharacter.y);

  if(MCharacter.y<465){
        MCharacter.y = 465;
  }

  if(MCharacter.x>width-50){
        MCharacter.x = width-50;
  }

  if(MCharacter.x<50){
        MCharacter.x = 50;
  }

}

function playerControl(){
        if (keyIsDown(RIGHT_ARROW)){
        MCharacter.x += 3;
        }

        if (keyIsDown(LEFT_ARROW)){
        MCharacter.x -= 3;
        }
        if (keyIsDown(UP_ARROW)){
        MCharacter.y -= 3;
        }

        if (keyIsDown(DOWN_ARROW)){
        MCharacter.y += 3;
        }
  }

  function keyPressed(){
        if(keyCode===37){
                MCharacter.changeAnimation("runningL",runningLeft);
        }
        if(keyCode===39){
                MCharacter.changeAnimation("runningR",runningRight);
        }
  }
    


  
  function keyReleased(){
        if(keyCode===37){
                MCharacter.changeAnimation('standingL');
        }
        if(keyCode===39){
                MCharacter.changeAnimation('standingR');
        }
  }

  function spawnZombieLeft(){
          if (frameCount%200 == 0){
                zombieLeft = createSprite(width+100, Math.round(random(465, height-100)));   
                zombieLeft.addAnimation("zombieRL", zombieRunLeft);
                zombieLeft.velocityX = -2
                zombieLeft.scale = 0.75;
          }
  }
    
