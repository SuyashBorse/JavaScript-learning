class Person {
    eat(){
        console.log("Eating");
    }

    sleep(){
        console.log("Sleeping");
    }
}

class Engineer extends Person{
    study(){
        console.log("doing study");
    }
}

class Doctor extends Engineer{
    work(){
        console.log("Is working");
    }

    study(){
        console.log("Doc is revising");   // method overriding.
    }
}
let kalpesh = new Engineer();

// kalpesh.study();
// kalpesh.eat();
// kalpesh.sleep();

let lokesh = new Doctor();

lokesh.work();
lokesh.study();