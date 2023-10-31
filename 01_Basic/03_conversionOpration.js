let score = "45";
let score1 = null;
let score2 = undefined
let score3 = "saurabh"

console.log(typeof score);

let valueConv = Number(score);
let valueConv1 = Number(score1);
let valueConv2 = Number(score2);
let valueConv3 = Number(score3);

console.log(typeof valueConv);

console.log(typeof NaN);  //NaN  Data type is Number

console.log(valueConv1);  // null value return 0

console.log(valueConv2);  //undefined return NaN
console.log(valueConv2);  //string convert string then return NaN


// "33abc" =->NaN
// boolean value conversion

let isloged = 0;

let loged = Boolean(isloged);

console.log(loged);

// 1 => true ; 0 => false
// "" => false
// "saurabh" = true