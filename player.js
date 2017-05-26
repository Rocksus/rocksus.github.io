function Player(col_, x_, y_, facing_) {
  this.col = col_;
  this.acceleration = createVector(0,0);
  this.velocity = createVector(0,facing_);
  this.position = createVector(x_,y_);
  this.r = 20;
  this.maxspeed = 8;
  this.maxforce = 0.5;

  // Method to update location
  this.update = function() {
  // Update velocity
  this.velocity.add(this.acceleration);
  // Limit speed
  this.velocity.limit(this.maxspeed);
  this.position.add(this.velocity);
  // Reset accelerationelertion to 0 each cycle
  this.acceleration.mult(0);
};

this.applyForce = function(force) {
  // We could add mass here if we want A = F / M
  this.acceleration.add(force);
};

// A method that calculates a steering force towards a target
// STEER = DESIRED MINUS VELOCITY
this.arrive = function(target) {

  var desired = p5.Vector.sub(target,this.position);  // A vector pointing from the location to the target
  var d = desired.mag();
  // Scale with arbitrary damping within 100 pixels
  if (d < 100) {
    var m = map(d,0,100,0,this.maxspeed);
    desired.setMag(m);
  } else {
    desired.setMag(this.maxspeed);
  }

  // Steering = Desired minus Velocity
  var steer = p5.Vector.sub(desired,this.velocity);
  steer.limit(this.maxforce);  // Limit to maximum steering force
  this.applyForce(steer);
};

  this.show = function() {
    fill(this.col);
    noStroke();
    // Draw a triangle rotated in the direction of velocity
    var theta = this.velocity.heading() + PI/2;
    push();
    translate(this.position.x,this.position.y);
    rotate(theta);

    rectMode(CENTER);
    rect(0, 0, this.r*2, this.r*2);
    stroke(0);
    line(0, 0, 0, -this.r*2);
    // beginShape();
    // vertex(0, -this.r*2);
    // vertex(-this.r, this.r*2);
    // vertex(this.r, this.r*2);
    // endShape(CLOSE);
    pop();
  };
}
