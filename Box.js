class Box{

    constructor(x1,y1,w,h)
    {
        var op = {
            restituition: 1.0
           // isStatic: true
        }
        this.width = w;
        this.height = h;
      this.body =  Bodies.rectangle(x1,y1,w,h,op);
      World.add(world,this.body);

    }

    display()
    {
        var pos = this.body.position;
      
        fill("lightblue")
        rect(pos.x,pos.y,this.width,this.height);
    }


}