
const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
    const inputValues = document.querySelector(".input-values").value
    const currencyConverted = document.querySelector("#value-to-be-converted") //valor real
    const currencyValue = document.querySelector("#converted-value") //outras moedas

    console.log(currencySelect.value)

    const dolarToday = 5.2
    const euroToday = 6.2
    const libraToday = 1.2

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

    currencyConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputValues)

}

function changeCurrency() {
    const currencyName = document.querySelector("#currency-name")
    const currencyImagem = document.querySelector(".currency-img")

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
    
    convertValues()
}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)