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

let kalpesh = new Engineer();

kalpesh.study();
kalpesh.eat();
kalpesh.sleep();