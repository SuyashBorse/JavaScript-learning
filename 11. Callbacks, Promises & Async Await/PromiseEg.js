function getData(data, nextData){
  return new Promise((resolve , reject) => {
 setTimeout(() => {
        console.log("Data" , data);
        resolve("Success"); 
        if(nextData){
         nextData();
        } 
    }, 5000);
  });
}

getData(1 , () => {
    getData(2, () => {
        getData(3, () => {
            getData(4);
        });
    });
});