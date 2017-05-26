function Ball() {
  this.position = createVector(width/2,height/2);
  this.acceleration = createVector(0,0);
  this.velocity = createVector(0,0);
  this.maxSpeed = 8;
  this.r = 15;
  this.show = function() {
    noStroke();
    fill(255);
    ellipse(this.position.x,this.position.y, this.r*2, this.r*2);
  }
  this.update = function() {
    for(var i=0; i<teamRed.players.length; i++) {
      var distance = dist(this.position.x, this.position.y, teamRed.players[i].position.x, teamRed.players[i].position.y);
      if(distance < this.r*2) this.move(teamRed.players[i].velocity);
    }
    for(var i=0; i<teamBlue.players.length; i++) {
      var distance = dist(this.position.x, this.position.y, teamBlue.players[i].position.x, teamBlue.players[i].position.y);
      if(distance < this.r*2) this.move(teamBlue.players[i].velocity);
    }
  }
  this.move = function(impact) {
    this.acceleration.add(impact);
    this.velocity.add(this.acceleration);
    this.velocity.limit(1);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  }
}
