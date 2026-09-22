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
let dcSupHeroes = ["Batman" , "Superman" , "Flash" , "Wonder Women"];
let supHeroes = marvelSupHeroes.concat(dcSupHeroes); //it also always returns a new array.
console.log(supHeroes);

// Unshift method
marvelSupHeroes.unshift("Hulk"); // add an element to the start of the array.
console.log(marvelSupHeroes);

// Shift method
marvelSupHeroes.shift(); // removes the first element of an array.
console.log(marvelSupHeroes);

// Slice method
let sliceExp = dcSupHeroes.slice(1,3);
console.log(sliceExp);