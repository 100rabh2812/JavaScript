// Immediatelt Invoked function Expressions (IIFE)
(function newIIFE(){
    console.log("DB Connected");
})();
// first parathesis () is work function
// second parathesis () is execution
// globel polution poblem that used IIFE
// if you not end the function this type of error show  (intermediate value)(...) is not a function

(function new2IIFE(){
    console.log("DB Connected");
})()