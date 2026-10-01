class ToyotaCar {
//    constructor(){
//     console.log("Object created.");
//    }

   constructor(brand , milage){
     this.brand = brand;
     this.milage = milage;
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

let landcruiser = new ToyotaCar("Landcruiser" , 10);
landcruiser.brand;
landcruiser.milage;