var namesArray = [];

function setup() {

  // Tabletop stuff, for getting google spreadsheet data in.
  let url = '1VlHuymtmwyl-nODn4vIlIgZRK1L5wXGfijemKB5e22Q'; // this is KEY of the URL from the sheet
  let settings = {
    key: url, // The url of the published google sheet
    callback: gotData, // A callback for when the data comes in
    simpleSheet: true // This makes things simpler for just a single worksheet of rows
  };

  Tabletop.init(settings); // Grab the data from the spreadsheet!
  // End Tabletop initialization stuff


  // Regular setup code we usually have
  createCanvas(600, 600);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);

}

// The data comes back as an array of objects
// Each object contains all the data for one row of the sheet
function gotData(data) {

  console.log(data); // Print the data in the console

  // iterate through the array of data and create an object and push it on an array called namesArray
  for (let i = 0; i < data.length; i++) {
    namesArray.push(new Circle(data[i].tired));
  }

}


function draw() {
  background('blue');
  fill('black');
  textSize(60);
  text('How Tired Are You?', width/2, height/2);

  // // iterate through the namesArray and display the objects!
  for (let i = 0; i < namesArray.length; i++) {
    namesArray[i].display();
    namesArray[i].drive();
  }


}


// my circle class
function Circle(myTired) {
  this.pos = createVector(random(width), random(height));
  this.tired = myTired;
  this.vel = random(3);
  this.mySize = random(50);



  this.display = function() {

 // put an ellipse here
 fill('purple');
 rect(this.pos.x, this.pos.y, this.mySize, this.mySize);
 textSize(this.mySize);
 fill('white');
 text(this.tired, this.pos.x, this.pos.y);


  }

  this.drive = function(){
    this.pos.x = this.pos.x + this.vel;
    if (this.pos.x > width) this.pos.x = 20;
  }

}
