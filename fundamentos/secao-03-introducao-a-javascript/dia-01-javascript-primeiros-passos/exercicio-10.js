let productCost = 80;
let productValue = 100;

if (productCost >= 0 && productValue >= 0) {
    let totalCost = productCost * 1.2;
    let totalProfit = (productValue - totalCost) * 1000;
    console.log(totalProfit);
} else {
    console.log('valor inválido!');
};