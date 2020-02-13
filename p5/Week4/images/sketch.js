var dk1;
var dk2;
var dk3;
var bestinclass;
var song;

function preload () {
song = loadSound("assets/song.mp3");

}

function setup() {
  // put setup code here
  createCanvas(800, 800);
  dk1 = loadImage("assets/dk.jpg");
  dk2 = loadImage("assets/dk2.jpg");
  dk3 = loadImage("assets/dk3.jpg");
  bestinclass = loadFont("assets/bestinclass.otf");
  song.play();
}

function draw() {
  // put drawing code here
  background(100) ;
  image(dk1, 10, 10) ;
  image(dk2, 400, 100) ;
  image(dk3, 400, 400) ;
  textFont(bestinclass, 48) ;
  text("he's the leader of the bunch", 300, 350) ;

}

function mouseReleased () {
  if (song.isPlaying ()) {
} else {
  song.play () ;
}

}

function touchStarted() {
  getAudioContext().resume();
}
