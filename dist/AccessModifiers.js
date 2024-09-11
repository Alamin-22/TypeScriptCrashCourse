"use strict";
class SSD {
    constructor() {
        this.name = "Adata 840M"; // we can set variable without writing Public but still it will  set public hiddenly.
    }
    //also If I write a variable using public then that variable is changeable. Similar to Let Const in Js
    getName() {
        console.log(this.name);
    }
}
let S1 = new SSD();
S1.name = "SamSaung880Evo";
class User1 {
    constructor() {
        this.balance = 1200; //Property 'balance' is private and only accessible within class 'User1'
    }
    //   it means we can not use private variables outside of class Component and if we print the value out side of the class component but we can  not change that value form the out side of class component
    getBalance() {
        console.log(this.balance);
    }
}
let user01 = new User1();
// user01.balance = 100;
class User2 {
    constructor() {
        this.balance = 1200;
    }
}
class Admin extends User2 {
    constructor() {
        super(...arguments);
        this.isAdmin = true;
    }
    getBalance() {
        this.balance;
    }
}
let Admin1 = new Admin();
