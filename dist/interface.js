"use strict";
/*
by creating interface of TestUser we actually created a shape of  user. That Means when someone will try to create a new user and uses this TestUser Type then he will able to see all of keyword.
*/
function createNewUser(user) {
    user.name = "Md. Kuddus Ali";
    user.email = "kuddus@ali.com";
    user.contactNumber = 230131533;
    user.password = "habijabi";
}
function getSweetFood(food) {
    food.name = "Chocolate Cake";
    food.isDelicious = true;
    food.price = 150;
    food.isExpensive = false;
}
function getAdisFood(nasta) {
    nasta.name = "Halim";
    nasta.SecondItemName = "Porota";
    nasta.ThirdItemName = "Puri";
    nasta.isHalimWithBone = true;
    nasta.dirnkName = "Pepsi";
    nasta.isDrinkHalfLiter = true;
}
