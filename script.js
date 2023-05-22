"use strict";
const currency = [
    {
        name: 'Real Brasileiro',
        code: "BRL",
        symbol: "R$",
        icon: "./assets/BRL_icon.png",
        value: 1
    },
    {
        name: "Dólar Americano",
        symbol: "US$",
        code: "USD",
        icon: "./assets/USD_icon.png",
        value: 4.9982887
    },
    {
        name: "Libra Esterlina",
        symbol: "£",
        code: "GBP",
        icon: "./assets/GBP_icon.png",
        value: 6.2209076
    },
    {
        name: "Euro",
        symbol: "€",
        code: "EUR",
        icon: "./assets/EUR_icon.png",
        value: 5.4084907
    },
    {
        name: "Bitcoin",
        symbol: "₿",
        code: "BTC",
        icon: "./assets/BTC_icon.png",
        value: 134697.74
    }
];
const currencyTo = document.getElementsByClassName("convertTo")[0];
const currencyFrom = document.getElementsByClassName("convertFrom")[0];
const filteredCurrency = currency.filter((currency) => `${currency.code} ${currency.name}` !== currencyFrom.value);
filteredCurrency.map((currency) => currencyTo.innerHTML += `<option>${currency.code} ${currency.name}</option>`);
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
    const index = currency.findIndex((currency) => `${currency.code} ${currency.name}` === currencyTo.value);
    finalCurrencyName.innerHTML = currency[index].name;
    finalCurrencyIcon.src = currency[index].icon;
    convert();
}
function convert() {
    const value = parseFloat(document.getElementsByTagName("input")[0].value);
    const finalCurrencyValue = document.getElementById("finalCurrencyValue");
    if (value) {
        const index = currency.findIndex((currency => `${currency.code} ${currency.name}` === currencyTo.value));
        const convertedValue = value / currency[index].value;
        finalCurrencyValue.innerHTML = convertedValue.toFixed(2);
    }
    else {
        finalCurrencyValue.innerHTML = "0.00";
    }
}
//# sourceMappingURL=script.js.map