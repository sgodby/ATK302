 var myTimer = 0; // declare in the global area
 var myState = 0;


 function setup() {
   // put setup code here
   createCanvas(800, 800);
 }

 function draw() {
   // put drawing code here
   background('blue');


   switch (myState) {
     case 0:
       text("what do you call a pile of kittens?", 100, 100);
       myTimer++ ;
       if (myTimer > 300) {
         myState = 1; // this will go to the next state.
         myTimer = 0; // reset the timer!!
       }
       break;

     case 1:
       text("a meowtain", 100, 100);
       myTimer++ ;
       if (myTimer > 300) {
         myState=0; // this will go to the next state.
         myTimer = 0; // reset the timer!!
       }
       break;


   }


 }
