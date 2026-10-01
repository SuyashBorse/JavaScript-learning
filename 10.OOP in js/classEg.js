class ToyotaCar {
   constructor(){
    console.log("Object created.");
   }
    start(){
        console.log("car is started.");
    }

    stop(){
        console.log("car is stoped.");
    }
}

let fortuner = new ToyotaCar();
fortuner.start();
fortuner.stop();

let lexus = new ToyotaCar();
lexus.start();