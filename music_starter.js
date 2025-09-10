let firstRun = true;

let myImage; 

// vocal, drum, bass, and other are volumes ranging from 0 to 100

function draw_one_frame(words, vocal, drum, bass, other, counter) {
 background(37, 213, 248)
  textFont('Rockwell'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(40);

  if(firstRun){

    myImage = loadImage('TROPICS.png')
    myImage2 = loadImage('WATER.png')
    firstRun = false;

  }

image(myImage2, 0, 0);

//dark blue changes
let Lblue = color(44, 255, 255);
let Dblue = color(96, 82, 234);

let lerpAmt2 = map(vocal, 0, 100, 0, 1);
let changingBlue = lerpColor(Lblue,Dblue, lerpAmt2);

 //darkwater spots

drawDarkwater(500, 500);

drawDarkwater2(350, 350);
drawDarkwater2(650, 350);
drawDarkwater2(350, 650);
drawDarkwater2(650, 650);

drawDarkwater(500, 200);
drawDarkwater(500, 800);
drawDarkwater(800, 500);
drawDarkwater(200, 500);

//light  water rings
drawWhitewater(650, 500)
drawWhitewater(350, 500);
drawWhitewater(500,350);
drawWhitewater(500, 650);

image(myImage, 0, 0);

// light and dark pinks
let Lpink = color(248,135,145);
let Dpink = color(221,36,51);

let lerpAmt = map(bass, 0, 100, 0, 1);
let changingPink = lerpColor(Lpink,Dpink, lerpAmt);


// display "words"
stroke(255, 255, 255)
strokeWeight(10) 
fill(changingPink);
textAlign(CENTER, CENTER);
textSize(vocal);
text(words, width/2, height/2);

//dark water function
strokeWeight(0)
function drawDarkwater(darkX, darkY){
changingBlue.setAlpha(150);
fill(changingBlue);
stroke(0);
ellipse(darkX, darkY, drum * 4);
}

strokeWeight(0)
function drawDarkwater2(darkX, darkY){
changingBlue.setAlpha(150);
fill(changingBlue);
stroke(0);
ellipse(darkX, darkY, drum * 3);
}

//light water function
function drawWhitewater(lightX, lightY){
fill(255, 255, 255, 0);
stroke(255, 255, 255,)
strokeWeight(15)
ellipse(lightX, lightY, bass * 5)
}

}

