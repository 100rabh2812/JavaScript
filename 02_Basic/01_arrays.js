// Array 
let arr = [1,2,3,4,5];

// js array is arrow different type of array
let newarr = new Array("hello","bro",1,2,3);
// add in last element
newarr.push(6);
// pop is used remove last value
newarr.pop();
// unshift is used to add value in first but all value index no. change is bad the reason unshift doesn't used
newarr.unshift(2);
// remove first element 
newarr.shift()
// is check is present or not
// console.log(newarr.includes(9))
// is knowing the value which index number but values not in array then return -1 ***
//  console.log(newarr.indexOf(9))
// console.log(typeof(newarr)); 

// join method used to bind array and return string data type
let myArr = newarr.join();
// console.log(myArr);
// console.log(typeof(myArr));


// *************** slice OR splice ***********
let sl = [1,2,3,5,4,6];
console.log("A ",sl);
const slc =sl.slice(1,3)
// slice return index strat (1) and range end Point - 1  (3)  
console.log(slc);
console.log("B",sl); 

const splc =sl.splice(1,3)
// slice return index strat (1) and range end Point (3) but origner array remove those number
console.log(splc);
// the element splice is remove original array then return
console.log("C",sl);   //[1,4,6]

