let sticker1 = document.querySelector("#sticker1");
let sticker2 = document.querySelector("#sticker2");
let sticker3 = document.querySelector("#sticker3")

let cantidad = document.querySelector("#cantidad")
let btnverify = document.querySelector("#btnVerify");
let respuesta = document.querySelector("#respuesta");



btnVerify.addEventListener("click", () => {
    cantidad.value = +sticker1.value + +sticker2.value + +sticker3.value;
    cantidad.innerHTML = `Llevas ${cantidad.value} stickers`
   
   if (cantidad.value === 0) {
        respuesta.innerHTML = "Debes ingresar una cantidad"
       return;       
    }
    if (cantidad.value >= 11) {
        respuesta.innerHTML = `<h4>¡Son demasiados!</h4><br><h5>Solo puedes llevar hasta 10 sticker!</h5>`
        return;
       
    } 
    if (cantidad.value <= 10) {
        respuesta.innerHTML = "¡PERFECTO! Llevas la cantidad permitida";
        return;
    }

})
