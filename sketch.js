let dizzinessStars = [];

function setup() {
  createCanvas(windowWidth, 400);
  noStroke();
}

function draw() {
  background(0);

  for (let s of dizzinessStars){
    s.addParticle();
    s.run();

    if (mouseIsPressed) {
    let force = createVector(0, 0.05)
    s.addForce(force);
    }

  }

    if (keyIsDown(UP_ARROW)) {
      let s = new ParticleSystem(createVector(width/2, 50));
      dizzinessStars.push(s);
      s.setPosition(createVector(random(width), random(height)));
    }

    if (keyIsDown(DOWN_ARROW)) {
      dizzinessStars.pop();
    }

}

