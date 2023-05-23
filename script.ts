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
const filteredCurrency : Icurrency[]= currency.filter((currency)=>currency.code!==currencyFrom.value)
filteredCurrency.map((currency)=>currencyTo.innerHTML+=`<option value="${currency.code}">${currency.code} ${currency.name}</option>`)

function showValue () : void {
    const value : number= parseInt(document.getElementsByTagName("input")[0].value.replaceAll(/[\.\,\e]/gim, "").replace(/^(.*\s)(?=[0-9])/gim, "").replaceAll(/^[0]+/gim, "")) /100
    const initialCurrencyValue = document.getElementById("initialCurrencyValue") as HTMLElement    
    const index = currency.findIndex((currency)=>currency.code===currencyFrom.value)
    if(value){
        initialCurrencyValue.innerHTML= new Intl.NumberFormat("pt-BR",{
            style: "currency",
            currency:currency[index].code
        }).format(value) as string
        
        convert()
    }else{
        initialCurrencyValue.innerHTML= new Intl.NumberFormat("pt-BR",{
            style: "currency",
            currency:currency[index].code
        }).format(0) as string
    }    
        
}

function showCurrency () : void {    
    const finalCurrencyName = document.getElementById("finalCurrencyName") as HTMLParagraphElement
    const finalCurrencyIcon = document.getElementById("finalCurrencyIcon") as HTMLImageElement    
    showValue()
    
        const index : number = currency.findIndex((currency)=>currency.code===currencyTo.value)        
        finalCurrencyName.innerHTML= currency[index].name as string
        finalCurrencyIcon.src=currency[index].icon as string
       
    convert()
}

function convert() : void {  
    const value : number = parseInt(document.getElementsByTagName("input")[0].value.replaceAll(/[\.\,\e]/gim, "").replace(/^(.*\s)(?=[0-9])/gim, "").replaceAll(/^[0]+/gim, "")) /100
    const finalCurrencyValue = document.getElementById("finalCurrencyValue") as HTMLElement
    
    if(value){
       
            const index : number= currency.findIndex((currency=>currency.code===currencyTo.value))
            const convertedValue : number= value/currency[index].value    
            finalCurrencyValue.innerHTML=new Intl.NumberFormat("pt-BR",{
                style: "currency",
                currency:currency[index].code
            }).format(convertedValue) as string
            
        
    }else{
        const index = currency.findIndex((currency)=>currency.code===currencyFrom.value)
        finalCurrencyValue.innerHTML= new Intl.NumberFormat("pt-BR",{
            style: "currency",
            currency:currency[index].code
        }).format(0) as string
    }
}

function formatNumber(){  
    const input = document.getElementsByTagName("input")[0]
    const value = input.value.replaceAll(/[\.\,\e]/gim, "").replace(/^(.*\s)(?=[0-9])/gim, "").replaceAll(/^[0]+/gim, ""); 
    const index : number= currency.findIndex((currency=>currency.code===currencyFrom.value))
    
    console.log(index)
    if(value.length===1){
        const formatedValue=value.replace(/(\d$)/,"0,0$1")
        console.log(formatedValue)
        input.value=`${currency[index].symbol} ${formatedValue}` 

    }
    if(value.length>1 && value.length<3){
        const formatedValue=value.replace(/(\d{2}$)/,"0,$1")
        console.log(formatedValue)
        input.value=`${currency[index].symbol} ${formatedValue}`

    }
    if(value.length>=3 && value.length<6){
        const formatedValue=value.replace(/(\d{3})?(\d{2}$)/,"$1,$2")        
        input.value=`${currency[index].symbol} ${formatedValue}`

    }
    if(value.length>=6 && value.length<9){
        const formatedValue=value.replace(/(\d{3})?(\d{3})(\d{2}$)/,"$1.$2,$3")        
        input.value=`${currency[index].symbol} ${formatedValue}`
    }
    if(value.length>=9 && value.length<12){
        const formatedValue=value.replace(/(\d{3})?(\d{3})(\d{3})(\d{2}$)/,"$1.$2.$3,$4")        
        input.value=`${currency[index].symbol} ${formatedValue}`

    }
    if(value.length>=12 && value.length<15){
        const formatedValue=value.replace(/(\d{3})?(\d{3})(\d{3})(\d{3})(\d{2}$)/,"$1.$2.$3.$4,$5")        
        input.value=`${currency[index].symbol} ${formatedValue}`

    }
    if(value.length>=15 && value.length<18){
        const formatedValue=value.replace(/(\d{3})?(\d{3})(\d{3})(\d{3})(\d{3})(\d{2}$)/,"$1.$2.$3.$4.$5,$6")        
        input.value=`${currency[index].symbol} ${formatedValue}`

    }
    if(value.length>=18 && value.length<21){
        const formatedValue=value.replace(/(\d{3})?(\d{3})(\d{3})(\d{3})(\d{3})(\d{2}$)/,"$1.$2.$3.$4.$5,$6")        
        input.value=`${currency[index].symbol} ${formatedValue}`

    }
    
}
