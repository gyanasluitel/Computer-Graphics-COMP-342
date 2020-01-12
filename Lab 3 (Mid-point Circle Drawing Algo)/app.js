function setup() {
  createCanvas(displayWidth, displayHeight);
}

function draw() {
  background(225);
  midPointCircle(200, 500, 500);
}

function midPointCircle(radius, xC, yC) {
  var x0 = 0;
  var y0 = radius;
  var d = 0.5;
  //calculating intital decision paramter

  if (radius % 1 == 0) {
    var p0 = 1 - radius;
  } else {
    var p0 = (5 / 4) - radius;
  }


  var pk = p0;
  var x = x0;
  var y = y0;

  while (x < y) {
    if (pk < 0) {
      circle(xC + x, yC + y, d);

      x = x + 1;
      y = y;
      pk = pk + (2 * x) + 1;

    } else {

      circle(xC + x, yC + y, d);

      x = x + 1;
      y = y - 1;
      pk = pk + (2 * x) - (2 * y) + 1;
    }
    symmetryPoints(x, y, xC, yC, d);
  }
}

function symmetryPoints(x, y, xC, yC, d) {
  circle(xC - x, yC + y, d);
  circle(xC + x, yC - y, d);
  circle(xC - x, yC - y, d);
  circle(xC + y, yC + x, d);
  circle(xC - y, yC + x, d);
  circle(xC + y, yC - x, d);
  circle(xC - y, yC - x, d);
}