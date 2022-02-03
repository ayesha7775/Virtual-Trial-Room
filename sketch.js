let video;
let poseNet;

let img;

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.hide();
}


function modelReady(){
  console.log('Model Ready');
}

function draw() {
  image(video, 0, 0);
}