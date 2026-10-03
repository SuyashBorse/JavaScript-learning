let input = prompt("Enter Size of an array N");
let N = parseInt(input);

let arr = [];

for(let i = 0; i <= N ; i++){
    arr[i - 1] = i;
}

let sum = arr.reduce((res , curr) => {
    return res + curr;
})

let product = arr.reduce((res , curr) => {
    return res * curr;
})

console.log(sum);
console.log(product);