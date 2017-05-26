function Field() {
  this.x = screenWidth/2;
  this.y = screenHeight/2;
  this.show = function() {
    noFill();
    strokeWeight(5);
    stroke(0);
    rectMode(CENTER);
    line(this.x , this.y - (screenHeight*3/8), this.x, this.y + (screenHeight*3/8));
    ellipse(this.x, this.y, screenWidth/6, screenWidth/6);
    fill(0);
    ellipse(this.x,this.y,8,8);
    noFill();
    rect(this.x,this.y, screenWidth*3/4, screenHeight*3/4);
  }

}
