// singleton. - > become constructor
 Object.create //this type of method is know as single ton

// object literals 
let mySym = Symbol("key2") //how to symbol access in object 

const User = {
    name:"saurabh",
    [mySym] : "myKey",
    age:23,
    city:"Ahmedabad",
    email:"saurabh@google.com"
}
// console.log(User.email);
// console.log(User['email']);
// console.log(User[mySym]);

User.email ='saurabh@chatGPT.com' ;
// Object.freeze(User)  //freeze does not value chanege
// console.log(User);
User.email = 'saurabh@Microsoft.com';
// console.log(User);

User.greeting = function(){
    console.log("hello js User")
}
console.log(User.greeting());

User.greeting2 = function(){
    console.log(`hello Js User, ${this.name}`);
}
console.log(User.greeting2());
console.log(User.greeting2);