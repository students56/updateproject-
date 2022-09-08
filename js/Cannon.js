class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = 80;
    this.y = 80;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.cannon_image = loadImage("assets/helicopter.png");
    //this.cannon_base = loadImage("assets/cannonBase.png");
  }
  display() {
    // if (keyIsDown(RIGHT_ARROW) && this.angle<70  ) {
    //   this.angle += 1;
    // }

    // if (keyIsDown(LEFT_ARROW) && this.angle>-30 ) {
    //   this.angle -= 1;
    // }

    if (keyIsDown(LEFT_ARROW) ) {
      // this.angle -= 1;
       this.x -= 1;
     }
 
     if (keyIsDown(RIGHT_ARROW) ) {
       //this.angle -= 1;
       this.x += 1;
     }
 
     if (keyIsDown(DOWN_ARROW) ) {
       // this.angle -= 1;
        this.y += 1;
      }
  
      if (keyIsDown(UP_ARROW) ) {
        //this.angle -= 1;
        this.y -= 1;
      }
     
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    imageMode(CENTER);
    image(this.cannon_image, 0, 0, this.width, this.height);
    pop();
    //image(this.cannon_base, 70, 20, 200, 200);
    noFill();
  }
}
