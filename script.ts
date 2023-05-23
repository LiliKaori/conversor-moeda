interface Icurrency {
    name: string;
    code: string;
    symbol: string;
    icon: string;
    value: number

}

const currency: Icurrency[] = [
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
]

const input = document.getElementsByTagName("input")[0] as HTMLInputElement
const currencyTo = document.getElementsByClassName("convertTo")[0] as HTMLSelectElement
const currencyFrom = document.getElementsByClassName("convertFrom")[0] as HTMLSelectElement

function listSelect (): void{
    currencyFrom.innerHTML=""
    currency.map((currency)=>currencyFrom.innerHTML+=`<option value="${currency.code}">${currency.code} ${currency.name}</option>`)
    currencyTo.innerHTML=""
    currency.map((currency) => currencyTo.innerHTML += `<option value="${currency.code}">${currency.code} ${currency.name}</option>`)
    currencyTo.value = currency[1].code
}
listSelect()

function showValue(): void {
    const inputValue = parseInt(input.value.replaceAll(/[\D]/gim, "")) / 100 as number
    const initialCurrencyValue = document.getElementById("initialCurrencyValue") as HTMLElement
    const initialIndex = currency.findIndex((currency) => currency.code === currencyFrom.value) as number

    if (inputValue) {
        initialCurrencyValue.innerHTML = formatCurrency(initialIndex, inputValue) as string
        
    } else {
        initialCurrencyValue.innerHTML = formatCurrency(initialIndex, 0) as string
    }
    formatPlaceholder()
    convert()

}

function showInitialCurrency(): void {
    const initialCurrencyName = document.getElementById("initialCurrencyName") as HTMLParagraphElement
    const initialCurrencyIcon = document.getElementById("initialCurrencyIcon") as HTMLImageElement
    const initialIndex = currency.findIndex((currency) => currency.code === currencyFrom.value) as number

    showValue()

    initialCurrencyName.innerHTML = currency[initialIndex].name as string
    initialCurrencyIcon.src = currency[initialIndex].icon as string
    input.placeholder= `${currency[initialIndex].symbol} 0,00` as string

    convert()    
}

function showFinalCurrency(): void {
    const finalCurrencyName = document.getElementById("finalCurrencyName") as HTMLParagraphElement
    const finalCurrencyIcon = document.getElementById("finalCurrencyIcon") as HTMLImageElement
    showValue()

    const finalIndex = currency.findIndex((currency) => currency.code === currencyTo.value) as number
    finalCurrencyName.innerHTML = currency[finalIndex].name as string
    finalCurrencyIcon.src = currency[finalIndex].icon as string

    convert()    
}

function convert(): void {
    const inputValue = parseInt(input.value.replaceAll(/[\D]/gim, "")) / 100 as number
    const finalCurrencyValue = document.getElementById("finalCurrencyValue") as HTMLElement
    const finalIndex = currency.findIndex((currency => currency.code === currencyTo.value)) as number
    const initialIndex = currency.findIndex((currency => currency.code === currencyFrom.value)) as number

    if (inputValue) {
        const convertedValue = inputValue * (currency[initialIndex].value / currency[finalIndex].value) as number
        finalCurrencyValue.innerHTML = formatCurrency(finalIndex, convertedValue) as string

    } else {
        finalCurrencyValue.innerHTML = formatCurrency(finalIndex, 0) as string
    }
}

function formatPlaceholder() :void {    
    const value = input.value.replaceAll(/[\D]/gim, "").replaceAll(/^[0]+/gim, "") as string
    const inputLength= value.length as number
    const initialIndex = currency.findIndex((currency => currency.code === currencyFrom.value)) as number
    
    if (inputLength === 1) {
        const formatedValue = value.replace(/(\d$)/, "0,0$1") as string
        input.value = `${currency[initialIndex].symbol} ${formatedValue}` as string

    }
    if (inputLength > 1 && inputLength < 3) {
        const formatedValue = value.replace(/(\d{2}$)/, "0,$1")as string
        input.value = `${currency[initialIndex].symbol} ${formatedValue}` as string

    }
    if (inputLength >= 3 && inputLength < 6) {
        const formatedValue = value.replace(/(\d{3})?(\d{2}$)/, "$1,$2") as string
        input.value = `${currency[initialIndex].symbol} ${formatedValue}` as string

    }
    if (inputLength >= 6 && inputLength < 9) {
        const formatedValue = value.replace(/(\d{3})?(\d{3})(\d{2}$)/, "$1.$2,$3") as string
        input.value = `${currency[initialIndex].symbol} ${formatedValue}` as string
    }
    if (inputLength >= 9 && inputLength < 12) {
        const formatedValue = value.replace(/(\d{3})?(\d{3})(\d{3})(\d{2}$)/, "$1.$2.$3,$4") as string
        input.value = `${currency[initialIndex].symbol} ${formatedValue}` as string

    }
    if (inputLength >= 12 && inputLength < 15) {
        const formatedValue = value.replace(/(\d{3})?(\d{3})(\d{3})(\d{3})(\d{2}$)/, "$1.$2.$3.$4,$5") as string
        input.value = `${currency[initialIndex].symbol} ${formatedValue}` as string

    }
    if (inputLength >= 15 && inputLength < 18) {
        const formatedValue = value.replace(/(\d{3})?(\d{3})(\d{3})(\d{3})(\d{3})(\d{2}$)/, "$1.$2.$3.$4.$5,$6") as string
        input.value = `${currency[initialIndex].symbol} ${formatedValue}` as string

    }
    if (inputLength >= 18 && inputLength < 21) {
        const formatedValue = value.replace(/(\d{3})?(\d{3})(\d{3})(\d{3})(\d{3})(\d{3})(\d{2}$)/, "$1.$2.$3.$4.$5.$6,$7") as string
        input.value = `${currency[initialIndex].symbol} ${formatedValue}` as string

    }   

}

function formatCurrency(index :number, num:number):string{
    return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: currency[index].code
    }).format(num)
    
}



