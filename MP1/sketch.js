function setup() {
  // put setup code here
  createCanvas(1000, 800) ;
}

function draw() {
  // put drawing code here
  background("purple") ;
  // stuff that we always want to be

  if (mouseIsPressed) {
  // stuff that shows when mouse is pressed
   fill ("pink");
   ellipse(840, 170, 60,60);
   ellipse(125, 125, 50, 50);
   ellipse(400, 400, 50, 50);
   ellipse(300, 300, 90, 90);
   fill ("white");
   ellipse(475, 140, 80, 80);/*head*/
   fill ("black");
   ellipse(490, 130, 15, 15); /*righteye*/
   ellipse(460, 130, 15, 15); /*lefteye*/
   fill ("brown");
   rect(0, 680, 1000, 125); /*ground*/
 } else {
   // when the mouse isn't pressed
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
   fill ("brown");
   rect(0, 680, 1000, 125); /*ground*/
   fill ("black");
   ellipse(490, 130, 15, 15); /*righteye*/
   ellipse(460, 130, 15, 15); /*lefteye*/
 }



    fill(0) ;
    textSize(30) ;
    text(mouseX + ", " + mouseY, 40, 40) ;
}
function mouseReleased() {
  console.log(mouseX + ", " + mouseY) ;
}
