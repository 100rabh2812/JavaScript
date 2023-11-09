// Object De-Structured
let  course = {
    name : "JS",
    frees : 3200,
    city : "Ahmedabad"
}

//console.log(course.city) //single value get more are used bi\oth structure

const {city} = course;
// console.log(city);  // this type of method value get but single word is bet way

// then is value call other name
const {city : owncity} = course;
// console.log(owncity);

// one basic react concept
// const navbar = ({company})=>{ console.log(company); } 
// navbar(company = "abs")