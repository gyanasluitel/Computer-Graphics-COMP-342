function setup() {
  createCanvas(displayWidth, displayHeight);
}

function draw() {
  background(225);
  blaLine(200, 100, 400, 500);
  blaLine(500,200,700,300);
}


function blaLine(x1, y1, x2, y2) {
  var dx = x2 - x1;
  var dy = y2 - y1;

  var slope = abs(dy / dx);

  if (slope < 1) {
    bla1(x1, y1, dx, dy);
  } else {
    bla2(x1, y1, dx, dy);
  }
}

//when slope is less than 1
function bla1(x1, y1, dx, dy) {
  var p0 = (2 * dy) - dx;

  var x = x1;
  var y = y1;
  var pk = p0;

  beginShape();
  for(var i = 0; i <= dx ; i++) {
    if (pk < 0) {
      vertex(x, y);
      x = x + 1;
      y = y;
      pk = pk + 2 * dy;
    } else {
      vertex(x, y);
      x = x + 1;
      y = y + 1;
      pk = pk + (2 * dy) - (2 * dx);
    }

  }
  endShape();
}

  //when slope is greater than or equal to 1
  function bla2(x1, y1, dx, dy) {
    var p0 = (2 * dx) - dy;

    var x = x1;
    var y = y1;
    var pk = p0;

    beginShape();
    for(var i = 0; i <= dy ; i++) {
      if (pk < 0) {
        vertex(x, y);
        x = x;
        y = y + 1;
        pk = pk + 2 * dx;
      } else {
        vertex(x, y);
        x = x + 1;
        y = y + 1;
        pk = pk + (2 * dx) - (2 * dy);
      }

    }
    endShape();
  }