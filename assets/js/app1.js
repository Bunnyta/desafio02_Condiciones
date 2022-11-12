
const img = document.querySelector("#img1");
const boton = document.querySelector("#btnCambiar");
let estado = 0;


// const boton1 = imagen.style.border = "solid 20px yellow"
//const boton2 = imagen.style.border = "solid 0px"


img.addEventListener("click", () => {
    let border1 = document.querySelector("#img1");

    if (estado == 0) {
        border1.classList.remove("borderImg1", "borderImg2");
        border1.classList.add("borderImg2");
        estado = 1;
        return
    }
    border1.classList.remove("borderImg2", "borderImg1");
    border1.classList.add("borderImg1");
    estado = 0;
})



