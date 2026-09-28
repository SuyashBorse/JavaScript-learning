let Btn1 = document.querySelector("#Btn1");

Btn1.onclick = () => {
    console.log("Button was clicked");
    let a = 25;
    a++;
    console.log(a);
}

Btn1.ondblclick = (evt) => {
    console.log(evt);
    console.log("Button was clicked 2x");  

console.log(evt.type);
console.log(evt.target);




};
