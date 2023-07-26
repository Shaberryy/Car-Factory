class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getDiscription() {
        return `This car is a ${this.year} ${this.make} ${this.model}`;
        
    }
};
class ElectricCar extends Car {
    constructor (make, model, year, range) {
        super (make,model,year);
        this.range = range;
    }
    getDiscription(){
        return `${super.getDiscription()}This car has a mileage of ${this.range}`;
    }
};
const electric1 = new ElectricCar(`Tesla`, `Model S`, `year 2019`, `300`);
console.log (electric1);
