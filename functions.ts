/* 
1. Named Function
2. Anonymous Function
3. Explicit Return Type => it means I have to tell that function about the Return values type
4. Implicit  Return Type => it means It automatically decide by observing the value what is the type of that value
5. Optional Parameters => ? this is called optional parameter  and it is used like || in js
6. Default Parameters  => it means we can add a default value on a parameter by using (=) right after the type
7. Rest Parameters
8. Arrow func
*/

function GetUser(): void {} // this is name func we have to add type after writing function name and if the function is not returning anything then we have to  provide Void Type After writing the name of that function

// function():void {}/*  this is anonymous function */

const newFunc = (): void => {}; // this is arrow func

//** optional parameters *********?*********
// "?" => it means if i use this optional(?) parameter right after the parameter before colon (:) then it allow me to use that parameter as a optional. it means i can call that function without giving that parameter and typeScript will not throw any error.
function GetNewUser(name: string, age: number, gender?: string): void {}

GetNewUser("Mollik", 21);

// rest functions

function GetListOfName(...names: string[]) {} // it means we can provide as much of data as we want and all of those data should be set into a Array and we have also set the type of that array. it is similar to spread operator

GetListOfName("Alamin", "Mollik", "Emran", "labu");
