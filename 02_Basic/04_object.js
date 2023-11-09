const regulerUser = {
    fullname:{
        userfullname:{
            name:"saurabh",
            age:23
        }
    }
}
// console.log(regulerUser.fullname.userfullname.name);

let num1 = {1:"1",2:"2"};
let num2 = {3:"3",4:"4"};

// let obj ={num1 ,num2}
// console.log(obj);  //is not is append num1 num 2

let obj2 = Object.assign({},num1,num2) //{} optional
// console.log(obj2); //is good way to concat 

// and using spread Oprater
let spd = {...num1, ...num2}
// console.log(spd);  //mostly used this method

let tinderUser = {
    name:"saurabh",
    city:"Amrabvati",
    country:"india",
}
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)); // this type reurn data type array

console.log(tinderUser.hasOwnProperty("name1"));  //check  the object property is or not



