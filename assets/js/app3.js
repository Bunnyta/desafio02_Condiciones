let one = document.querySelector("#select1")
let two = document.querySelector("#select2")
let three = document.querySelector("#select3")
let btnVerify = document.querySelector("#verify")
let respuesta = document.querySelector(".respuesta")



btnVerify.addEventListener("click", () => {

    if (one.value == 9 && two.value == 1 && three.value == 1) {
        respuesta.innerHTML = "Password 1 es correcto";
        return;
    }
    if (one.value == 7 && two.value == 1 && three.value == 4) {
        respuesta.textContent = "Password 2 es correcto";
        return;
    }
    respuesta.textContent = "Password incorrecto";

})