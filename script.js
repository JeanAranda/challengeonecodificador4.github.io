const inputMensaje = document.querySelector("#mensaje");
const inputResultado = document.querySelector("#resultado");

const btnEncriptar =document.querySelector("#encriptar");
const btnDesencriptar = document.querySelector("#desencriptar");
const btnCopiar = document.querySelector("#copiar");
const btnEscuchar = document.querySelector("#escuchar");

const contenedorErrores = document.querySelector(".contenedor-errores");
const tarjeta1 = document.querySelector(".num1");
const tarjeta2 = document.querySelector(".num2");

function validarMensaje() {
    //Para borrar errores previos
    let erroresPrevios = contenedorErrores.querySelectorAll(".error");
    for (let err of erroresPrevios) {
        console.log(err);
        contenedorErrores.removeChild(err)
    }
    var mensaje = inputMensaje.value;
    let letrasValidas = "abcdefghijklmnñopqrstuvwxyz ";
    let mensajeError = document.createDocumentFragment();
    for (let letra of mensaje){
        if (!letrasValidas.includes(letra)){
            let p = document.createElement("p");
            p.setAttribute("class", "error");
            p.textContent = `La letra ${letra} mayuscula no es valida`
            mensajeError.appendChild(p); 
        }
    }
    contenedorErrores.appendChild(mensajeError);
    if (mensajeError.children.length === 0){
        return true;
    }
    return false;
}

function encriptar(){
    if (!validarMensaje()) return;
    var mensaje = inputMensaje.value;
    var mensajeEncriptado = mensaje.replaceAll("e","enter")
    .replaceAll("i","imes")
    .replaceAll("o","ober")
    .replaceAll("a", "ai")
    .replaceAll("u","ufat");
    
    inputResultado.value = mensajeEncriptado;
}

function desencriptar(){
    var mensajeEncriptado = inputMensaje.value;
    var mensaje = mensajeEncriptado.replaceAll("enter","e")
    .replaceAll("imes","i")
    .replaceAll("ober","o")
    .replaceAll("ai", "a")
    .replaceAll("ufat","u");

    inputResultado.value = mensaje;
}

function copiar(){
    var mensajeEncriptado = inputResultado.value;
    navigator.clipboard.writeText(mensajeEncriptado);
    inputMensaje.value = "";
    inputMensaje.focus();
}



btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;
btnCopiar.onclick = copiar;
