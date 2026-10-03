const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("i am promise");
        resolve("success");
    });
};

let promise = getPromise();
promise.then((res)=> {
     console.log("promise fullfiled",res);
});

promise.catch((err) => {
    console.log("rejected",err );
});