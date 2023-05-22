interface Icurrency {    
    name: string;
    code: string;
    symbol: string;
    icon: string;
    value:number
    
}

const currency: Icurrency[]= [
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
        code:"USD",
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
        code:"EUR",
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
]
    
const currencyTo= document.getElementsByClassName("convertTo")[0] as HTMLSelectElement
const currencyFrom= document.getElementsByClassName("convertFrom")[0] as HTMLSelectElement
const filteredCurrency : Icurrency[]= currency.filter((currency)=>`${currency.code} ${currency.name}`!==currencyFrom.value)
filteredCurrency.map((currency)=>currencyTo.innerHTML+=`<option>${currency.code} ${currency.name}</option>`)

function showValue () : void {
    const value : number= parseFloat(document.getElementsByTagName("input")[0].value)
    const initialCurrencyValue = document.getElementById("initialCurrencyValue") as HTMLElement    
    if(value){
        initialCurrencyValue.innerHTML= value.toFixed(2) as string
        convert()
    }else{
        initialCurrencyValue.innerHTML= "0.00" as string
    }    
        
}

function showCurrency () : void {    
    const finalCurrencyName = document.getElementById("finalCurrencyName") as HTMLParagraphElement
    const finalCurrencyIcon = document.getElementById("finalCurrencyIcon") as HTMLImageElement    
    showValue()
    
        const index : number = currency.findIndex((currency)=>`${currency.code} ${currency.name}`===currencyTo.value)        
        finalCurrencyName.innerHTML= currency[index].name as string
        finalCurrencyIcon.src=currency[index].icon as string
       
    convert()
}

function convert() : void {  
    const value : number = parseFloat(document.getElementsByTagName("input")[0].value)  
    const finalCurrencyValue = document.getElementById("finalCurrencyValue") as HTMLElement
    
    if(value){
       
            const index : number= currency.findIndex((currency=>`${currency.code} ${currency.name}`===currencyTo.value))
            const convertedValue : number= value/currency[index].value    
            finalCurrencyValue.innerHTML=convertedValue.toFixed(2) as string
        
    }else{
        finalCurrencyValue.innerHTML= "0.00" as string
    }
}

