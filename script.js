// p5 file

// open the console window of any browser to see console.log() messages,
// like print() messages in Processing
console.log("this is a js comment");

var barWidth = 20;
var lastBar = -1;
var max_distance;

function setup() {
    createCanvas(1300, 450);
    background(50);
    noStroke()
    colorMode(HSB, width, height, 100);
    max_distance = dist(0, 0, width, height);
}

function draw() {
    var whichBar = mouseX / barWidth;
    if (whichBar != lastBar) {
        var barX = whichBar * barWidth;
        background(barX, mouseY, 90);
        fill(255);
        lastBar = whichBar;
    }

    for (var i = 0; i <= width; i += 15) {
        for (var j = 0; j <= height; j += 15) {
            var size = dist(mouseX, mouseY, i, j);
            size = size / max_distance * 55;
            ellipse(i, j, size, size);
        }
    }
}