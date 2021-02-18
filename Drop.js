class Drop
{
	constructor(x,y,r)
	{
		var options={
            isStatic:false,	
            restitution	: 0,
            friction : 1,
            density : 1.2	
			}
		this.x=x;
		this.y=y;
		this.r=r
		
        this.body=Bodies.circle(this.x, this.y, this.r/2 , options);
        
         World.add(world, this.body);
        }
		
    display(){
     
      var angle = this.body.angle;

     
     
      
      
      
        push();
        ellipseMode(RADIUS);
        fill('blue')
        ellipse(this.body.position.x,this.body.position.y,this.r);
       
  pop();

    }
      
      
     
update(){
    if(this.body.position.y>height){
        Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,200)})
    }
}
      

       
}