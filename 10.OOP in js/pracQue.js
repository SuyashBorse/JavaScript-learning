let data = "name,email,code";

class User {
 constructor(name,email){
    this.name = name;
    this.email = email;
 }

 viewData(){
          console.log("This is websites data -" ,data);
 }
}

let printData = new User("lokesh" , "lokesh@gmail.com");
printData.name;
printData.email;
printData.viewData();