let firstRun = true;

let myImage; 

// vocal, drum, bass, and other are volumes ranging from 0 to 100

function draw_one_frame(words, vocal, drum, bass, other, counter) {
 background(37, 213, 248)
  textFont('Helvetica'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(40);

  if(firstRun){

    myImage = loadImage('cornerflowers.png')

    firstRun = false;

  }
  //dark blue changes
let Lblue = color(58, 220, 226);
let Dblue = color(26, 79, 204);

let lerpAmt2 = map(vocal, 0, 100, 0, 1);
let changingBlue = lerpColor(Lblue,Dblue, lerpAmt2);

 //darkwater spots
drawDarkwater(500, 500);
drawDarkwater(350, 350);
drawDarkwater(650, 350);
drawDarkwater(350, 650);
drawDarkwater(650, 650);
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
let Lpink = color(255,183,204);
let Dpink = color(230,52,105);

let lerpAmt = map(bass, 0, 100, 0, 1);
let changingPink = lerpColor(Lpink,Dpink, lerpAmt);


// display "words"
strokeWeight(0)
fill(changingPink);
textAlign(CENTER);
textSize(vocal);
text(words, width/2, height/3);




//dark water function
function drawDarkwater(darkX, darkY){
changingBlue.setAlpha(127);
fill(changingBlue);
stroke(0);
ellipse(darkX, darkY, drum * 4);
}

//light water function
function drawWhitewater(lightX, lightY){
fill(255, 255, 255, 0);
stroke(255, 255, 255, 127)
strokeWeight(20)
ellipse(lightX, lightY, bass * 5)
}

}

