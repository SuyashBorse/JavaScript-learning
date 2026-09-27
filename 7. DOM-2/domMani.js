let div = document.querySelector("div");
console.log(div);

let value = div.getAttribute("id");
console.log(value);

let newValue = div.setAttribute("id","line1");
console.log(newValue);

console.log(div.style);
div.style.backgroundColor = "red";

div.style.fontSize = "100px";