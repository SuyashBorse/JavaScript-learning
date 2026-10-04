const URL = "https://meowfacts.herokuapp.com/";

let promise = fetch(URL);
console.log(promise);

const getFacts = async () => {
    console.log("Getting Cat Facts...");
    let response = await fetch(URL);
    console.log(response);
}