console.log("CALCULATE.JS DEN SELAMLAR");

let myName = "Ferhat"

console.log(myName);

const calculate = (dizi) => {
    // products dizisindeki priceları topla.

    return dizi.reduce((sum, item) => sum + item.price, 0)
}