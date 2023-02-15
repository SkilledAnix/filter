noseX = 0;
noseY = 0;

function preload() {
    img = loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
}

function setup() {
    canvas = createCanvas(600, 600);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(600, 600);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
   image(video, 0, 0, 600, 600);
    image(img, noseX-15, noseY, 40, 40);
}

function take_snapshot() {
    save('doge.png');
}

function modelLoaded() {
    console.log('poseNet is on!!!!!!!!!!!  all hail doge!!!!!!!!!!!!!!!!!');
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}