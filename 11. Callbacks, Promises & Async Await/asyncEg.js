function asyncFunc1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data one ........");
            resolve("success");
        }, 4000);
    });
}

function asyncFunc2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data two..............");
            resolve("success");
        }, 4000);
    });
}


console.log("fetching data1");
asyncFunc1().then((res) => {
    console.log(res);
    console.log("fetching data2");
asyncFunc2().then((res) => {
        console.log(res);
    });
});

