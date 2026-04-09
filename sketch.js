
function setup() {
  createCanvas (600, 400);
  frameRate(30);
}


function draw() {
  background (0, 0, 0);

//background hatch

    for ( i=0; i<400; i++) {
    beginShape();
    vertex(0,i*3);
    vertex(i*40,i*10);

    endShape();
   stroke(i*2,i*1,i*1.5);
   strokeWeight(1);
  }
  
   for ( i=0; i<40; i++) {
    beginShape();
    vertex(i*250,10);
    bezierVertex(0,i*70,20,i*100,40,i*150);
    endShape();
    
   fill(i*100,i*5,i*25);
   noStroke();
  }

  //left eye rim
  noFill();
  stroke(245, 245, 245);
  strokeWeight(4);
  beginShape();
  vertex(264, 130);
  bezierVertex(400, 171, 460, 185, 470, 180);
  endShape();

  //left under eyelid
  noFill();
  stroke(245, 245, 245);
  strokeWeight(2);
  beginShape();
  vertex(291, 158);
  bezierVertex (323, 183, 403, 194, 458, 200);
  endShape();

  //Shading underneath the eye
  strokeWeight(2);
  beginShape();
  vertex(291, 165);
  bezierVertex (323, 200, 399, 203, 458, 200);
  endShape();

  strokeWeight(2);
  beginShape();
  vertex(364, 202);
  bezierVertex (364, 203, 407, 214, 451, 205);
  endShape();

  //left eyeball
  noFill();
  stroke(245, 245, 245);
  strokeWeight(2);

  beginShape();//left curve
  vertex(362, 185);
  bezierVertex(352, 171, 350, 165, 363, 160);
  endShape();

  beginShape();//right curve
  vertex(439, 198);
  bezierVertex(447, 191, 449, 182, 440, 179);
  endShape();

  //Left eyeball
  noStroke();
  fill(105, 105, 105);
  circle(367, 172, 10);
  fill(105, 105, 105);
  circle(374, 180, 10);
  fill(105, 105, 105);
  circle(362, 178, 10);
  fill(105, 105, 105);
  circle(374, 171, 10);
  fill(105, 105, 105);
  circle(386, 177, 10);
  fill(105, 105, 105);
  circle(379, 171, 10);


  fill(169, 169, 169);
  circle(400, 180, 10);
  fill(169, 169, 169);
  circle(406, 185, 10);
  fill(169, 169, 169);
  circle(391, 181, 5);
  fill(169, 169, 169);
  circle(380, 183, 8);
  fill(169, 169, 169);
  circle(391, 184, 7);
  fill(169, 169, 169);
  circle(398, 175, 7);
  fill(169, 169, 169);
  circle(419, 181, 10);
  fill(169, 169, 169);
  circle(424, 192, 10);
  fill(169, 169, 169);
  circle(406, 178, 10);



  fill(220, 220, 220);
  circle(415, 184, 10);
  fill(220, 220, 220);
  circle(419, 189, 10);
  fill(220, 220, 220);
  circle(425, 183, 7);
  fill(220, 220, 220);
  circle(428, 183, 8);


  fill(245, 245, 245);
  circle(428, 188, 10);
  fill(245, 245, 245);
  circle(435, 188, 10);


  //left eye uppereyelid
  noFill();
  stroke(245, 245, 245);
  strokeWeight(2);
  beginShape();
  vertex(463, 164);
  bezierVertex(451, 164, 364, 128, 298, 125);
  endShape();

  //right eye uppereyelid
  noFill();
  stroke(245, 245, 245);
  strokeWeight(2);
  beginShape();
  vertex(568, 184);
  bezierVertex(577, 183, 581, 179, 598, 176);
  endShape();


  //right eye rim
  noFill();
  stroke(245, 245, 245);
  strokeWeight(3);
  beginShape();
  vertex(563, 188);
  bezierVertex(588, 190, 600, 190, 610, 180);
  endShape();

  //right eye under eyelid
  noFill();
  stroke(245, 245, 245);
  strokeWeight(2);
  beginShape();
  vertex(565, 203);
  bezierVertex(568, 200, 586, 210, 587, 200);
  endShape();

  //Shading for eyebags
  beginShape();
  vertex(567, 206);
  bezierVertex(568, 208, 571, 209, 577, 211);
  endShape();

  beginShape();
  vertex(565, 210);
  bezierVertex(567, 211, 567, 213, 569, 213);
  endShape();

  //outter eyeball curve
  beginShape();
  vertex(584, 185);
  bezierVertex(586, 193, 582, 195, 579, 203);
  endShape();



  //right  eyeball

  fill(105, 105, 105);
  circle(568, 195, 6);
  fill(105, 105, 105);
  circle(579, 193, 6);

  fill(169, 169, 169);
  circle(567, 196, 5);

  fill(220, 220, 220);
  circle(576, 195, 5);

  fill(245, 245, 245);
  circle(573, 197, 7);
  fill(245, 245, 245);
  circle(579, 197, 7);




  //nose
  noFill();
  stroke(245, 245, 245);
  strokeWeight(3);
  beginShape();
  vertex(573, 160);
  bezierVertex(561, 187, 554, 224, 590, 306);
  vertex(590, 306);
  bezierVertex(580, 322, 528, 320, 542, 327);
  endShape();

  //mouth
  noFill();
  stroke(245, 245, 245);
  strokeWeight(2);
  beginShape();
  vertex(488, 367);
  bezierVertex(499, 362, 564, 357, 579, 344);
  endShape();

  beginShape();
  vertex(519, 379);
  bezierVertex(520, 375, 549, 376, 562, 366);
  endShape();


  //bang
   let currentFPS = frameRate();
   let f= int (frameCount % currentFPS); 
  console.log(f); 
  if (f>currentFPS/2){
    f=(int (currentFPS)-f);
  }

  noFill();
  stroke(245, 245, 245);
  strokeWeight(3);

  beginShape();
  vertex(484, 42);
  bezierVertex(478-f, 67+f, 466-f, 92+f, 440-f, 139+f);
  endShape();

  beginShape();
  vertex(466, 40);
  bezierVertex(446+f, 61-f, 435+f, 81-f, 397+f, 124-f);
  endShape();

  beginShape();
  vertex(449, 36);
  bezierVertex(429-f, 55-f, 412-f, 67-f, 381-f, 124-f);
  endShape();

  beginShape();
  vertex(432, 33);
  bezierVertex(409-f, 47-f, 391-f, 70-f, 362-f, 112-f);
  endShape();

  beginShape();
  vertex(409, 30);
  bezierVertex(386-f, 56-f, 371-f, 67-f, 344-f, 109-f);
  endShape();

  beginShape();
  vertex(393, 29);
  bezierVertex(359-f, 48-f, 342-f, 69-f, 315-f, 102-f);
  endShape();


  beginShape();
  vertex(504, 42);
  bezierVertex(511-f, 95+f, 506-f, 116+f, 486-f, 156+f);
  endShape();

  beginShape();
  vertex(522, 47);
  bezierVertex(534+f, 92+f, 540+f, 119+f, 527+f, 161+f);
  endShape();

  beginShape();
  vertex(540, 48);
  bezierVertex(554+f, 91-f, 556+f, 95-f, 560+f, 160-f);
  endShape();

  beginShape();
  vertex(554, 49);
  bezierVertex(561+f, 64+f, 573+f, 89+f, 581+f, 151+f);
  endShape();

  beginShape();
  vertex(570, 50);
  bezierVertex(582+f, 76+f, 589+f, 90+f, 600+f, 151+f);
  endShape();

  //side hair
   //println(frameCount%frameRate):
  
  noFill();
  stroke(245, 245, 245);
  strokeWeight(3);
  beginShape();
  vertex(374, 26);
  bezierVertex(277-f, 100+f, 282-f, 207+f, 369-f, 225+f);
  bezierVertex(364, 217, 394+f, 222, 416+f, 261);
  bezierVertex(423-f, 278, 408-f, 294, 424-f, 299);
  bezierVertex(310-f, 271, 303-f, 278, 263-f, 278);
  bezierVertex(242-f, 282, 223-f, 357, 274-f, 348);
  bezierVertex(290-f, 343, 306-f, 359, 319, 379-f);
  bezierVertex(324-f, 390-f, 347-f, 386-f, 373-f, 398+f);
  endShape();
  //println(frameCount);
  
  


  //face shape
  noFill();
  stroke(105, 105, 105);
  strokeWeight(3);
  beginShape();
  vertex(592, 204);
  bezierVertex(584, 214, 586, 258, 584, 284);
  endShape();

  beginShape();
  vertex(583, 313);
  bezierVertex(582, 323, 578, 328, 581, 334);
  endShape();

  beginShape();
  vertex(572, 359);
  bezierVertex(560, 372, 559, 384, 560, 394);
  endShape();

  beginShape();
  vertex(268, 314);
  bezierVertex(312, 353, 344, 369, 420, 394);
  endShape();
  
  
 
  //The transition from her hair to much more abstract design
  fill(220, 220, 220);
  stroke(105, 105, 105);
  strokeWeight(1);
  beginShape();
  vertex(334, 3);
  bezierVertex(291, 70, 282, 140, 275, 172);
  bezierVertex(267, 178, 259, 176, 248, 155);
  bezierVertex(243, 130, 265, 84, 266, 72);
  bezierVertex(263, 61, 240, 56, 223, 56);
  bezierVertex(172, 54, 140, 51, 97, 53);
  bezierVertex(71, 64, 53, 64, 44, 58);
  bezierVertex(41, 44, 42, 37, 74, 35);
  bezierVertex(142, 28, 190, 39, 243, 45);
  bezierVertex(267, 51, 281, 39, 318, 0);
  endShape();

  fill(0, 0, 0);
  stroke(105, 105, 105);
  strokeWeight(1);
  beginShape();
  vertex(314, 11);
  bezierVertex(297, 36, 275, 76, 257, 139);
  bezierVertex(266, 155, 270, 157, 277, 138);
  bezierVertex(280, 109, 287, 81, 314, 11);
  endShape();

  fill(0, 0, 0);
  stroke(105, 105, 105);
  strokeWeight(1);
  beginShape();
  vertex(269, 69);
  bezierVertex(223, 36, 216, 51, 99, 44);
  endShape();

  beginShape();
  vertex(244, 91);
  bezierVertex(251, 139, 257, 159, 293, 195);
  endShape();
 
  
  fill(245, 245, 245);//stair step 1
  strokeWeight(1);
  beginShape();
  vertex(246, 146);
  vertex(-15, 269);
  vertex(0, 241);
  vertex(255, 143);
  endShape();

  fill(245, 245, 245); ///stair step 2
  strokeWeight(1);
  beginShape();
  vertex(255, 160);
  vertex(1, 332);
  vertex(69, 322);
  endShape();

  fill(245, 245, 245); ///stair step 3
  strokeWeight(1);
  beginShape();
  vertex(262, 168);
  vertex(96, 368);
  vertex(183, 368);
  endShape();

  noFill(); ///stair edges
  stroke(105, 105, 105);
  strokeWeight(2);
  beginShape();
  vertex(69, 322);
  vertex(96, 368);
  endShape();

  beginShape();
  vertex(183, 368);
  vertex(200, 400);
  endShape();
  
  noFill(); ///stair edges
  stroke(105, 105, 105);
  strokeWeight(2);
  beginShape();
  vertex(69, 322);
  vertex(96, 368);
  endShape();
  
  
  
}



function mousePressed() {
  console.log(mouseX, mouseY);
}