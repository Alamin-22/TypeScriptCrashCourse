// *****************Union****************
//let value: string | number; // we can use union to set my variables type string or number. Then it will allow us operate all its related Work.

//value = 25; // but if we declare variable like this with union(|) then it will only show us the common option available on the both. To Resolve this issue we have to check the type of variable with js Then it will allows us to perform their all options, like belows example
// value = "My Name";

function UnionBasicExample(value: string | number) {
  if (typeof value === "string") {
    return value;
  } else if (typeof value === "number") {
    return value;
  }
}

UnionBasicExample("my name is Al Amin");
UnionBasicExample(12);
// UnionBasicExample(true); // for this two name and number it didn't gave me any error because i have already set my data type to be string or number. But When i tried to give it a boolean as a parameter it instantly throw an error that i can not set boolean.

//*************INTERSECTION*****************

//let a: number | string; // in this union we can define only one type can be set on variable number or string.
// but on the other hand intersection(&) means given all types wil be compulsory.

type City = {
  name: string;
  population: number;
};

type country = {
  countryName: string;
  cities: number;
};

type citiesInCountry = City & country;

let value: citiesInCountry = {
  name: "Dhaka",
  population: 1351315313,
  countryName: "Bangladesh",
  cities: 11,
};
