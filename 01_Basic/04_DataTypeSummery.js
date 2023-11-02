// Primitive  Data Type 

//  String , Number , BigInt , null , undefineted , boolearn , symbole

// you know all data type 

const deSym = Symbol(123);

const demoSym = Symbol(123);

console.log(deSym === demoSym);

// both are different value return symbole

// referance (Non primitive Data Type)

// Array , Object ,Function

const arr = [1,2,3,4,5,6];   //array data type

console.log(typeof arr);  // array also return data type object

let obj ={
    name: "saurabh",
    age: 23
}  // Object 

console.log(typeof obj);

let func = function func(){
    console.log("Hello World!!!!!");
}

console.log( typeof func);   //  data type is function


// +++++++++++++++++++++++++$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$+++++++++++++++++++++++++

// Heap  and Stack 

// Stack   *(also used Primitive data type )   * return copy value

let name = "saurabh";
let otherName = name;
otherName = "rahul";

console.log(otherName);     /// otheName variable name is change  rahul
console.log(name);          /// name variable  name is  saurabh  why  becouse  name var value is copy to other var is stack


// HEAP (also used Non Primitive Data Type)    * return Referenences  mean original value

let userOne = {
    name : "saurabh",
    age : 23
}

let userTwo = userOne;

userTwo.name = "rahul"

console.log(userOne);      // name : rahul age : 23 result not change becouse is used Heap memary  and is references
console.log(userTwo);      //namr : rahul  age : 23