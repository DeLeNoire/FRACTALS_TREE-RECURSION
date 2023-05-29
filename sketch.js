var slider;
function setup() {
  createCanvas(600, 600);
  slider = createSlider(0, TWO_PI, PI / 4, 0.01);
}

function draw() {
  background(51);
  angle = slider.value();
  translate(300, height);
  stroke(255);
  branch(150);
}

function branch(len) {
  line(0, -18, 0, -len);
  translate(0, -len);

  if (len > 4) {
    push();
    rotate(angle);
    branch(len * 0.67);
    pop();
    push();
    rotate(-angle);
    branch(len * 0.67);
    pop();
  }
}
