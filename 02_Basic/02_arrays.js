let marvel_heros = ["thor","spiderman","ironman"]
let dc_heros = ["flash","badman","superman"]
// marvel_heros.push(dc_heros); //push is used existing arry
// console.log(marvel_heros);  //[ 'thor', 'spiderman', 'ironman', [ 'flash', 'badman', 'superman' ] ]. dc_heros is merge the index of 3 then i want return flash index 3.0 the return flash

// let all_heros = marvel_heros.concat(dc_heros) // but contacat is not merge new object that is different. and concat not used existing array
// console.log(all_heros); 

// and other one  Spread Operator is more easy and mostly used
let all_new_heros = [...marvel_heros,...dc_heros];
console.log(all_new_heros);

// flat operater 
let other_arr = [1,2,3,[1,1,2,3],34,4,[3,4,5,[2,3,4]]]; //the multiple arry i want to the arry single array 
let newother_arr = other_arr.flat(Infinity) //flat parameter pass deep of array
console.log(newother_arr);

console.log(Array.isArray("saurabh")); //check arrays is or not
console.log(Array.from("saurabh")); //is convert array
console.log(Array.from({name:"saurabh"})); //is not  convert array to return empty array []

let num =10
let num2 =20
let num3 = 30
console.log(Array.of(num,num2,num3));  // [ 10, 20, 30 ]
// console.log(Array.from("num,num2,num3")); // is not a function return error