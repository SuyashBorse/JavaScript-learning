let Student = {
     name : "Kalpesh Pardeshi",
     age : 19,
     Branch :"Information technology",
     CGPA : 7.9,
     isPass : true
}

for(let key in Student){
    console.log("Key =", key , "::" , "value =", Student[key]);
}