const points =[100, 200, 250]
// const x = points[0]
// const y = points[1]
// De- structuring with array
// const [x,, z]= points
// console.log(x , z);

const person = {
    name: "John",
    age: 25, 
    isStudent: true,
    marks: [78,88,86]
}
// De-structuring with objects
const {name, age} = person

console.log(name, age);

function myFunction(){
    return [100, 200]
}

const [x, y]= myFunction()
console.log(x, y)
