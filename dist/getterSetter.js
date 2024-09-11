"use strict";
class TestGetter {
    constructor(userName) {
        this.userName = userName;
        this.userName = userName;
    }
    get name() {
        // this is getter
        return this.userName;
    }
    set name(value) {
        // this is setter and it is looks like function but actually its not it is used like an object
        this.userName = value;
    }
}
let abcd1 = new TestGetter("Mollik");
