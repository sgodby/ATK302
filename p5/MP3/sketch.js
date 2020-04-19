var cars = [];
var frogPos;
var myState = 0;
var maxCars = 5;
var maxTimer = 10 * 60;
var timer = maxTimer;
var cat;
var sadcat;
var happycat;
var song;

function preload () {
song = loadSound("assets/song.mp3");
}

function setup() {
  // put setup code here
  createCanvas(800, 800);
  rectMode(CENTER);
  ellipseMode(CENTER);
  imageMode(CENTER);
  textAlign(CENTER);
  cat = loadImage("assets/cat.png");
  sadcat = loadImage("assets/sadcat.png");
  happycat = loadImage("assets/happycat.png");


  //spawn cars
  for (var i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }

  frogPos = createVector(400, height - 100);

  textAlign(CENTER);

}

function draw() {

  switch (myState) {

    case 0: // menu
      background('lightblue');
      image(cat, 650, 400, 250, 250);
      fill('white');
      textSize(50);
      text("Help the Cat Catch the Hair Ties!", width / 2, height / 2);
      text("Click to Proceed", width / 2, height / 2+100);

      break;

    case 1: // gamestate
      game();


      timer = timer - 1;
      if (timer <= 0) {
        timer = maxTimer;
        myState = 3;
      }
      break;

    case 2: // winstate
      background('green');
      image(happycat, 650, 500, 550, 600);
      text('You are the Cats Pajamas', width / 2, height / 2)
      break;

    case 3: // lose
      background('red');
      image(sadcat, 650, 650, 400, 400);
      fill('black');
      text('Tough Titty Said the Kitty', width / 2, height / 2);
      break;
  }
}

function mouseReleased() {
  switch (myState) {
    case 0:
      myState = 1;
      break;

    case 2: //won
      //reset maxTimer
      timer = maxTimer;

      //respawn cars
      cars = [];
      for (var i = 0; i < maxCars; i++) {
        cars.push(new Car());
      }

      myState = 0;
      break;

    case 3: //lost
      //reset maxTimer
      timer = maxTimer;

      //respawn cars
      cars = [];
      for (var i = 0; i < maxCars; i++) {
        cars.push(new Car());
      }
      myState = 0;
      break;

  }
  if (song.isPlaying ()) {
} else {
  song.play () ;
}
}




function game() {
  background('lightblue');

  for (var i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].drive();
    if (cars[i].pos.dist(frogPos) < 50) {
      cars.splice(i, 1);
    }
  }


  if (cars.length == 0) {
    myState = 2;

  } // frog
  fill('blue');
  ellipse(frogPos.x-15, frogPos.y-15, 30, 30);
  ellipse(frogPos.x+15, frogPos.y-15, 30, 30);
  fill('pink');
  ellipse(frogPos.x-10, frogPos.y-15, 25, 25);
  ellipse(frogPos.x+10, frogPos.y-15, 25, 25);
  fill('blue');
  ellipse(frogPos.x, frogPos.y, 50, 50);
  fill('black')
  ellipse(frogPos.x-10, frogPos.y-10, 5, 10);
  ellipse(frogPos.x+10, frogPos.y-10, 5, 10);
  fill('pink');
  ellipse(frogPos.x, frogPos.y, 10, 10);


  //image('cat', frogPos.x, frogPos.y, 50, 50);
  checkForKeys();
}


function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x -= 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x += 5;
  if (keyIsDown(UP_ARROW)) frogPos.y -= 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y += 5;
}


function Car() {
  //attributes
  this.pos = createVector(random(width), random(height));
  this.vel = createVector(random(-5, 5), random(-5, 5));
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);

  //methods
  this.display = function() {
    fill(this.r, this.g, this.b);
    ellipse(this.pos.x, this.pos.y, 30, 30);
    fill('lightblue');
    ellipse(this.pos.x, this.pos.y, 20, 20);


  }

  this.drive = function() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }

  function touchStarted() {
    getAudioContext().resume();
  }

}
