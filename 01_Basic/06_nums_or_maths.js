const score = 400 ;

console.log(score);

const num = new Number(100);

console.log(num);

console.log(num.toString());  //this method converted to string

console.log(num.toFixed(2)); /// this method used after number value  for. 100.00

const otherNum = 123.489;
console.log(otherNum.toPrecision(3)); // return .5 more +1 num add in value

const number = 1000000;
console.log(number.toLocaleString('en-IN'));  //the method used stadarise value

// ++++++++++++++++++++++++++++##########################++++++++++++++++++++++++++++++++++

// Math is lybrary to used various method 
console.log(Math);
console.log(Math.abs(-4)); //the func used to neg value conrt possitive

console.log(Math.round(4.535)); 

console.log(Math.ceil(4.234));  

console.log(Math.floor(4.455));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);



