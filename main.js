const btnClear = document.querySelector("#clear")
const btnSave = document.querySelector("#save")
const display = document.querySelector(".display")
const name = document.querySelector("#name") 
const lastName = document.querySelector("#lastName")
const address = document.querySelector("#address")


btnClear.addEventListener('click',function(){
    name.value = '';
    lastName.value = '';
    address.value = '';
})


btnSave.addEventListener('click',function(){
    const name = document.querySelector("#name");
    const lastName = document.querySelector("#lastName");
    const address = document.querySelector("#address");
    display.innerHTML = `Imię: ${name.value}, <br> Nazwisko: ${lastName.value}, <br> Adres: ${address.value}`;

})
