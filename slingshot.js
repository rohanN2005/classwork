class Slingshot{
    constructor(body,point){
        var options = {
            stifness: 0.1,
            length: 10,
            bodyA:body,
            pointB:point,
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        console.log(this.sling);
        this.pointB = point;
    }
    display(){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}