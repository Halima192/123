class pantagon{
    constructor(x,y,width ,height){
var options = {
restitution:0.3,
friction:1.0,
//isStatic:true
}

this.body=Bodies.rectangle(x,y,width,height,options)
this.width=width;
this.height=height

this.image=loadImage("polygon.png")
World.add(world,this.body);
 }
display(){
    push();
    // translate(pos.x,pos.y);
    var pos=this.body.position;
    translate(this.body.position.x,this.body.position.y)
    rotate(this.body.angle);
     imageMode(CENTER);
      image(this.image,0,0,this.width,this.height)
      pop();
      }
}