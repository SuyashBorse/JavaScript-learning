let newBtn = document.createElement("button");
newBtn.innerText = "Click me"
newBtn.style.fontSize = "100px";


let div1 = document.querySelector("div");
div1.append(newBtn);

div1.prepend(newBtn);

div1.before(newBtn);

div1.after(newBtn);

div1.remove();