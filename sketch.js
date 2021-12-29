
var gameState = "start";

var welcomePage, welcomePageImg;
var playButton, playButtonImg;
var controlButton, controlButtonImg, controlInformation, controlInformationImg;
var closeButton, closeButtonImg;
var storyButton, storyButtonImg, story, storyImg;
//----------------------------------------------------------------------------------------
var gameSound;
//----------------------------------------------------------------------------------------
var scoreImg;
var treasureScoreImg;
var treasureScore = 0;
var oneScore = 0;
var twoScore = 0;
var threeScore = 0
//----------------------------------------------------------------------------------------
var edges, wall1;
//----------------------------------------------------------------------------------------

//these are common for everything levels
var FinishFlagImg;
var FinishFlagTouchingSound;
var levellockImg;
var heartImg;
var jumpObImg;
//----------------------------------------------------------------------------------------
var forest, forestImg;
var InsLevelOneGround;
var InsLevelOneTrack1, InsLevelOneTrack2, InsLevelOneTrack3;
var levelOneTrackImg;
var levelOneGem1, levelOneGem2, levelOneGem3, levelOneGem4,
    levelOneGem5, levelOneGem6, levelOneGem7, levelOneGem8,
    levelOneGem9, levelOneGem10, levelOneGem11;
var levelOneGem1Img, levelOneGem2Img, levelOneGem3Img, levelOneGem4Img, levelOneGem5Img;
var FinishFlagInswall;
var brickWall, brickWallImg, backgroundwall, win, winImg;
//----------------------------------------------------------------------------------------


//---------------------------------------------------------------------------------------------------------
var player;
var player1;
var player2;
var playerStand;
var playerSideWays;
//-----------------------------------------------------------------------------------------------------------
var treasure,treasure1,treasure2;
var treasureImg;
var treausreCollectingSound;

function preload(){
    //welcomepage;
           welcomePageImg = loadImage("images/backgrounds/background4.jpg");

    //level-1 images;
           forestImg = loadImage("images/backgrounds/background3.jpg");
           levelOneTrackImg = loadImage("images/track/rockPath.png");

    //scoreimg;
           scoreImg = loadImage("images/gems/point.png");
           treasureScoreImg = loadImage("images/t/treasure-21.png");
    //FLAG;
           FinishFlagImg = loadImage("images/flags/finishflag.png");
    //lockImg;
           levellockImg = loadImage("images/track/lock.png"); 
    //lockkeyimg;      
           levellockKeyImg = loadImage("images/key.png");   
           
          

    // endPage images;
           endImg = loadImage("images/backgrounds/endpage.png"); 
           winImg = loadImage("images/winImg.png");

    //character
           playerStand = loadImage("images/c/PIRATE1.png");
           playerSideWays = loadAnimation("images/c/PIRATE4.png");

    //buttons;
          playButtonImg = loadImage("images/buttons/playred.png");
          controlButtonImg = loadImage("images/buttons/controlred.png");
          controlInformationImg = loadImage("images/backgrounds/control.png");
          brickWallImg = loadImage("images/backgrounds/brickWall.jpg");
          closeButtonImg = loadImage("images/buttons/close button.png");
          storyButtonImg = loadImage("images/buttons/storyred.png");
          storyImg = loadImage("images/backgrounds/map.jpg");


    //loading gems images;
          levelOneGem1Img = loadImage("images/gems/line1gem1.png");
          levelOneGem2Img = loadImage("images/gems/line1gem2.png");
          levelOneGem3Img = loadImage("images/gems/line1gem3.png");
          levelOneGem4Img = loadImage("images/gems/line1gem4.png");
          levelOneGem5Img = loadImage("images/gems/line1gem5.png");

        

    //treasure;
          treasureImg = loadImage("images/t/treasureImg.png");
         
    //soundloading-------------------------------------------------------------
   
      gameSound = loadSound("images/sounds/startS.mp3");
      loseSound = loadSound("images/sounds/lose.mp3");
      crystalCollectSound = loadSound("images/sounds/collect.mp3");
      treausreCollectingSound = loadSound("images/sounds/treasureCollectingSound.mp3");
      prisonOpenSound = loadSound("images/sounds/prisonopen.wav");
      FinishFlagTouchingSound = loadSound("images/sounds/finishsound.wav");
      blackHoleSound = loadSound("images/sounds/blackholesound.wav");
      burningSound = loadSound("images/sounds/burningSound.mp3");

}

function setup() {
  createCanvas(windowWidth,windowHeight);
  edges = createEdgeSprites();

  gameSound.loop();
  
  start();
  controlPageSprite();
  storyPageSprite();
  levelOneSprite();
 // levelTwoSprite();
 // levelThreeSprite();
  EndSprite();

}

function draw() {
  background(0);
  drawSprites();  

  if(gameState === "start"){
       stroke("red");
       strokeWeight("2");
       fill("orange");
       textSize(100);
       textFont("times new roman");
       text("The Hidden Treasure",windowWidth-1340,windowHeight-520);
       startlevel();
  }

  if(gameState === "level-1"){
       levelOne();   
  }

 
  if(gameState === "control"){
       controlPage();
  }

  if(gameState === "story"){
       storyPage();
  }
  
  if(gameState === "end"){
     End();
  }

 

}

function start(){
  welcomePage = createSprite(width/2,height/2+100,windowWidth,windowHeight);
  welcomePage.addImage("welcomepage",welcomePageImg);
  welcomePage.scale = 0.8;
  welcomePage.visible = false;

  playButton = createSprite(windowWidth-920,windowHeight-370);
  playButton.addImage("startbutton",playButtonImg);
  playButton.scale = 0.9;
  playButton.visible = false;

  controlButton = createSprite(windowWidth-920,windowHeight-260);
  controlButton.addImage("controlsArea",controlButtonImg);
  controlButton.scale = 0.9;
  controlButton.visible = false;

  storyButton = createSprite(windowWidth-920,windowHeight-150);
  storyButton.addImage("storyInformation",storyButtonImg);
  storyButton.scale = 0.9;
  storyButton.visible = false;

  //introSound.play();

}

function controlPageSprite(){

   

  controlInformation = createSprite(width/2+150,height/3,windowWidth,windowHeight);
  controlInformation.addImage(controlInformationImg);
  controlInformation.scale = 1;
  controlInformation.visible = false;

}
function storyPageSprite(){

  backgroundwall = createSprite(width/2,height/2+100,windowWidth,windowHeight);
  backgroundwall.addImage(brickWallImg);
  backgroundwall.scale = 2.13
  backgroundwall.visible = false;

  story = createSprite(width/2-359,height/2-20);
  story.addImage(storyImg);
  story.visible = false;

  closeButton = createSprite(windowWidth-100,windowHeight-870,50,50);
  closeButton.addImage("option",closeButtonImg);
  closeButton.scale = 0.5;
  closeButton.visible = false;

}
function levelOneSprite(){
  forest = createSprite(width/2,height/2,windowWidth,windowHeight);
  forest.addImage("level-1",forestImg);
  forest.scale = 1;
  forest.visible = false;

  player = createSprite(windowWidth-1300,windowHeight-600,50,50);
  player.addAnimation("running",playerStand);  
  player.scale = 0.4;
  player.visible = false;

  InsLevelOneGround = createSprite(windowWidth-775 ,windowHeight-18,1550,30);
  InsLevelOneGround.visible = false;

  InsLevelOneTrack1 = createSprite(windowWidth-1207,windowHeight-475,300,30);
  InsLevelOneTrack2 = createSprite(windowWidth-600,windowHeight-300,400,30);
  InsLevelOneTrack3 = createSprite(windowWidth-308,windowHeight-300,300,30);

  InsLevelOneTrack1.visible = false;
  InsLevelOneTrack2.visible = false;
  InsLevelOneTrack3.visible = false;

  levelOneGem1 = createSprite(windowWidth-1100,windowHeight-510,20,20);
  levelOneGem1.addImage(levelOneGem1Img);
  levelOneGem1.scale = 0.5;
  levelOneGem1.visible = false;

  levelOneGem2 = createSprite(windowWidth-1112,windowHeight-75,20,20);
  levelOneGem2.addImage(levelOneGem2Img);
  levelOneGem2.scale = 0.5;
  levelOneGem2.visible = false;

  levelOneGem3 = createSprite(windowWidth-1000,windowHeight-75,20,20);
  levelOneGem3.addImage(levelOneGem3Img);
  levelOneGem3.scale = 0.5;
  levelOneGem3.visible = false;

  levelOneGem4 = createSprite(windowWidth-900,windowHeight-75,20,20);
  levelOneGem4.addImage(levelOneGem4Img);
  levelOneGem4.scale = 0.5;
  levelOneGem4.visible = false;

  levelOneGem5 = createSprite(windowWidth-200,windowHeight-75,20,20);
  levelOneGem5.addImage(levelOneGem5Img);
  levelOneGem5.scale = 0.5;
  levelOneGem5.visible = false;

  levelOneGem6 = createSprite(windowWidth-700,windowHeight-75,20,20);
  levelOneGem6.addImage(levelOneGem1Img);
  levelOneGem6.scale = 0.5;
  levelOneGem6.visible = false;

  levelOneGem7 = createSprite(windowWidth-580,windowHeight-75,20,20);
  levelOneGem7.addImage(levelOneGem2Img);
  levelOneGem7.scale = 0.5;
  levelOneGem7.visible = false;

  levelOneGem8 = createSprite(windowWidth-680,windowHeight-350,20,20);
  levelOneGem8.addImage(levelOneGem3Img);
  levelOneGem8.scale = 0.5;
  levelOneGem8.visible = false;

  levelOneGem9 = createSprite(windowWidth-470,windowHeight-75,20,20);
  levelOneGem9.addImage(levelOneGem4Img);
  levelOneGem9.scale = 0.5;
  levelOneGem9.visible = false;

  levelOneGem10 = createSprite(windowWidth-1300,windowHeight-75,20,20);
  levelOneGem10.addImage(levelOneGem5Img);
  levelOneGem10.scale = 0.5;
  levelOneGem10.visible = false;

  levelOneGem11 = createSprite(windowWidth-370,windowHeight-350,20,20);
  levelOneGem11.addImage(levelOneGem3Img);
  levelOneGem11.scale = 0.5;
  levelOneGem11.visible = false;

  treasure = createSprite(windowWidth-490,windowHeight-341,50,50);
  treasure.addImage(treasureImg);
  treasure.scale = 0.19;
  treasure.visible = false;

  FinishFlagInswall = createSprite(windowWidth-80,windowHeight-75,50,100);
  FinishFlagInswall.visible = false;


  
}

function startlevel(){
 
   welcomePage.visible = true;
   playButton.visible = true;
   controlButton.visible = true;
   storyButton.visible = true;
 
   if(mousePressedOver(playButton)){
     gameState = "level-1";
 
   }
   if(mousePressedOver(controlButton)){
        gameState = "control";
   }
   if(mousePressedOver(storyButton)){
        gameState = "story";
   }
   
 }
 
 function controlPage(){
   
   welcomePage.visible = false;
   playButton.visible = false;
   controlButton.visible = false;
   storyButton.visible = false;
   
   closeButton.visible = true;
   controlInformation.visible = true;
   
   if(mousePressedOver(closeButton)){
      gameState = "start";
      controlInformation.visible = false;
      closeButton.visible = false;
   }

   textSize(30);
   fill("white");
   text("(1) There are 10 levels in the game, each level is difficult from the previous level.",windowWidth-1365,windowHeight-450);
   text("(2) In order to win the game you have to collect all the gems and a treasure box.",windowWidth-1365,windowHeight-400);
   text("(3) After you complete all the levels successfully you will a Jackpot quiz.",windowWidth-1310,windowHeight-350);
   text("(4) The quiz will have 3 questions, if you answer them correctly you will be able to achieve the final treasure.",windowWidth-1500,windowHeight-300);
   text("(5) If you make it till the Jackpot Quiz, congartulations! you have won the most difficult game in the world.",windowWidth-1500,windowHeight-250);
 }
 
 function storyPage(){
   welcomePage.visible = false;
   playButton.visible = false;
   controlButton.visible = false;
   storyButton.visible = false;
 
   closeButton.visible = true;
   backgroundwall.visible = true;
   story.visible = true;
   
 
   if(mousePressedOver(closeButton)){
      gameState = "start";
      closeButton.visible = false;
      backgroundwall.visible = false;
      story.visible = false;
   }
   
   textSize(30);
   fill("white");
   text("There is a pirate named Louis who is searching for a big hidden ",windowWidth-900,windowHeight-770);
   text("treasure for ages. One fine day he finds a map which leads to the ",windowWidth-900,windowHeight-720);
   text("hidden treasure, Louis gets really happy and gets everything ready ",windowWidth-900,windowHeight-670);
   text("on his pirate ship and begins his journey. After months of travelling ",windowWidth-900,windowHeight-620);
   text("he reaches the island and explores it, while exploring he comes to  ",windowWidth-900,windowHeight-570);
   text("know about the hidden treasure and the difficulties which he has  ",windowWidth-900,windowHeight-520);
   text("to face to achieve it. He finds the entrance of the cave which leads ",windowWidth-900,windowHeight-470);
   text("him to the treasure, Louis gets ready and enters the cave. After few  ",windowWidth-900,windowHeight-420);
   text("minutes he hears a voice saying 'Welcome to the treasure hunt, ",windowWidth-900,windowHeight-370);
   text("Pirate Louis, if who want the great treasure you have to overcome  ",windowWidth-900,windowHeight-320);
   text("many difficulties which would put your mind to the ultimate test'. ",windowWidth-900,windowHeight-270);
   text("Pirate Louis then shows his bravery and continues his journey into",windowWidth-900,windowHeight-220);
   text("cave to achieve the great hidden treasure.",windowWidth-900,windowHeight-170);
   
   textSize(50);
   stroke("white");
   strokeWeight(3)
   fill("red");
   text("STORY",windowWidth/2,windowHeight/2-380);
   
}
 
 function playerScore(){
 
    if(player.isTouching(levelOneGem1)){
       oneScore = oneScore + 1
       levelOneGem1.destroy();
       crystalCollectSound.play();
    }
    if(player.isTouching(levelOneGem2)){
       oneScore = oneScore + 1
       levelOneGem2.destroy();
       crystalCollectSound.play();
    }
    if(player.isTouching(levelOneGem3)){
       oneScore = oneScore + 1
       levelOneGem3.destroy();
       crystalCollectSound.play();
    }
    if(player.isTouching(levelOneGem4)){
       oneScore = oneScore + 1
       levelOneGem4.destroy();
       crystalCollectSound.play();
    }
    if(player.isTouching(levelOneGem5)){
       oneScore = oneScore + 5;
       levelOneGem5.destroy();
       crystalCollectSound.play();
    }
    if(player.isTouching(levelOneGem6)){
       oneScore = oneScore + 1
       levelOneGem6.destroy();
       crystalCollectSound.play();
    }
    if(player.isTouching(levelOneGem7)){
       oneScore = oneScore + 1
       levelOneGem7.destroy();
       crystalCollectSound.play();
    }
    if(player.isTouching(levelOneGem8)){
       oneScore = oneScore + 1
       levelOneGem8.destroy();
       crystalCollectSound.play();
    }
    if(player.isTouching(levelOneGem9)){
       oneScore = oneScore + 1
       levelOneGem9.destroy();
       crystalCollectSound.play();
    }
    if(player.isTouching(levelOneGem10)){
       oneScore = oneScore + 5;
       levelOneGem10.destroy();
       crystalCollectSound.play();
    }
    if(player.isTouching(levelOneGem11)){
       oneScore = oneScore + 1;
       levelOneGem11.destroy();
       crystalCollectSound.play();
    }
    
    if(oneScore === 19){
      if(player.isTouching(FinishFlagInswall)){
       // gameState = "level-2";
        FinishFlagTouchingSound.play();
     }
    }
    if(oneScore !== 19){
      if(player.isTouching(FinishFlagInswall)){
        textSize(50);
        textFont("cooper");
        fill("red");
        text("Note! Catch all crystals",windowWidth-750,windowHeight-480);
      }
    }
 
   }
 function levelOne(){
 
   player.collide(edges);
 
   image(scoreImg,windowWidth-270,windowHeight-635,70,70);
   image(treasureScoreImg,windowWidth-280,windowHeight-760,80,70);
 
   textSize(35)
   fill(255);
   text(" = " + oneScore,windowWidth-200,windowHeight-600);

   textSize(35)
   fill(255);
   text(" = " + treasureScore,windowWidth-200,windowHeight-700);
 
   welcomePage.destroy();
   playButton.destroy();
   controlButton.destroy();
   storyButton.destroy();
 
 
   forest.visible = true;
 
   InsLevelOneGround.visible = true;
   
   player.collide(InsLevelOneGround);
   
   player.collide(InsLevelOneTrack1);
   player.collide(InsLevelOneTrack2);
   player.collide(InsLevelOneTrack3);
 
   levelOneGem1.visible = true;
   levelOneGem2.visible = true;
   levelOneGem3.visible = true;
   levelOneGem4.visible = true;
   levelOneGem5.visible = true;
   levelOneGem6.visible = true;
   levelOneGem7.visible = true;
   levelOneGem8.visible = true;
   levelOneGem9.visible = true;
   levelOneGem10.visible = true;
   levelOneGem11.visible = true;
 
   treasure.visible = true;
 
   player.visible = true;
   
     
 
   
   //track one ;
   image(levelOneTrackImg,windowWidth-1380,windowHeight-540,levelOneTrackImg.width,levelOneTrackImg.height);
   //track two;
   image(levelOneTrackImg,windowWidth-800,windowHeight-366,levelOneTrackImg.width,levelOneTrackImg.height);
   //track three;
   image(levelOneTrackImg,windowWidth-479,windowHeight-366,levelOneTrackImg.width,levelOneTrackImg.height);
 
   //ground;
    image(levelOneTrackImg,windowWidth-1550,windowHeight-83,levelOneTrackImg.width,levelOneTrackImg.height);
    image(levelOneTrackImg,windowWidth-1230,windowHeight-83,levelOneTrackImg.width,levelOneTrackImg.height);
    image(levelOneTrackImg,windowWidth-910,windowHeight-83,levelOneTrackImg.width,levelOneTrackImg.height);
    image(levelOneTrackImg,windowWidth-590,windowHeight-83,levelOneTrackImg.width,levelOneTrackImg.height);
    image(levelOneTrackImg,windowWidth-300,windowHeight-83,levelOneTrackImg.width,levelOneTrackImg.height);
 
   //finishflag;
   image(FinishFlagImg,windowWidth-140,windowHeight-128,60,100);
 
   playerScore();
 
 
   if(keyDown("right") || keyDown("D")){
     player.x = player.x + 10;
     player.addAnimation("running",playerSideWays);
     player.mirrorX(+1);
     player.debug = false;
     player.setCollider("rectangle",0,0,200,300);
     player.scale = 0.4;
  }
  
 
   if(keyDown("left") || keyDown("A")){
      player.x = player.x - 10;
      player.addAnimation("running",playerSideWays);
      player.mirrorX(-1);
      player.scale = 0.4;
      
  }
   //console.log(player.y);
   if(keyDown("UP_ARROW") || keyDown("W")){
      if(player.y >=90 && player.y <=250 || (player.y >=365 && player.y <=500) || (player.y >=500 && player.y < 800)){
       player.velocityY = -13;
     }
     
   }
     player.velocityY = player.velocityY + 0.8;
     
   if(player.isTouching(treasure)){
       treasure.destroy();
       treasureScore = treasureScore + 1
       treausreCollectingSound.play();   
   }
   if(treasureScore === 19){
      if(player.isTouching(FinishFlagInswall)){
       // gameState = "level-2";
        FinishFlagTouchingSound.play();
     }
   }

   if(treasureScore !== 1){
      if(player.isTouching(FinishFlagInswall)){
        textSize(50);
        textFont("cooper");
        fill("red");
        text("Note! Collet the treasure box",windowWidth-750,windowHeight-400);
      }
    }

    win = createSprite(windowWidth/2,windowHeight/2-200);
    win.addImage(winImg);
    win.scale = 0.5;
    win.visible = false;

    wall1 = createSprite(windowWidth-50,windowHeight-100,10,150);
    wall1.visible = false;
    

    if(oneScore === 19 && treasureScore === 1 && player.isTouching(FinishFlagInswall)){
      win.visible = true;
   }

   if(player.isTouching(wall1) && oneScore === 19 && treasureScore === 1){
      player.stop();
   }


    
 }
 
 function player1Life(){
   if(player1.isTouching(levelTwoRounderOB)){
     levelTwoLife = levelTwoLife - 1;
     player1.x = windowWidth-100;
     player1.y = windowHeight-600;
     loseSound.play();
  }
  if(player1.isTouching(levelTwoOB1)){
     levelTwoLife = levelTwoLife - 1;
     player1.x = windowWidth-100;
     player1.y = windowHeight-600;
     loseSound.play();
  }
  if(player1.isTouching(levelTwoOB2)){
     levelTwoLife = levelTwoLife - 1;
     player1.x = windowWidth-100;
     player1.y = windowHeight-600;
     loseSound.play();
  }
  if(player1.isTouching(levelTwoOB3)){
    levelTwoLife = levelTwoLife - 1;
    player1.x = windowWidth-100;
    player1.y = windowHeight-600;
    loseSound.play();
  }
  if(player1.isTouching(levelTwoSnakeOB)){
     levelTwoLife = levelTwoLife - 1;
     player1.x = windowWidth-100;
     player1.y = windowHeight-600;
     loseSound.play();
  }
  if(levelTwoLife === 2){
     lev2Heart3.destroy();
  }
  if(levelTwoLife === 1){
     lev2Heart2.destroy();
  }
  if(levelTwoLife === 0){
     lev2Heart1.destroy();
     gameOver.visible = true;
     resetButton.visible = true;
     player1.destroy();
     levelTwoSnakeOB.velocityX = 0;
     levelTwoRounderOB.rotation = levelTwoRounderOB.rotation = 0;
 
     if(mousePressedOver(resetButton)){
         gameState = "level-2";
         levelTwoLife = 3;
         twoScore = 0;
         snakeScore = 0;
         gameOver.destroy();
         resetButton.destroy();
         levelTwoSprite();
     }
  }
 
 }
 function player1Score(){
    if(player1.isTouching(levelTwoGem1)){
       twoScore = twoScore + 1;
       levelTwoGem1.destroy();
       crystalCollectSound.play();
    }
    if(player1.isTouching(levelTwoGem2)){
       twoScore = twoScore + 1;
       levelTwoGem2.destroy();
       crystalCollectSound.play();
    }
    if(player1.isTouching(levelTwoGem3)){
       twoScore = twoScore + 1;
       levelTwoGem3.destroy();
       crystalCollectSound.play();
    }
    if(player1.isTouching(levelTwoGem4)){
       twoScore = twoScore + 1;
       levelTwoGem4.destroy();
       crystalCollectSound.play();
    }
    if(player1.isTouching(levelTwoGem5)){
       twoScore = twoScore + 1;
       levelTwoGem5.destroy();
       crystalCollectSound.play();
    }
    if(player1.isTouching(levelTwoGem6)){
       twoScore = twoScore + 1;
       levelTwoGem6.destroy();
       crystalCollectSound.play();
    }
    if(player1.isTouching(levelTwoGem7)){
       twoScore = twoScore + 1;
       levelTwoGem7.destroy();
       crystalCollectSound.play();
    }
    if(player1.isTouching(levelTwoGem8)){
       twoScore = twoScore + 1;
       levelTwoGem8.destroy();
       crystalCollectSound.play();
    }
    if(player1.isTouching(levelTwoGem9)){
       twoScore = twoScore + 1;
       levelTwoGem9.destroy();
       crystalCollectSound.play();
    }
    if(player1.isTouching(levelTwoGem10)){
       twoScore = twoScore + 1;
       levelTwoGem10.destroy();
       crystalCollectSound.play();
    }
    if(player1.isTouching(levelTwoGem11)){
       twoScore = twoScore + 1;
       levelTwoGem11.destroy();
       crystalCollectSound.play();
    }
    if(player1.isTouching(levelTwoGem12)){
       twoScore = twoScore + 1;
       levelTwoGem12.destroy();
       crystalCollectSound.play();
    }
    if(player1.isTouching(levelTwoGem13)){
       twoScore = twoScore + 1;
       levelTwoGem13.destroy();
       crystalCollectSound.play();
    }
    if(player1.isTouching(levelTwoGem14)){
       twoScore = twoScore + 1;
       levelTwoGem14.destroy();
       crystalCollectSound.play();
    }
    if(player1.isTouching(levelTwoGem15)){
       twoScore = twoScore + 1;
       levelTwoGem15.destroy();
       crystalCollectSound.play();
    }
    if(player1.isTouching(levelTwoGem16)){
       twoScore = twoScore + 1;
       levelTwoGem16.destroy();
       crystalCollectSound.play();
    }
    if(player1.isTouching(levelTwoGem17)){
       twoScore = twoScore + 1;
       levelTwoGem17.destroy();
       crystalCollectSound.play();
    }
 
    if(twoScore === 17){
       if(player1.isTouching(levelTwoFinishFlag)){
          gameState = "level-3";
          FinishFlagTouchingSound.play();
      }
    }
    if(twoScore !== 17){
      if(player1.isTouching(levelTwoFinishFlag)){
       textSize(100);
       textFont("cooper");
       fill("red");
       text("Note! Catch all crystals",windowWidth-1000,windowHeight-300);
      }
    }
 
 }
 function EndSprite(){
    endBg = createSprite(windowWidth/2-10,windowHeight/2,windowWidth,windowHeight);
    endBg.addImage(endImg);
    endBg.scale = 1.1;
    endBg.visible = false;
 }

