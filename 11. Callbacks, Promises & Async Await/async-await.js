function api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("wheater data.....");
            resolve(200);
        }, 2000);
    });
}

async function apicall() {
    await api();
}