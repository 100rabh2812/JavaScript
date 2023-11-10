// Scope
var c = 20
let a = 200
if(true){
    let a = 10;
    const b = 20
    var c = 30;
    console.log("Inner ",a);

}
// console.log(a);   //a is not defined. without global decleare
// console.log(b);   ////b is not defined without global decleare
// console.log(c);  //output 30 
// console.log(a)

function one(){
    const username = "saurabh";
    function two(){
      const website = "gethub"
        console.log(username);
    }
    console.log(website);
    two()
}
// one()

if(true){
    const username = "saurabh";
    if(username === "saurabh"){
        const website = "gethub";
        console.log(username , website);
    }
    // console.log(website);
}
// console.log(username);

addOne()
function addOne(num){
    return num + 1;
}
addTwo() //Cannot access 'addTwo' before initialization
const addTwo = function(num) {
    return num +2
}
// this type of hoisting 