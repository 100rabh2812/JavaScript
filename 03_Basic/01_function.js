

// function func(){
//     console.log("s");
//     console.log("a");
//     console.log("u");
//     console.log("r");
//     console.log("a");
//     console.log("b");
//     console.log("h");

// }
// func()   //  func is referances.   ()   // is execution

// function addNum(num1,num2){
//     console.log(num1 + num2);
// }

//  const result=addNum(10,20);
//  console.log(result); //return undefind 

// function addNum(num1,num2){
//     return(num1 + num2);
// }

//  const resultRet=addNum(10,20);
// //  console.log(resultRet); //return undefind 

//  function login(name){
//     // if(name === undefined){
//     //     console.log("please enter name");
//     //     return
//     // }
//     if(!name){
//         console.log("please enter name");
//        return
//     }
//     return `${name} log in successfull`
//  }
//  console.log(login("saurbh"));
// console.log(login());

function calCardPrice(...num){  //the rest oprater used number of value 
  console.log(num)
}
calCardPrice(10,20,30,100,)
function calCardPriceval(val1,val2,...num){  //skip 2 value then rest oprater used number of value 
  console.log(num)
}
calCardPriceval(10,20,30,100,) 

const user = {
    userName:"saurabh",
    city:"teosa"
}

function logFun(anyvalue){
    console.log(`user name is ${anyvalue.userName} and stil visit ${anyvalue.city}`);
}

logFun(user)