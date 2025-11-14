let fireworks = [];

function setup() {
  createCanvas(windowWidth, 400);
  noStroke();
}

function draw() {
  background(0);

  for (let f of fireworks){
    f.addParticle();
    f.run();

    if (keyIsPressed) {
    let force = createVector(0, 0.05)
    f.addForce(force);
    }
  }
}

function mouseClicked() {
  let f = new ParticleSystem(createVector(width/2, 50));
  fireworks.push(f);
  f.setPosition(createVector(mouseX, mouseY));
}