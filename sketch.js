var ball1, ball2, ball3, ball4, ball5;
var ball6, ball7, ball8, ball9, ball10;

var home, appInfo, game, symptoms, tips;

var gameEnter = false;
var clicked = false;

var win_Img, lose_Img;
var clickButton = 0;
var winText;
var homeButton;

function preload(){
  win_Img = loadImage("win.png");
  lose_Img = loadImage("download (1).png");
}

function setup() {
  createCanvas(displayWidth-30, displayHeight-30);
  
  winText = createElement("h1");
  loseText = createElement("h1")
  
  home = new Home(); 
  home.display();
}

function draw() {
  background(30, 255, 228);  

  if(gameEnter && clickButton === 0){
    game.display();
  }

  if(clicked === true){
    result = createSprite(displayWidth/2 - 100, displayHeight/2, 30, 30);
    result.addImage(win_Img);
      
    winText.position(displayWidth/2 + 250, displayHeight/2 + 100);
    winText.html("Your Concentration is high");    
  }

  if(clicked === false & frameCount >= 700){
    loseResult = createSprite(displayWidth/2 - 100, displayHeight/2, 30, 30);
    loseResult.addImage(lose_Img);
      
    loseText.position(displayWidth/2 + 250, displayHeight/2 + 100);
    loseText.html("Your Concentration is low");    
  }

}

function mouseClicked(){
  game.gameStop();
  if(game){
     game.gameStop() 
  }
}

