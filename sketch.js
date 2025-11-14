let systems = [];

function setup() {
  createCanvas(720, 400);
  noStroke();
}

function draw() {
  background(51);

  for (let s of systems){
    s.addParticle();
    s.run();
  }
}

function mouseClicked() {
  let s = new ParticleSystem(createVector(width/2, 50));
  systems.push(s);
  s.setPosition(createVector(mouseX, mouseY));
}