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