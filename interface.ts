interface TestUser {
  name: string;
  age: number;
  email: string;
  password: string;
  contactNumber: number;
}

/* 
by creating interface of TestUser we actually created a shape of  user. That Means when someone will try to create a new user and uses this TestUser Type then he will able to see all of keyword.
*/

function createNewUser(user: TestUser) {
  user.name = "Md.Kuddus Ali";
  user.email = "kuddus@ali.com";
  user.contactNumber = 230131533;
  user.password = "habijabi";
}

interface Food {
  name: string;
  price: number;
}

interface SweetFood extends Food {
  isDelicious: boolean;
  isExpensive: boolean;
}

function getSweetFood(food: SweetFood) {
  food.name = "Chocolate Cake";
  food.isDelicious = true;
  food.price = 150;
  food.isExpensive = false;
}

interface AditiysFood extends Food {
  SecondItemName: string;
  ThirdItemName: string;
  isHalimWithBone: boolean;
  dirnkName: string;
  isDrinkHalfLiter: boolean;
}

function getAdisFood(nasta: AditiysFood) {
  nasta.name = "Halim";
  nasta.SecondItemName = "Porota";
  nasta.ThirdItemName = "Puri";
  nasta.isHalimWithBone = true;
  nasta.dirnkName = "Pepsi";
  nasta.isDrinkHalfLiter = true;
}
