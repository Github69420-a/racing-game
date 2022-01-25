var obstacle2Image;
var obstacle1Image;
var canvas;
var backgroundImage, car1_img, car2_img, track;
var fuelImage, powerCoinImage;
var cones,tires;
var playerRank;

var database, gameState;
var form, player, playerCount;
var allPlayers, car1, car2, fuels, powerCoins, obstacles;
var cars = [];

function preload() {
  backgroundImage = loadImage("./assets/background.png");
  car1_img = loadImage("../assets/car1.png");
  obstacle1Image = loadImage("../assets/obstacle1.png")
  obstacle2Image = loadImage("../assets/obstacle2.png");
  car2_img = loadImage("../assets/car2.png");
  track = loadImage("../assets/track.jpg");
  fuelImage = loadImage("./assets/fuel.png");
  powerCoinImage = loadImage("./assets/goldCoin.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  playerRank = 0;
}

function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }
  if (gameState === 2) {
    game.win();
  }
  text(mouseX+", "+ mouseY, mouseX,mouseY);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
