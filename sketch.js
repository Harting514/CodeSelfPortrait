/*************************************************************************
    Project name: CodeSelf Portrait
          by Yik Ting Hung

    Overview 
    	This is Code Self-Portrait project. I interpret Self-Portrait using P5.js drawing functions. 
    	In this project, I learned from Pointillism, using points to compose facial contours, and then using lines to compose facial features and other parts.
 		Also, I added color change code, The color change will make the picture look different (dynamic).
    ---------------------------------------------------------------------
    Notes: 
     (1) The JPEG of the hand drawn portrait included in Github file.
**************************************************************************/

//Set Color variable
var r;
var g;
var b;
var a;

// Setup code goes here
function setup() {
  createCanvas(900, 800);
  background('white');
  x = 0;
  speed = 3;
}


// Draw code goes here
function draw() {
  
  //Ball speed
  x = x + speed;
  if (x > width){
  	speed *= -1;
  }

  if (x == 0){
    speed *= -1 ;
  }

  ellipse(x, 100, 40, 40);
  ellipse(x, 600, 40, 40);



  //Color change
  r = random(255); 
  g = random(100,200); 
  b = random(100);
  a = random(200,255); 
  //Color change speed
  if (frameCount % 60 == 0) {
  	stroke(r, g, b, a);
  }

  //Contour 
  strokeWeight(12);
  point(401, 358);
  point(399, 383);
  point(408, 397);
  point(417, 387);
  point(407, 405);
  point(418, 406);
  point(427, 427);
  point(451, 438);
  point(445, 454);
  point(394, 350);
  point(394, 340);
  point(395, 332);
  point(396, 323);
  point(399, 314);
  point(402, 307);
  point(405, 301);
  point(410, 294);
  point(407, 290);
  point(399, 284);
  point(404, 281);
  point(413, 283);
  point(420, 287);
  point(427, 293);
  point(432, 293);
  point(436, 293);
  point(448, 292);
  point(461, 294);
  point(470, 293);
  point(478, 292);
  point(487, 289);
  point(494, 287);
  point(504, 282);
  point(503, 288);
  point(497, 296);
  point(505, 302);
  point(514, 313);
  point(517, 329);
  point(513, 341);
  point(516, 350);
  point(515, 362);
  point(508, 372);
  point(515, 376);
  point(504, 375);
  point(511, 392);
  point(505, 393);
  point(507, 400);
  point(505, 412);
  point(498, 420);
  point(489, 425);
  point(483, 428);
  point(478, 431);
  point(480, 440);
  point(488, 445);
  point(494, 448);
  point(452, 447);
  point(438, 433);
  point(421, 416);
  point(397, 369);
  point(409, 377);
  point(409, 386);
  point(518, 380);
  point(518, 387);
  point(444, 283);
  point(448, 279);
  point(455, 279);
  point(464, 285);
  point(509, 308);
  point(516, 322);
  point(393, 375); 

  //Hat
  strokeWeight(8);
  point(436, 310);
  point(464, 309);
  noFill();
  strokeWeight(3);
  strokeJoin(MITER);
  beginShape();
  vertex(443, 325);
  vertex(448, 315);
  vertex(458, 324);
  endShape();
  noFill();
  strokeWeight(3);
  strokeJoin(MITER);
  beginShape();
  vertex(418, 314);
  vertex(429, 321);
  vertex(420, 327);
  endShape();
  noFill();
  strokeWeight(3);
  strokeJoin(MITER);
  beginShape();
  vertex(483, 310);
  vertex(472, 314);
  vertex(482, 319);
  endShape();
  noFill();
  strokeWeight(3);
  strokeJoin(MITER);
  beginShape();
  vertex(408, 346);
  vertex(425, 339);
  vertex(447, 334);
  vertex(461, 331);
  vertex(493, 331);
  endShape();


  //Eye
  strokeWeight(10);
  point(438, 390);
  point(475, 389);

  //Hair
  strokeWeight(5);
  line(431, 339, 419, 376);
  line(433, 340, 453, 375);
  line(462, 355, 478, 369);
  line(497, 348, 490, 366);

  //Cheek
  strokeWeight(2);
  line(429, 410, 431, 416);
  line(435, 408, 438, 415);
  line(484, 397, 485, 405);
  line(493, 395, 492, 404);


  //Mouth
  noFill();
  strokeWeight(3);
  strokeJoin(MITER);
  beginShape();
  vertex(451, 407);
  vertex(457, 412);
  vertex(469, 405);
  endShape();
}
