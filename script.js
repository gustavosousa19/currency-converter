
const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const selectCurrencyToConvert = document.querySelector(".select-currency-to-convert")

async function convertValues() {
    const inputValues = document.querySelector(".input-values").value
    const currencyConverted = document.querySelector("#Converte-currency") //valor a converter 
    const currencyValue = document.querySelector("#currency-converted") //valor convertido

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,GBP-BRL").then(response => response.json())
    
    const dolarToday = data.USDBRL.high
    const euroToday = data.EURBRL.high
    const libraToday = data.GBPBRL.high

//MOEDAS CONVERTIDAS
    if (currencySelect.value == "dolar") {
        currencyValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValues / dolarToday)
    }

    if (currencySelect.value == "euro") {
        currencyValue.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValues / euroToday)
    }

    if (currencySelect.value == "libra") {
        currencyValue.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputValues / libraToday)
    }

    if (currencySelect.value == "real") {
        currencyValue.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValues / realToday)
    }

//MOEDAS A CONVERTER
    if (selectCurrencyToConvert.value == "real1"){
        currencyConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValues)
    }

    if (selectCurrencyToConvert.value == "dolar1"){
        currencyConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValues)
    }

    if (selectCurrencyToConvert.value == "euro1"){
        currencyConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValues)
    }

    if (selectCurrencyToConvert.value == "libra1"){
        currencyConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputValues)
    }
}

function changeCurrency() {
    const currencyName = document.querySelector("#currency-name")
    const currencyImagem = document.querySelector(".currency-img")

//convertido
    if(currencySelect.value == "dolar"){
        currencyName.innerHTML = "Dólar americano"
        currencyImagem.src = "./assets/estados-unidos (1) 1.png"
    }

    if(currencySelect.value == "euro"){
        currencyName.innerHTML = "Euro"
        currencyImagem.src = "./assets/euro.png"
    }
    
    if(currencySelect.value == "libra"){
        currencyName.innerHTML = "Libra"
        currencyImagem.src = "./assets/libra 1.png"
    }

    if (currencySelect.value == "real"){
        currencyName.innerHTML = "Real"
        currencyImagem.src = "./assets/brasil 2.png"
    }
    convertValues()
}
//A CONVERTER
function changeCureencySelect(){
const nameCurrency = document.querySelector("#name-currency")
const imgCurrency = document.querySelector(".img-currency")

    if(selectCurrencyToConvert.value == "dolar1"){
        nameCurrency.innerHTML = "Dólar americano"
        imgCurrency.src = "./assets/estados-unidos (1) 1.png"
    }

    if(selectCurrencyToConvert.value == "euro1"){
        nameCurrency.innerHTML = "Euro"
        imgCurrency.src = "./assets/euro.png"
    }
    
    if(selectCurrencyToConvert.value == "libra1"){
        nameCurrency.innerHTML = "Libra"
        imgCurrency.src = "./assets/libra 1.png"
    }

    if (selectCurrencyToConvert.value == "real1"){
        nameCurrency.innerHTML = "Real"
        imgCurrency.src = "./assets/brasil 2.png"
    }
}

selectCurrencyToConvert.addEventListener("change", changeCureencySelect)
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)