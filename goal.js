function Goal(x_, f_) {
  this.x=x_;
  this.facing = width/8 * f_;
  this.y=height/2;
  this.show = function() {
    rectMode(CORNER);
    fill(31);
    noStroke();
    rect(this.x+this.facing, this.y-height/4, this.x-this.facing, this.y);
    stroke(255);
    line(this.x, this.y+height/4, this.x, this.y-height/4);
    line(this.x, this.y+height/4, this.x+this.facing, this.y+height/4);
    line(this.x, this.y-height/4, this.x+this.facing, this.y-height/4);
  }
}
