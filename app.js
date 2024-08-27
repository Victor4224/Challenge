


function encriptarTexto() {

    let textoInicial = (document.getElementById('textoUsuario').value);

    if (!textoInicial){
        
        return;
    }
    validacion = verificarMinusculaAcento(textoInicial);

    if (validacion == true){
        
        document.querySelector(".correccion").style.display = "block";
        var cajaTexto_advertencia = document.querySelector(".advertencia-2");
        cajaTexto_advertencia.style.display = "none";

        textoEncriptado= encriptacion(textoInicial);
        
        var parrafo = document.querySelector(".parrafo");
        parrafo.innerHTML = textoEncriptado;

        document.querySelector(".presentacion-tres").remove();

        var cajaTexto = document.querySelector(".parrafo");
        cajaTexto.style.display = "block";

    }
    else{   
        document.querySelector(".correccion").style.display = "none";
        var mensaje = document.querySelector(".advertencia-2");
        mensaje.innerHTML = "El mensaje no se puede encriptar. posee mayusculas o acento";
        var cajaTexto_advertencia = document.querySelector(".advertencia-2");
        cajaTexto_advertencia.style.display = "block";
    }
    return;
}

function descencriptarTexto(){
    
    let textoInicial = (document.getElementById('textoUsuario').value);
    
    if (!textoInicial){
        
        return;
    }
    validacion = verificarMinusculaAcento(textoInicial);
    
    if (validacion == true){

        document.querySelector(".correccion").style.display = "block";
        var cajaTexto_advertencia = document.querySelector(".advertencia-2");
        cajaTexto_advertencia.style.display = "none";

        
        textoDesencriptado= desencriptacion(textoInicial);
        var parrafo = document.querySelector(".parrafo");
        parrafo.innerHTML = textoDesencriptado;

        const bloque = document.querySelector(".presentacion-tres");
        
        if (bloque){
            parrafo.innerHTML = textoDesencriptado;
            var cajaTexto = document.querySelector(".parrafo");
            cajaTexto.style.display = "block";
            document.querySelector(".presentacion-tres").remove();
        }
        

    }
    else{
        document.querySelector(".correccion").style.display = "none";
        var mensaje = document.querySelector(".advertencia-2");
        mensaje.innerHTML = "El mensaje no se puede desencriptar, posee mayusculas o acento";
        var cajaTexto_advertencia = document.querySelector(".advertencia-2");
        cajaTexto_advertencia.style.display = "block";
    }
    return;

}
function verificarMinusculaAcento(a){
    let regex = /^[a-z\s]+$/;
    return regex.test(a);
    
}

function encriptacion(b){
    let textoEncriptado = b
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    return textoEncriptado;
}

function desencriptacion(c) {
    let textoDesencriptado = c
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    return textoDesencriptado;
}

function copiarTexto(){
    var parrafo = document.querySelector(".parrafo");
    let copiar = parrafo;
    copiar.select();
    document.execCommand("copy"); 
}