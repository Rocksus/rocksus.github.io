var screenWidth = 800;
var screenHeight = 400;
var playersPerTeam = 2;
var goalLeft;
var goalRight;
var field;
var teamBlue;
var teamRed;
var ball;
var d=5;

function setup() {
  createCanvas(screenWidth,screenHeight);
  background(51);
  field = new Field();
  goalLeft = new Goal(0, 1);
  goalRight = new Goal(screenWidth, -1);
  teamBlue = new Team(color(0,0,255), -1);
  teamRed = new Team(color(255,0,0), 1);
  ball = new Ball();
}

function draw() {
  background(51);
  goalLeft.show();
  goalRight.show();
  field.show();
  teamBlue.move();
  teamRed.move();
  ball.update();
  teamBlue.show();
  teamRed.show();
  ball.show();
}
