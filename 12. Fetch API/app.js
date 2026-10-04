const URL = "https://meowfacts.herokuapp.com/";

let promise = fetch(URL);
console.log(promise);

const getFacts = async () => {
    console.log("Getting Cat Facts...");
    let response = await fetch(URL);
    console.log(response);  //JSON Format
}

//to get it in JS object format: 
const getFactFormat = async () => {
    console.log("Getting the data in JS format:");
       let response = await fetch(URL);
       console.log(response);
       let data = await response.json();
       console.log(data);
};
