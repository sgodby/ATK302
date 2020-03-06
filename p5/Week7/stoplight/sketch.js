var myState = 0;
var timer = 0;


function setup() {
  // put setup code here
  createCanvas(800, 800);
  rectMode(CENTER);
  ellipseMode(CENTER);
}

function draw() {
  // put drawing code here
  // yellow rectangle
  fill('orange');
  rect(width / 2, height / 2, 150, 400);


  switch (myState) {
    case 0: // red light
      fill('grey');
      ellipse(width / 2, height / 2, 100, 100);
      fill('red');
      ellipse(width / 2, height / 2 - 110, 100, 100);
      fill('grey');
      ellipse(width / 2, height / 2 + 110, 100, 100);
      timer++;
      if (timer > 200) {
        timer = 0;
        myState = 1;
      }
      break;


    case 1: // yellow light
      fill('yellow');
      ellipse(width / 2, height / 2, 100, 100);
      fill('grey');
      ellipse(width / 2, height / 2 - 110, 100, 100);
      fill('grey');
      ellipse(width / 2, height / 2 + 110, 100, 100);
      timer++;
      if (timer > 200) {
        timer = 0;
        myState = 2;
      }
      break;

    case 2: // green light
      fill('grey');
      ellipse(width / 2, height / 2, 100, 100);
      fill('grey');
      ellipse(width / 2, height / 2 - 110, 100, 100);
      fill('green');
      ellipse(width / 2, height / 2 + 110, 100, 100);
      timer++;
      if (timer > 200) {
        timer = 0;
        myState = 0;
      }
      break;
  }


}
