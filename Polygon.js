class Polygon {
  constructor(x,y){
    var options = {
      isStatic : false,
      'density': 0.8,
      'restituition':0.8,
      'friction': 0.3
    }
    this.body = Bodies.circle(x,y,70,options);
    this.radius = 70;

    this.image = loadImage("polygon.png");

    World.add(world, this.body);
  //  Matter .Body.setDensity(this.body,5);
  }

  display() {
  var pos = this.body.position;
  push ();
  translate (pos.x,pos.y);
  rotate (this.body.angle);
  imageMode(CENTER);
  image(this.image,0,0,this.radius,this.radius);
    pop ();
  }
}
