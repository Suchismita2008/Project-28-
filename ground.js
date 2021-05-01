class Ground{

    constructor(){
        var ground_options={
            isStatic : true
          }
        
          this.ground = Bodies.rectangle(400,700,800,20,ground_options)
          World.add(world,this.ground);
    }
    display(){
        noStroke();
        fill("brown");
        rectMode(CENTER);
        rect(this.ground.position.x,this.ground.position.y,900,20);
    }
}