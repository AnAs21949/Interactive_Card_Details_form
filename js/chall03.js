/*Error declaration */
const cardError = document.querySelector(".e-card");
const dateError = document.querySelector(".e-date");
const cvcError = document.querySelector(".e-cvc");
// Inputs

const numberInput = document.getElementById("card-input");
const monthInput = document.getElementById("month-input");
const yearInput = document.getElementById("year-input");
const cvcInput = document.getElementById("cvc-input");
const nameInput = document.getElementById("input-name");
// button

const confirmBtn = document.querySelector(".confirm");

//display
cartOwner = document.getElementById("name");
cartNumber = document.getElementById("dcn");
mmDisplay = document.getElementById("m-display");
yyDisplay = document.getElementById("y-display");
cvcDisplay = document.getElementById("cvc-display");

//
const valid = document.querySelector(".validated");
valid.style.display = `none`
const reloadBtn = document.querySelector(".continue");
const form = document.getElementById("form");

////////////////////////////////////////////////////////

confirmBtn.addEventListener("click", function(e){
    e.preventDefault()
})

//Error function
function addError(input){
    input.classList.add("error-border");
    input.classList.remove("confirmed-border");
    input.nextElementSibling.classList.add("show");
}

// validation function
function addConfirmed(input){
    input.classList.remove("error-border");
    input.classList.add("confirmed-border");
}



let checkNameConditions = false
nameInput.addEventListener("input", function(){
    if(/^[a-zA-Zá-žÁ-Ž\s]*$/.test(nameInput.value) == false){
        addError(nameInput),
        nameInput.nextElementSibling.textContent = `Wrong format`,
        checkNameConditions = false

    }else if(nameInput.value === ""){
        addError(nameInput),
        nameInput.nextElementSibling.textContent = `Can't be blank`,
        checkNameConditions = false

    }else{
        addConfirmed(nameInput),
        nameInput.nextElementSibling.classList.remove("show"),
        checkNameConditions = true

    }
    cartOwner.textContent = nameInput.value
})

console.log(checkNameConditions)


let checkNumberConditions = false
numberInput.addEventListener("input", function(){
    let numberDisplay = numberInput.value.substr(0,4)+ " " + numberInput.value.substr(4,4) + " " + numberInput.value.substr(8,4) + " " + numberInput.value.substr(12,4) + " ";

    if(/^[\d\s]*$/.test(numberInput.value) == false){
        addError(numberInput)
        numberInput.nextElementSibling.classList.add("show")
        numberInput.nextElementSibling.textContent = 'Wrong format, Numbers only'
        checkNumberConditions = false;
    }else if(numberInput.value === ""){
        addError(numberInput)
        numberInput.nextElementSibling.classList.add("show")
        numberInput.nextElementSibling.textContent = "Can't be blank"
        checkNumberConditions = false;
    }else{
        addConfirmed(numberInput);
        numberInput.nextElementSibling.classList.remove("show")
        checkNumberConditions = true;
    }
    cartNumber.textContent = numberDisplay
})





let checkCvcConditions = false;
cvcInput.addEventListener("input", function(){
    if(cvcInput.value === "" ){
        cvcInput.classList.add("error-border");
        cvcInput.classList.remove("confirmed-border");
        cvcError.classList.add("show");
        cvcError.textContent = "Can't be blank"
        checkCvcConditions = false;

    }else if(!/[0-9]{3}/.test(cvcInput.value)){

        cvcInput.classList.add("error-border");
        cvcInput.classList.remove("confirmed-border");
        cvcError.classList.add("show");
        cvcError.textContent = "wrong format"
        checkCvcConditions = false;
    }else{
        addConfirmed(cvcInput);
        cvcError.classList.remove("show");
        checkCvcConditions = true;
    }
    cvcDisplay.textContent = cvcInput.value
})





let checkMonthConditions = false;
monthInput.addEventListener("input", function(){
    if(monthInput.value === ""){
        monthInput.classList.add("error-border");
        monthInput.classList.remove("confirmed-border");
        dateError.classList.add("show");
        dateError.textContent = "Can't be blank"
        checkMonthConditions = false;

    }else if( !/[0-9{2}]/.test(monthInput.value) || monthInput.value > 12){

        monthInput.classList.add("error-border");
        monthInput.classList.remove("confirmed-border");
        dateError.classList.add("show");
        dateError.textContent = "Wrong Format"
        checkMonthConditions = false;
    }else{
        addConfirmed(monthInput);
        dateError.classList.remove("show");
        checkMonthConditions = true;
    }
    mmDisplay.textContent = monthInput.value
})

let currentYear = new Date().toString().split(" ")[3].slice(2);


let checkYearConditions = false;
yearInput.addEventListener("input", function(){
    if(yearInput.value === ""){
        yearInput.classList.add("error-border");
        yearInput.classList.remove("confirmed-border");
        dateError.classList.add("show");
        dateError.textContent = "Can't be blank";
        checkYearConditions = false;
    }else if(!/[0-9{2}]/.test(yearInput.value) || yearInput.value < Number(currentYear)){
        yearInput.classList.add("error-border");
        yearInput.classList.remove("confirmed-border");
        dateError.classList.add("show");
        dateError.textContent = "Wrong Format";
        checkYearConditions = false;
    }else{
        addConfirmed(yearInput);
        dateError.classList.remove("show");
        checkYearConditions = true;
    }
    yyDisplay.textContent = yearInput.value
})

// const valid = document.querySelector(".validated");
// valid.style.display = `none`
// const reloadBtn = document.querySelector(".continue");
// const form = document.getElementById("form");



confirmBtn.addEventListener("click", function(e){
    e.preventDefault()
    if(checkYearConditions && checkMonthConditions && checkCvcConditions && checkNumberConditions && checkNameConditions){
        form.classList.add("hide");
        valid.classList.add("show");
    }else{
        form.classList.remove("hide");
        valid.classList.remove("show");
    }
})


reloadBtn.addEventListener("click", function(){
    window.location.reload()
})




console.log(Number(new Date().toString().split(" ")[3].slice(2)))

