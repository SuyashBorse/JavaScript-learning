let itemPrices = [250,645,300,900,50];
let discount = 10;
let discountMoney;
let discountprice;
for(let price of itemPrices){
    discountMoney = price / discount;
    discountprice = price - discountMoney;
    console.log(`The discount price for ${price} rupees is ${discountprice} rupees.`);
}