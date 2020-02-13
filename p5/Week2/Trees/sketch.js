function setup() {
  // put setup code here
  createCanvas(720, 400);
}

function draw() {
  // put drawing code here
  background("blue");
  noStroke();

  fill("yellow");
  ellipse(640, 50, 100, 100);

  fill("brown");
  rect(120, 150, 63, 250);

  fill("brown");
  rect(300, 150, 63, 250);

  fill("brown");
  rect(400, 150, 63, 250);

  fill("green");
  ellipse(150, 160, 200, 200);

  fill("green");
  ellipse(336, 164, 200, 200);

  fill("green");
  ellipse(455, 177, 200, 200);

  /*fill(204);
  triangle(18, 18, 18, 360, 81, 360);

  fill(102);
  rect(81, 81, 63, 63);

  fill(204);
  quad(189, 18, 216, 18, 216, 360, 144, 360);

  fill(255);
  ellipse(252, 144, 72, 72);

  fill(204);
  triangle(288, 18, 351, 360, 288, 360);

  fill(255);
  arc(479, 300, 280, 280, PI, TWO_PI);*/
  fill(0) ;
  textSize(30) ;
  text(mouseX + ", " + mouseY, 50, 50) ;

}
