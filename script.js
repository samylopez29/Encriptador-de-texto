var botonEncriptar = document.querySelector(".btnEncriptar");
var botonDesencriptar = document.querySelector(".btnDesencriptar");
var munieco = document.querySelector(".muneco");
var contenedor = document.querySelector(".contenedor-parrafo");
var resultado = document.querySelector(".mensaje");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar(){
    ocultarAdelante();
    var cajatexto = recuperarTexto()
    resultado.textContent = encriptarTexto(cajatexto);
}

function desencriptar(){
    ocultarAdelante();
    var cajatexto = recuperarTexto()
    resultado.textContent = desencriptarTexto(cajatexto);
}

function recuperarTexto(){
    var cajatexto = document.querySelector(".campo-texto")
    return cajatexto.value
}

function ocultarAdelante(){
    munieco.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}



const campo_texto = document.querySelector("#texto-encriptado")
const campo_mensaje = document.querySelector("#campo-mensaje")

const matriz_code = [
    ["e", "enter"], 
    ["i", "imes"], 
    ["a", "ai"], 
    ["o", "ober"], 
    ["u", "ufat"], 
];
function btnEncriptar() {
    const texto = encriptar(campo_texto.value);
    campo_mensaje.value = texto;
}   


function encriptarTexto(fraseEncriptada){
    for (let i = 0; i < matriz_code.length; i++){
        if(fraseEncriptada.includes(matriz_code[i][0])){
            fraseEncriptada = fraseEncriptada.replaceAll(
                matriz_code[i][0],
                matriz_code[i][1]
            );
        }
    }
    return fraseEncriptada;
}

function btnDesencriptar() {
    const texto = desencriptar(campo_texto.value);
    campo_mensaje.value = texto;
}

function desencriptarTexto(fraseEncriptada){
    for (let i = 0; i < matriz_code.length; i++){
        if(fraseEncriptada.includes(matriz_code[i][1])){
            fraseEncriptada = fraseEncriptada.replaceAll(
                matriz_code[i][1],
                matriz_code[i][0]
            );
        }
    }
    return fraseEncriptada;
}

const btnCopiar = document.querySelector(".btn-copiar"); 
    btnCopiar.addEventListener("click", copiar = () => {
    var contenido = document.querySelector(".mensaje").textContent;
    navigator.clipboard.writeText(contenido);
    console.log("hola"); 
});
