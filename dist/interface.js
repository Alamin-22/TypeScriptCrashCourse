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
