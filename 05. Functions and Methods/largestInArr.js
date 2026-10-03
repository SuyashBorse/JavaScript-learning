// TO find largest element in an array using reduce method.
let arr = [101,20,666,548,359];

let output = arr.reduce((res , curr) => {
    return res > curr ? res : curr ;
})
 
console.log("Largent element in an Array is : ",output);