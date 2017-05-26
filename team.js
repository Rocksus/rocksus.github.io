function Team(col_, facing_) {
  this.col = col_;
  this.facing = facing_;
  this.players = [];
  for (var i=0; i<playersPerTeam; i++) {
    this.players.push(new Player(this.col, width/2+(200*this.facing), field.y+ i *60, this.facing));
  }
  this.show = function() {
    for (var i=0; i<this.players.length; i++) {
      this.players[i].show();
    }
  }
  this.move = function() {
    for(var i=0; i<this.players.length; i++) {
      this.players[i].arrive(ball.position);
      this.players[i].update();
    }
  }
}
