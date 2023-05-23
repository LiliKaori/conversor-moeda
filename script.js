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
        symbol: "BTC",
        code: "BTC",
        icon: "./assets/BTC_icon.png",
        value: 134697.74
    }
];
const input = document.getElementsByTagName("input")[0];
const currencyTo = document.getElementsByClassName("convertTo")[0];
const currencyFrom = document.getElementsByClassName("convertFrom")[0];
function listSelect() {
    currencyFrom.innerHTML = "";
    currency.map((currency) => currencyFrom.innerHTML += `<option value="${currency.code}">${currency.code} ${currency.name}</option>`);
    currencyTo.innerHTML = "";
    currency.map((currency) => currencyTo.innerHTML += `<option value="${currency.code}">${currency.code} ${currency.name}</option>`);
    currencyTo.value = currency[1].code;
}
listSelect();
function showValue() {
    const inputValue = parseInt(input.value.replaceAll(/[\D]/gim, "")) / 100;
    const initialCurrencyValue = document.getElementById("initialCurrencyValue");
    const initialIndex = currency.findIndex((currency) => currency.code === currencyFrom.value);
    if (inputValue) {
        initialCurrencyValue.innerHTML = formatCurrency(initialIndex, inputValue);
    }
    else {
        initialCurrencyValue.innerHTML = formatCurrency(initialIndex, 0);
    }
    formatPlaceholder();
    convert();
}
function showInitialCurrency() {
    const initialCurrencyName = document.getElementById("initialCurrencyName");
    const initialCurrencyIcon = document.getElementById("initialCurrencyIcon");
    const initialIndex = currency.findIndex((currency) => currency.code === currencyFrom.value);
    showValue();
    initialCurrencyName.innerHTML = currency[initialIndex].name;
    initialCurrencyIcon.src = currency[initialIndex].icon;
    input.placeholder = `${currency[initialIndex].symbol} 0,00`;
    convert();
}
function showFinalCurrency() {
    const finalCurrencyName = document.getElementById("finalCurrencyName");
    const finalCurrencyIcon = document.getElementById("finalCurrencyIcon");
    showValue();
    const finalIndex = currency.findIndex((currency) => currency.code === currencyTo.value);
    finalCurrencyName.innerHTML = currency[finalIndex].name;
    finalCurrencyIcon.src = currency[finalIndex].icon;
    convert();
}
function convert() {
    const inputValue = parseInt(input.value.replaceAll(/[\D]/gim, "")) / 100;
    const finalCurrencyValue = document.getElementById("finalCurrencyValue");
    const finalIndex = currency.findIndex((currency => currency.code === currencyTo.value));
    const initialIndex = currency.findIndex((currency => currency.code === currencyFrom.value));
    if (inputValue) {
        const convertedValue = inputValue * (currency[initialIndex].value / currency[finalIndex].value);
        finalCurrencyValue.innerHTML = formatCurrency(finalIndex, convertedValue);
    }
    else {
        finalCurrencyValue.innerHTML = formatCurrency(finalIndex, 0);
    }
}
function formatPlaceholder() {
    const value = input.value.replaceAll(/[\D]/gim, "").replaceAll(/^[0]+/gim, "");
    const inputLength = value.length;
    const initialIndex = currency.findIndex((currency => currency.code === currencyFrom.value));
    if (inputLength === 1) {
        const formatedValue = value.replace(/(\d$)/, "0,0$1");
        input.value = `${currency[initialIndex].symbol} ${formatedValue}`;
    }
    if (inputLength > 1 && inputLength < 3) {
        const formatedValue = value.replace(/(\d{2}$)/, "0,$1");
        input.value = `${currency[initialIndex].symbol} ${formatedValue}`;
    }
    if (inputLength >= 3 && inputLength < 6) {
        const formatedValue = value.replace(/(\d{3})?(\d{2}$)/, "$1,$2");
        input.value = `${currency[initialIndex].symbol} ${formatedValue}`;
    }
    if (inputLength >= 6 && inputLength < 9) {
        const formatedValue = value.replace(/(\d{3})?(\d{3})(\d{2}$)/, "$1.$2,$3");
        input.value = `${currency[initialIndex].symbol} ${formatedValue}`;
    }
    if (inputLength >= 9 && inputLength < 12) {
        const formatedValue = value.replace(/(\d{3})?(\d{3})(\d{3})(\d{2}$)/, "$1.$2.$3,$4");
        input.value = `${currency[initialIndex].symbol} ${formatedValue}`;
    }
    if (inputLength >= 12 && inputLength < 15) {
        const formatedValue = value.replace(/(\d{3})?(\d{3})(\d{3})(\d{3})(\d{2}$)/, "$1.$2.$3.$4,$5");
        input.value = `${currency[initialIndex].symbol} ${formatedValue}`;
    }
    if (inputLength >= 15 && inputLength < 18) {
        const formatedValue = value.replace(/(\d{3})?(\d{3})(\d{3})(\d{3})(\d{3})(\d{2}$)/, "$1.$2.$3.$4.$5,$6");
        input.value = `${currency[initialIndex].symbol} ${formatedValue}`;
    }
    if (inputLength >= 18 && inputLength < 21) {
        const formatedValue = value.replace(/(\d{3})?(\d{3})(\d{3})(\d{3})(\d{3})(\d{3})(\d{2}$)/, "$1.$2.$3.$4.$5.$6,$7");
        input.value = `${currency[initialIndex].symbol} ${formatedValue}`;
    }
}
function formatCurrency(index, num) {
    return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: currency[index].code
    }).format(num);
}
//# sourceMappingURL=script.js.map