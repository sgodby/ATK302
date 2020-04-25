var weather;
var temp = 0;
var weatherID = 0; // returned in the JSON weather element
var myState = 0;
var x = 0 ;
var ws = 0 + 1;
var temp = 0 +1;


function setup() {
  createCanvas(400, 400);

  // HERE Is the call to get the weather. PLEASE PUT YOUR OWN ID IN HERE!!!
  // MINE WILL STOP WORKING IF EVERYONE USES IT!!!

  var myJSONString = 'https://api.openweathermap.org/data/2.5/weather?zip=99501,us&units=imperial&';
  var myIDString = 'appid=a183110c152f3ed5c6b27ba0ee454934'; // Take out the x’s and ADD YOUR ID!!!
  loadJSON(myJSONString + myIDString, gotData); // look - that gotData function happens when JSON comes back.

}


function gotData(data) {
  weather = data;
  console.log(data); // for debugging purposes, print out the JSON data when we get it.
  ws = weather.wind.speed ;
  temp =weather.main.temp ;
}


function draw() {
  switch (myState) {
    case 0:
      if (weather) {
          myState = 1;
      }
      break;

    case 1:
    background(200) ;
    textSize(15);
    fill('black');
    text("Here's the Weather, Man", 20, 20) ;
// parse the weather object and put some text or images using at least 3 different weather data!
    text('the humidity is ' + weather.main.humidity, 200, 40);
    text('the wind speed is ' + weather.wind.speed, x, 200);

    fill('white');
    ellipse(x, 100, 100, 100);
    ellipse(x-50, 120, 50, 20);
    ellipse(x+50, 120, 65, 20);
    x = x + ws/6;
    if (x > width) x = 0;

      fill('red');
      var tmp = 0 ;
      tmp = map(temp, -10, 90, 2, height-10);
      triangle(225, 300, 285, 350, 225, 400);
      rect(width-40, height-10, 30, -tmp );
      rect(100, 340, 150, 20);

      fill('black');
      textSize(12);
      text('Hey, Its this hot out ' + weather.main.temp, 100, 355);

      //fill(0) ;
      //textSize(30) ;
      //text(mouseX + ", " + mouseY, 50, 50) ;

      break;



  }



}
