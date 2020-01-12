function setup() {
  createCanvas(displayWidth, displayHeight);
}

function draw() {
  background(225);

  ddaLine(150, 300, 300, 200);
  ddaLine(300, 200, 400, 250);
  ddaLine(400, 250, 600, 250);
  ddaLine(600, 250, 750, 150);
  ddaLine(750, 150, 900, 200);
}

function ddaLine(x1, y1, x2, y2) {
  var dx = x2 - x1;
  var dy = y2 - y1;

  if (Math.abs(dx) > Math.abs(dy)) {
    var stepSize = Math.abs(dx);
  } else {
    var stepSize = Math.abs(dy);
  }


  var xInc = (dx / stepSize);
  var yInc = (dy / stepSize);

  var x = x1;
  var y = y1;

  beginShape();
  for (var i = 0; i <= stepSize; i++) {
    vertex(round(x), round(y));
    x = x + xInc;
    y = y + yInc;
  }
  endShape();

}