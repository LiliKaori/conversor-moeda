"use strict";
const currency = [
    {
        name: 'Real Brasileiro',
        symbol: "R$",
        icon: "./assets/BR_icon.png",
        value: 1
    },
    {
        name: "Dólar Americano",
        symbol: "US$",
        icon: "./assets/EUA_icon.png",
        value: 4.9982887
    },
    {
        name: "Libra Esterlina",
        symbol: "£",
        icon: "./assets/GBP_icon.png",
        value: 6.2209076
    },
    {
        name: "Euro",
        symbol: "€",
        icon: "./assets/Euro_icon.png",
        value: 5.4084907
    },
    {
        name: "Bitcoin",
        symbol: "₿",
        icon: "./assets/BTC_icon.png",
        value: 134697.74
    }
];
const currencyTo = document.getElementsByClassName("convertTo")[0];
function showValue() {
    const value = parseFloat(document.getElementsByTagName("input")[0].value);
    const initialCurrencyValue = document.getElementById("initialCurrencyValue");
    if (value) {
        initialCurrencyValue.innerHTML = value.toFixed(2);
        convert();
    }
    else {
        initialCurrencyValue.innerHTML = "0.00";
    }
}
function showCurrency() {
    const finalCurrencyName = document.getElementById("finalCurrencyName");
    const finalCurrencyIcon = document.getElementById("finalCurrencyIcon");
    showValue();
    if (currencyTo.value === "US$ Dólar americano") {
        const index = currency.findIndex((currency) => currency.name === 'Dólar Americano');
        finalCurrencyName.innerHTML = currency[index].name;
        finalCurrencyIcon.src = currency[index].icon;
    }
    if (currencyTo.value === "€ Euro") {
        const index = currency.findIndex((currency) => currency.name === 'Euro');
        finalCurrencyName.innerHTML = currency[index].name;
        finalCurrencyIcon.src = currency[index].icon;
    }
    if (currencyTo.value === "£ Libra") {
        const index = currency.findIndex((currency) => currency.name === 'Libra Esterlina');
        finalCurrencyName.innerHTML = currency[index].name;
        finalCurrencyIcon.src = currency[index].icon;
    }
    if (currencyTo.value === "₿ Bitcoin") {
        const index = currency.findIndex((currency) => currency.name === 'Bitcoin');
        finalCurrencyName.innerHTML = currency[index].name;
        finalCurrencyIcon.src = currency[index].icon;
    }
    convert();
}
function convert() {
    const value = parseFloat(document.getElementsByTagName("input")[0].value);
    const finalCurrencyValue = document.getElementById("finalCurrencyValue");
    if (value) {
        if (currencyTo.value === "US$ Dólar americano") {
            const index = currency.findIndex((currency => currency.name === 'Dólar Americano'));
            const convertedValue = value / currency[index].value;
            finalCurrencyValue.innerHTML = convertedValue.toFixed(2);
        }
        if (currencyTo.value === "€ Euro") {
            const index = currency.findIndex((currency => currency.name === 'Euro'));
            const convertedValue = value / currency[index].value;
            finalCurrencyValue.innerHTML = convertedValue.toFixed(2);
        }
        if (currencyTo.value === "£ Libra") {
            const index = currency.findIndex((currency => currency.name === 'Libra Esterlina'));
            const convertedValue = value / currency[index].value;
            finalCurrencyValue.innerHTML = convertedValue.toFixed(2);
        }
        if (currencyTo.value === "₿ Bitcoin") {
            const index = currency.findIndex((currency => currency.name === 'Bitcoin'));
            const convertedValue = value / currency[index].value;
            finalCurrencyValue.innerHTML = convertedValue.toFixed(2);
        }
    }
    else {
        finalCurrencyValue.innerHTML = "0.00";
    }
}
//# sourceMappingURL=script.js.map