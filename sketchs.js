let video;
let poseNet;
// nose
let noseX = 0;
let noseY = 0;
// eye
let eyelX = 0;
let eyelY = 0;
let eyerX = 0;
let eyerY = 0;

// object sunglass
let sunglass = {
  x: 0, y: 0, h: 0, w: 0
}

let img;
//let item = $_GET['img'];

function preload(){
    img = loadImage('Image/s1.png');
}

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.hide();
  poseNet = ml5.poseNet(video, modelReady);
  poseNet.on('pose', gotPoses);
}

function gotPoses(poses){
  // console.log(poses);
  if(poses.length > 0){
    // nose
    let nX = poses[0].pose.keypoints[0].position.x;
    let nY = poses[0].pose.keypoints[0].position.y;
    noseX = lerp(noseX, nX, 0.5);
    noseY = lerp(noseY, nY, 0.5);
    // eye
    let elX = poses[0].pose.keypoints[1].position.x;
    let elY = poses[0].pose.keypoints[1].position.y;
    let erX = poses[0].pose.keypoints[2].position.x;
    let erY = poses[0].pose.keypoints[2].position.y;
    eyelX = lerp(eyelX, elX, 0.5);
    eyelY = lerp(eyelY, elY, 0.5);
    eyerX = lerp(eyerX, erX, 0.5);
    eyerY = lerp(eyerY, erY, 0.5);
  }
}

function modelReady(){
  console.log('Model Ready');
}

function draw() {
  // background(220);
  image(video, 0, 0);
  
  /* sunglass */

  let d = dist(noseX, noseY, eyelX, eyelY);
  let widthE = eyelX - eyerX;
  let heightE = d;
  sunglass.x = eyerX-d;
  sunglass.y = eyelY-d;
  sunglass.w = eyelX - eyerX + (2*d);
  sunglass.h = 1.5*d;
  image(img, sunglass.x, sunglass.y, sunglass.w, sunglass.h);
  
}