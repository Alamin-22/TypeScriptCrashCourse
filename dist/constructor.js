"use strict";
// Constructor is a Special method of classes and it's work is to run first and initialize all the variables first.
class PenDrive {
    constructor(name, price) {
        this.Company = name;
        this.Price = price;
    }
}
let penDrive1 = new PenDrive("Adata", 840);
