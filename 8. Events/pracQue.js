// To toggle screen from light to dark and vise versa using event

let modeBtn = document.querySelector("#mode");
let currmode ="light"; // dark

modeBtn.addEventListener("click", () => {
  if(currmode === "light"){
    currmode = "dark";
    document.querySelector("body").style.backgroundColor = "Black";
  }else{
    currmode = "light";
        document.querySelector("body").style.backgroundColor = "white";
  }

  console.log(`your mode is ${currmode}`);
})