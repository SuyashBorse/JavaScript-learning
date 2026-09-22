let codingLang = ["JavaScript" , "Java" , "Python" , "PHP"];
console.log(codingLang);

// Push method 
codingLang.push("Rust" , "CPP" , "Swift" , "Go");
console.log(codingLang);

// Pop method
codingLang.pop();
codingLang.pop();
console.log(codingLang);

// toString method
let marks = [66,78,89,90,84];
console.log(marks);
console.log(marks.toString());  // it always returns a new array instead of changing the first array.

// concat method 
let marvelSupHeroes = ["IronMan" , "Thor", "Captain America"];
let dcSupHeroes = ["Batman" , "Superman" , "Flash"];
let supHeroes = marvelSupHeroes.concat(dcSupHeroes); //it also always returns a new array.
console.log(supHeroes);