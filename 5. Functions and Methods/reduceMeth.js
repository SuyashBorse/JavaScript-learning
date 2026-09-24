let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

let output = arr.reduce((res ,curr) => {
    return res + curr;
})

console.log("The Sum of elements of array is : ",output);