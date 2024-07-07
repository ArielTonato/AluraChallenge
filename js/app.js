const textoEncript = document.querySelector("#textoEncrypt");
const btnEncriptar = document.querySelector("#encriptar");
const btnDesencriptar = document.querySelector("#desencriptar");

btnEncriptar.addEventListener("click", encriptar);
btnDesencriptar.addEventListener("click", desencriptar);

function encriptar(e) {
    const texto = textoEncript.value.toLowerCase();
    const textos = texto.split(" ");
    if (textos.length > 1) {
        let resultado = "";
        textos.forEach(texto => {
            resultado += encrypt(texto) + " ";
        });
        textoEncriptado(resultado);
        return;
    }
    let resultado = encrypt(texto);
    textoEncriptado(resultado);
}

function desencriptar(e) {
    const texto = textoEncript.value.toLowerCase();
    const textos = texto.split(" ");
    if (textos.length > 1) {
        let resultado = "";
        textos.forEach(texto => {
            resultado += desencrypt(texto) + " ";
        });
        textoEncriptado(resultado);
        return;
    }
    let resultado = desencrypt(texto);
    textoEncriptado(resultado);
}

function encrypt(texto) {
    const text = texto.split("");
    let resultado = "";
    text.forEach(letra => {
        switch (letra) {
            case "a":
                resultado += "ai";
                break;
            case "e":
                resultado += "enter";
                break;
            case "i":
                resultado += "imes";
                break;
            case "o":
                resultado += "ober";
                break;
            case "u":
                resultado += "ufat";
                break;
            default:
                resultado += letra;
                break;
        }
    });
    return resultado;
}

function desencrypt(texto) {
    const text = texto.split("");
    let resultado = "";
    for (let i = 0; i < text.length; i++) {
        if (text[i] === "a" && text[i + 1] === "i") {
            resultado += "a";
            i++;
        } else if (text[i] === "e" && text[i + 1] === "n" && text[i + 2] === "t" && text[i + 3] === "e" && text[i + 4] === "r") {
            resultado += "e";
            i += 4;
        } else if (text[i] === "i" && text[i + 1] === "m" && text[i + 2] === "e" && text[i + 3] === "s") {
            resultado += "i";
            i += 3;
        } else if (text[i] === "o" && text[i + 1] === "b" && text[i + 2] === "e" && text[i + 3] === "r") {
            resultado += "o";
            i += 3;
        } else if (text[i] === "u" && text[i + 1] === "f" && text[i + 2] === "a" && text[i + 3] === "t") {
            resultado += "u";
            i += 3;
        } else {
            resultado += text[i];
        }
    }
    return resultado;
}

function textoEncriptado(text) {
    const escribir = document.querySelector("#text-desencrypt");
    escribir.classList.add("texto-encriptado");
    escribir.innerHTML = text;
    const btnCopy = document.createElement("button");
    btnCopy.classList.add("btn-copy");
    btnCopy.innerHTML = "Copiar";

    btnCopy.addEventListener("click", function () {
        navigator.clipboard.writeText(text);
    });
    escribir.appendChild(btnCopy);
}

