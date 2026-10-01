// Obj dec in js 

const Student = {
    fullName : "Kalpesh Pardeshi",
    marks : 34.45,
    grade : "fail",
   printMarks : function () {
       console.log("Marks of kalpesh are: ",marks);
    }
};

const employee = {
    callTax(){
         console.log("Tax rate is 10%");
    },
};

const kalpesh = {
    salary : 10000,
};

kalpesh.__proto__= employee;
