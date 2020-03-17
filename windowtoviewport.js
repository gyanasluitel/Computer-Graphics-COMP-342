function setup() {
  createCanvas(400, 400);
}

function WindowtoViewport(x_w, y_w, x_wmax, y_wmax, 
                       x_wmin, y_wmin, x_vmax, 
                       y_vmax, x_vmin, y_vmin){
                             
    sx = (x_vmax - x_vmin) / (x_wmax - x_wmin) 
    sy = (y_vmax - y_vmin) / (y_wmax - y_wmin) 
  
    x_v = x_vmin + ((x_w - x_wmin) * sx) 
    y_v = y_vmin + ((y_w - y_wmin) * sy) 
  
    console.log("The point on viewport:" +x_v+" " +y_v); 
    return [x_v,y_v]
    // line(
}
function draw() {
  background(220);
  worldMin_X = 0;
  worldMin_Y = 0;
  worldMax_X = 1000;
  worldMax_Y = 1000;
  wC_x1 = 230;
  wC_y1 = 230;
  wC_x2 = 100;
  wC_y2 = 100;
  p1= WindowtoViewport(wC_x1,wC_y1,worldMax_X,worldMax_Y,worldMin_X,worldMin_Y,400,400,0,0);
  // line(
  p2= WindowtoViewport(wC_x2,wC_y2,worldMax_X,worldMax_Y,worldMin_X,worldMin_Y,400,400,0,0);
  
  line(p1[0],p1[1],p2[0],p2[1])
}