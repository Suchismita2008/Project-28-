class Mango{
    constructor(x, y, r) {
        var options = {
           
            restitution :0.4,
            friction :0.0,
            //isStatic:true
      
           
        }
        this.r = r;
        this.body = Bodies.circle(x, y, r, options);
        this.Image = loadImage("Plucking mangoes/mango.png");
        World.add(world, this.body);
      }
      display(){
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        ellipseMode(CENTER);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r, this.r);        
        pop();
        
        

}
}