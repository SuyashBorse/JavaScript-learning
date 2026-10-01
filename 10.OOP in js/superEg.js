class Person {
    constructor(fullname) {
        this.name = fullname;
        this.spicies = "Homo Sapiens";
    }

    eat(){
        console.log("Eating");
    }

    sleep(){
        console.log("Sleeping");
    }
}

class Engineer extends Person{
    constructor(fullname){
        super(fullname);  // to invoked the parent constructor.
        this.branch = branch;
    }

    study(){
        console.log("doing study");
    }
}

let hitesh = new Engineer("Hitesh");
