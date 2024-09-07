"use strict";
// *****************Union****************
//let value: string | number; // we can use union to set my variables type string or number. Then it will allow us operate all its related Work.
//value = 25; // but if we declare variable like this with union(|) then it will only show us the common option available on the both. To Resolve this issue we have to check the type of variable with js Then it will allows us to perform their all options, like belows example
// value = "My Name";
function UnionBasicExample(value) {
    if (typeof value === "string") {
        return value;
    }
    else if (typeof value === "number") {
        return value;
    }
}
UnionBasicExample("my name is Al Amin");
UnionBasicExample(12);
let value = {
    name: "Dhaka",
    population: 1351315313,
    countryName: "Bangladesh",
    cities: 11,
};
