// Primitive
let a = 20.2; //number
let b = "Loki"; //string
let c = true; // boolean
let d;   //undefined
let e = null; //null - type object

let f =BigInt("123");
console.log(f); // BigInt

let g =Symbol("hello!");
console.log(g); //symbol

// Non - Primitive : object.
const Student = {
    fullName : "Kalpesh Pardeshi",
    age : 18,
    cgpa : 7.6,
    isPass : true,
}; 

console.log(Student);

Student.cgpa = Student.cgpa + 0.5;
console.log(Student.cgpa);


