let btn1 = document.querySelector("#Btn1");

btn1.addEventListener("click" , (e) => {
console.log("Button is clicked- Hello");
console.log(e.type);
}); 

const handler = (e) => {
   console.log("Button is clicked- Hello");
console.log(e.type);
};

btn1.removeEventListener("click" , handler);