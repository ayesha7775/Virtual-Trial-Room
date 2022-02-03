let video;
let poseNet;

// shoulder
let rightShoulderX = 0;
let rightShoulderY = 0;
let leftShoulderX = 0;
let leftShoulderY = 0;

// object shirt
let shirt = {
  x: 0, y : 0, h : 0, w: 0
}

let img;
//let item = $_GET['img'];

function preload(){
    img = loadImage('Image/t1.png');
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
    // shoulder
    let srX = poses[0].pose.keypoints[5].position.x;
    let srY = poses[0].pose.keypoints[5].position.y;
    let slX = poses[0].pose.keypoints[6].position.x;
    let slY = poses[0].pose.keypoints[6].position.y;
    // previous was 5% (0.5)
    rightShoulderX = lerp(rightShoulderX, srX, 0.2);
    rightShoulderY = lerp(rightShoulderY, srY, 0.2);
    leftShoulderX = lerp(leftShoulderX, slX, 0.2);
    leftShoulderY = lerp(leftShoulderY, slY, 0.2);
  }
}

function modelReady(){
  console.log('Model Ready');
}

function draw() {

  image(video, 0, 0);

  /*t-shirt */

  let d = dist(leftShoulderX, leftShoulderY, rightShoulderX, rightShoulderY);
  shirt.x = leftShoulderX-(d/3);
  shirt.y = leftShoulderY-(d/3);
  shirt.w = d*1.8;
  shirt.h = img.naturalHeight;
  image(img, shirt.x, shirt.y, shirt.w, shirt.h);
  
  /* t-shirt*/
}