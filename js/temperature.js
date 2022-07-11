var elForm = document.querySelector(".form__group")
var elInput = document.querySelector(".form__input")
var elSelect = document.querySelector(".form__select")
var elConvert = document.querySelector(".convert")

var fahr = (9/5 + 32)
var kelv = (273.15)

elForm.addEventListener("input", function(evt){
    evt.preventDefault()
    
    var inputValue = elInput.value.trim()
    
    switch (elSelect.value) {
        case "FRH":
        elConvert.value = (inputValue * fahr).toFixed(1);
        break;
        
        case "KEL":
        elConvert.value = (inputValue - kelv).toFixed(1);
        break;

    }
})