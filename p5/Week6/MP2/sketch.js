var myState = 0;
var timer = 0;
var font;
var mic;
var vol;
var y = 0;
var x = 0;

function setup() {
  // put setup code here
  createCanvas(800, 800);
  font = loadFont("assets/font.ttf");

  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  // put drawing code here

  switch (myState) {
    case 0:
      background('#A6DAEF');
      textFont(font, 20);
      text("Hello. It is I, Bubbleman! Today I'm here to tell you my origin story", 100, 90);

      fill("blue");
      ellipse(560, 215, 80, 80); /*rightshoulder*/
      ellipse(400, 215, 80, 80); /*leftshoulder*/
      ellipse(475, 210, 175, 80); /*chest*/
      ellipse(475, 280, 100, 100); /*torso*/
      ellipse(475, 360, 125, 80); /*waist*/
      fill("white");
      ellipse(475, 140, 80, 80); /*head*/
      ellipse(360, 270, 80, 80); /*leftelbow*/
      ellipse(600, 270, 80, 80); /*rightelbow*/
      ellipse(360, 335, 80, 80); /*leftforearm*/
      ellipse(600, 335, 80, 80); /*rightelbow*/
      ellipse(425, 435, 80, 125); /*leftthigh*/
      ellipse(525, 435, 80, 125); /*rightthigh*/
      ellipse(425, 575, 70, 125); /*leftshin*/
      ellipse(525, 575, 70, 125); /*rightshin*/
      ellipse(425, 515, 55, 55); /*leftknee*/
      ellipse(525, 515, 55, 55); /*rightknee*/
      ellipse(390, 650, 120, 60); /*leftfoot*/
      ellipse(560, 650, 120, 60); /*rightfoot*/
      fill("brown");
      rect(0, 680, 1000, 125); /*ground*/
      fill("black");
      ellipse(490, 130, 15, 15); /*righteye*/
      ellipse(460, 130, 15, 15); /*lefteye*/

      break;

    case 1:
      background('#A6DAEF');
      textSize(15);
      text("It all started one day when I blew some strange looking bubbles", 100, 100);

      fill("pink");
      fill('pink');
      rect(580, 285, 40, 275); /*stem*/
      rect(100, 200, 225, 400); /*bubblecase*/
      fill("white");
      rect(100, 200, 225, 50); /*bubblelid*/
      fill("pink");
      ellipse(600, 200, 175, 175); /*innerwand*/
      fill("#A6DAEF");
      ellipse(600, 200, 150, 150); /*outerwand*/
      textSize(35);
      fill("white");
      text("RADIOACTIVE", 104, 360);
      text("BUBBLES", 135, 420);
      push();
      translate(y, 0);
      fill("white");
      ellipse(600, 200, 150, 150); /*bubble*/

      text("Try Blowing into the Mic!", 140, 650);

      vol = mic.getLevel(); // level is between 0 and 1
      vol = vol * 100; // you may need to change this

      if (vol > 3) {
        // do something
        y++;

      }

      break;

    case 2:
      background('#A6DAEF');
      fill("white");
      ellipse(80, 150, 200, 200);
      ellipse(600, 500, 250, 250);
      ellipse(x, 150, 100, 100);
      ellipse(x, 300, 90, 90);
      ellipse(x, 600, 75, 75);
      ellipse(x, 500, 100, 100);

      textSize(40);
      fill("black");
      text("Then I started to change", x, 100);
      x = x + 5;
      if (x > width) {
        x = 0;
      }



      timer++;
      if (timer > 250) {
        myState = 3;
        timer = 0;
      }

      break;

    case 3:
      background('#A6DAEF');
      text("Until I was more BUBBLE than MAN", 100, 100);
      fill("white");
      ellipse(500, x, 100, 100);
      ellipse(x, 400, 200, 100);
      ellipse(300, x, 100, 100);
      ellipse(x, 700, 100, 200);
      ellipse(600, x, 100, 100);
      ellipse(x, 200, 300, 300);
      ellipse(256, x, 100, 100);
      ellipse(x, 200, 100, 100);
      ellipse(535, x, 100, 100);
      ellipse(x, 450, 200, 200);

      x = x + 5;
      if (x > height) {
        x = 0;
      }

      timer++;
      if (timer > 250) {
        myState = 4;
        timer = 0;
      }

      break;

    case 4:
      background('#A6DAEF');
      fill("white");
      ellipse(840, 170, 60, 60);
      ellipse(125, 125, 50, 50);
      ellipse(400, 400, 50, 50);
      ellipse(300, 300, 90, 90);
      fill("white");
      ellipse(475, 140, 80, 80); /*head*/
      fill("black");
      text("And thats more or less the story", 100, 100);
      ellipse(490, 130, 15, 15); /*righteye*/
      ellipse(460, 130, 15, 15); /*lefteye*/
      fill("brown");
      rect(0, 680, 1000, 125); /*ground*/


      timer++;
      if (timer > 250) {
        myState = 0;
        timer = 0;
      }

      break;

  }
  fill('black');
  text(mouseX + ", " + mouseY, 40, 40);

}

function touchStarted() {
  getAudioContext().resume();
}

function mouseReleased() {
  console.log(mouseX + ", " + mouseY);

  myState = myState + 1;
  if (myState > 4) {
    myState = 0;
  }


}
