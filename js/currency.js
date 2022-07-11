var elForm = document.querySelector(".form__group")
var elInput = document.querySelector(".form__input")
var elSelect = document.querySelector(".form__select")
var elConvert = document.querySelector(".convert")

var usd = 10912.30;
var eur = 11138.18;
var rub = 172.46;


elForm.addEventListener("input", function(evt){
    evt.preventDefault()
    
    
    var inputValue = elInput.value.trim()
    
    switch (elSelect.value) {
        case "USD":
        elConvert.value = (inputValue * usd).toFixed(2);
        break;
        
        case "EUR":
        elConvert.value = (inputValue * eur).toFixed(2);
        break;
        
        case "RUB":
        elConvert.value = (inputValue * rub).toFixed(2);
        break;
    }
})