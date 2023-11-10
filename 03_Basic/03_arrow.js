const user = {
    username : "saurabh",
    city : "ahmedabad",
    welcome :function(){
        console.log(`${this.username} , Welcome to Website`); //this is current contects
        console.log(this);
    }
    
}   
user.welcome()
user.username = "sam";
user.welcome()
console.log(this);  //outside of function this run is empty array

function varthis(){
    console.log(this);
}
varthis()

function demo(){
    const name = "saurabh";
    console.log(this.name);  //undefined 
}
demo();

// Arrow function

// const Arr = () =>{
//     console.log('helo')
// }
// const Arr = () => console.log('helo') //impreseat 
// const Arr = () => ('helo') //if does not return we using (). this technique mostly used react
const Arr = () => ({user:'helo'}) //how to object return 


console.log(Arr())