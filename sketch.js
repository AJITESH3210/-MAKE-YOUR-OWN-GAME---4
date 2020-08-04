//BOOST YOUR CONCENTRATION APP
//Made by J AJITESH

//Declaring the variables
var ball1, ball2, ball3, ball4, ball5;
var ball6, ball7, ball8, ball9, ball10;
var home, appInfo, game, symptoms;
var gameEnter = false;
var clicked = false;
var win_Img;
var lose_Img;
var result;
var zero = 0;

function preload(){
  
  win_Img = loadImage("win.png");
  lose_Img = loadImage("lose.png");

}


//Setup function
function setup() {

  //Creating the canvas and giving its size
  createCanvas(displayWidth-30, displayHeight-30);
  


  home = new Home();
  home.display();

}

//Draw function
function draw() {

  //Background color
  background(30, 255, 228);  

  
//  result.Visibility = false;

  if(gameEnter){
    game.display();
  }

  if(clicked === true){
  //  text("You Win", displayWidth/2-500, displayHeight/2 - 200);
    result = createSprite(displayWidth/2 - 100, displayHeight/2, 30, 30);
    result.addImage(win_Img);
    
    textSize(30);
    fill("black");
    stroke(20);
    
    text("Your Concentration is high", displayWidth/2 + 250, displayHeight/2 + 100);
  }
  else{
    text("Your Concentration is low", displayWidth/2 + 250, displayHeight/2 + 100);
    
  }

  
}

function mouseClicked(){
  game.gameStop();
  
}

