let num1 = document.querySelector('#num1');
let num2 = document.querySelector('#num2');
let num3 = document.querySelector('#num3');
let num4 = document.querySelector('#num4');
let date1 = document.querySelector('#date1');
let date2 = document.querySelector('#date2');
let code = document.querySelector('#code');
let cp = document.querySelector('#cp');


num1.addEventListener("change",event => {
    if (num1.value.length == 4){
        num1.classList.remove("is-invalid");
        num1.classList.add("is-valid");
    }
    else{
        num1.classList.remove("is-valid");
        num1.classList.add("is-invalid");
    }
});

num2.addEventListener("change",event => {
    if (num2.value.length == 4){
        num2.classList.remove("is-invalid");
        num2.classList.add("is-valid");
    }
    else{
        num2.classList.remove("is-valid");
        num2.classList.add("is-invalid");
    }
});

num3.addEventListener("change",event => {
    if (num3.value.length == 4){
        num3.classList.remove("is-invalid");
        num3.classList.add("is-valid");
    }
    else{
        num3.classList.remove("is-valid");
        num3.classList.add("is-invalid");
    }
});

num4.addEventListener("change",event => {
    if (num4.value.length == 4){
        num4.classList.remove("is-invalid");
        num4.classList.add("is-valid");
    }
    else{
        num4.classList.remove("is-valid");
        num4.classList.add("is-invalid");
    }
});

date1.addEventListener("change",event => {
    if (date1.value.length == 2){
        date1.classList.remove("is-invalid");
        date1.classList.add("is-valid");
    }
    else{
        date1.classList.remove("is-valid");
        date1.classList.add("is-invalid");
    }
});

date2.addEventListener("change",event => {
    if (date2.value.length == 2){
        date2.classList.remove("is-invalid");
        date2.classList.add("is-valid");
    }
    else{
        date2.classList.remove("is-valid");
        date2.classList.add("is-invalid");
    }
});

code.addEventListener("change",event => {
    if (code.value.length == 3){
        code.classList.remove("is-invalid");
        code.classList.add("is-valid");
    }
    else{
        code.classList.remove("is-valid");
        code.classList.add("is-invalid");
    }
});

cp.addEventListener("change",event => {
    console.log(cp.value.length);

    if (cp.value.length == 6){
        console.log(cp);
        cp.classList.remove("is-invalid");
        cp.classList.add("is-valid");
    }
    else{
        cp.classList.remove("is-valid");
        cp.classList.add("is-invalid");
    }
});


fetch('https://apisgratis.com/api/codigospostales/v2/colonias/cp/?valor=51714')
.then(resp => resp.json())
.then(data => {
    console.log(data);  
})
.catch(error => {
    console.log(error);
});