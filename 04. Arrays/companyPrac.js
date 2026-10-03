let companies = ["Bloomberg" , "Google" , "Uber" ,"Microsoft" , "Netflix" ,"IBM"];

// remove first element 
companies.shift();
console.log(companies);

// to remove uber 
companies.splice(1 ,1 , "Ola");
console.log(companies);

// to add amazon at the end 
companies.push("amazon");
console.log(companies);