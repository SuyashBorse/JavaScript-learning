function getData(data, nextData) {
    setTimeout(() => {
        console.log("Data" , data);
        if(nextData){
nextData();
        } 
    }, 3000);
}

getData(1 , () => {
    getData(2, () => {
        getData(3, () => {
            getData(4);
        });
    });
});