var mic;
var vol;
var y = 0 ;

function setup() {
  createCanvas(800, 800);

  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background('green');

  push () ;
  translate(y, 0);
  // your avatar code here
  fill ("blue");
  ellipse(560, 215, 80, 80);/*rightshoulder*/
  ellipse(400, 215, 80, 80);/*leftshoulder*/
  ellipse(475, 210, 175, 80);/*chest*/
  ellipse(475, 280, 100, 100);/*torso*/
  ellipse(475, 360, 125, 80);/*waist*/
  fill ("white");
  ellipse(475, 140, 80, 80);/*head*/
  ellipse(360, 270, 80, 80);/*leftelbow*/
  ellipse(600, 270, 80, 80);/*rightelbow*/
  ellipse(360, 335, 80, 80);/*leftforearm*/
  ellipse(600, 335, 80, 80);/*rightelbow*/
  ellipse(425, 435, 80, 125);/*leftthigh*/
  ellipse(525, 435, 80, 125);/*rightthigh*/
  ellipse(425, 575, 70, 125);/*leftshin*/
  ellipse(525, 575, 70, 125);/*rightshin*/
  ellipse(425, 515, 55, 55);/*leftknee*/
  ellipse(525, 515, 55, 55);/*rightknee*/
  ellipse(390, 650, 120, 60);/*leftfoot*/
  ellipse(560, 650, 120, 60);/*rightfoot*/
  fill ("black");
  ellipse(490, 130, 15, 15); /*righteye*/
  ellipse(460, 130, 15, 15); /*lefteye*/
  pop () ;

  vol = mic.getLevel(); // level is between 0 and 1
  vol = vol * 100; // you may need to change this

  if (vol > 3) {
    // do something
    y++ ;

  }


  textSize(18);
  text("Click the screen first.  My volume is " + vol, 80, 400);


}


// you need to click the screen before the mic input will work.
function touchStarted() {
  getAudioContext().resume();
}
