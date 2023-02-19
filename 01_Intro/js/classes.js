// -=-=-=-=-=-=-=- Classes -=-=-=-=-=-=-=-
class Car {
    // private fields
    #speed;

    constructor(model, year, color) {
        this.model = model;
        this.color = color;
        this.year = year;
        this.#speed = 0;
    }

    // methods
    print() {
        console.log(`Car: ${this.model} ${this.color} : ${this.year}... drdrdr ${this.#speed}km/h`);
    }
    paint(newColor) {
        this.color = newColor;
    }
    render() {
        document.write(`<strong style='color: darkcyan;'>Car: ${this.model}, color: ${this.color}, year: ${this.year}</strong>`);
    }

    // getter / setter
    set speed(value) {
        if (value >= 0)
            this.#speed = value;
    }
    get miles() {
        return this.#speed * 0.621371;
    }
}

const myCar = new Car("Nissan", 2014, "Black");

//myCar.#speed = -10; // error with private 

myCar.print();
myCar.paint("Red");

//myCar.setSpeed(135);
myCar.speed = 135;      // setter
myCar.speed = -50;      // ignore

myCar.render();
myCar.print();
console.log("Speed: " + myCar.miles.toFixed(1) + "mi/h");

// -=-=-=-=-=-=-=- Extends -=-=-=-=-=-=-=-
class PoliceCar extends Car {
    constructor(model, year, color, volume) {
        super(model, year, color); // base class constructor
        this.volume = volume;
    }

    beep() {
        console.log("Stop!!! Beep...beep...beep... volume: " + this.volume);
    }
    print() {
        super.print(); // base class method

        console.log("Volume: " + this.volume + "!");
    }
}

const car2 = new PoliceCar("Toyota Prius", 2018, "White", 10000);

car2.print();
car2.beep();
