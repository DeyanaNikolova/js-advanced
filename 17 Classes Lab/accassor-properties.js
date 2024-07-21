class Circle {
    #pi = Math.PI;  // private property
    constructor(radius) {
        this.radius = radius;
        this._perimeter = Math.PI * 2 * radius;
    }
    get area(){
        return this.#pi * this.radius ** 2;
    }

    get diameter(){
        return this.radius * 2;
    }

    set diameter(value){
        if(value < 0){
            throw new Error('Diameter cannot be less than 0');
        }
        this.radius = value / 2;
    }

    get perimeter(){
        return this._perimeter;
    }
    set perimeter(value){
        if(value < 0){
            throw new Error('Perimeter cannot be less that 0');
        }
        this._perimeter = value;
    }
};

let circle = new Circle(2);

console.log(circle.area);

circle.radius = 3;
console.log(circle.area);
circle.diameter = 10;

console.log(circle.radius);
console.log(circle.area);
