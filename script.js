"use strict";
const currency = [
    {
        "name": "Real Brasileiro",
        "symbol": "R$",
        "icon": "./assets/BR_icon"
    },
    {
        "name": "Dólar Americano",
        "symbol": "US$",
        "icon": "./assets/EUA_icon"
    },
    {
        "name": "Libra",
        "symbol": "£",
        "icon": "./assets/pound_icon"
    },
    {
        "name": "Euro",
        "symbol": "€",
        "icon": "./assets/Euro_icon"
    },
    {
        "name": "Bitcoin",
        "symbol": "₿",
        "icon": "./assets/BTC_icon"
    }
];
const dolar = 5;
function showValue() {
    const value = parseFloat(document.getElementsByTagName("input")[0].value);
    const initialCurrencyValue = document.getElementById("initialCurrencyValue");
    initialCurrencyValue.innerHTML = value.toFixed(2);
}
function showCurrency() {
    const currencyTo = document.getElementsByClassName("convertTo")[0];
    const finalCurrencyName = document.getElementById("finalCurrencyName");
    const finalCurrencyIcon = document.getElementById("finalCurrencyIcon");
    console.log(currencyTo.value);
    finalCurrencyName.innerHTML = currencyTo.value;
    if (currencyTo.value === "US$ Dólar americano") {
        finalCurrencyIcon.src = "./assets/EUA_icon.png";
    }
    if (currencyTo.value === "€ Euro") {
        finalCurrencyIcon.src = "./assets/Euro_icon.png";
    }
    if (currencyTo.value === "£ Libra") {
        finalCurrencyIcon.src = "./assets/pound_icon.png";
    }
    if (currencyTo.value === "₿ Bitcoin") {
        finalCurrencyIcon.src = "./assets/BTC_icon.png";
    }
}
function convert() {
    const value = parseFloat(document.getElementsByTagName("input")[0].value);
    const convertedValue = value / dolar;
    console.log(convertedValue.toFixed(2));
    const finalCurrencyValue = document.getElementById("finalCurrencyValue");
    finalCurrencyValue.innerHTML = convertedValue.toFixed(2);
}
//# sourceMappingURL=script.js.map