class Paper {
  constructor(x, y) {
    var options = {
        isStatic: false,
        'density': 1,
        'friction':0,
        'restitution': 0.3,
    }
    this.body = Bodies.rectangle(x, y, 100, 100, options);
    this.width = 100;
    this.height = 100;
    
    World.add(world, this.body);

    this.image = loadImage("paper.png");
    
  
  }
  display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      strokeWeight(4);
      stroke("black");
      fill("white");
      image(this.image, 0, 0, this.width, this.height);
      pop();
  }
};
