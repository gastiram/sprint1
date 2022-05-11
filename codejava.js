function encriptar(){
    var cFrase = document.getElementById("entrada").value;
    cFrase = cFrase.replace(new RegExp("e","g"),"enter");
    cFrase = cFrase.replace(new RegExp("i","g"),"imes");
    cFrase = cFrase.replace(new RegExp("a","g"),"ai");
    cFrase = cFrase.replace(new RegExp("o","g"),"ober");
    cFrase = cFrase.replace(new RegExp("u","g"),"ufat");
    document.getElementById("salida").value= cFrase;
    document.getElementById("inicio").style.display = "none";
    document.getElementById("resultado").style.display= "block";
}

function desencriptar(){
    var cFrase = document.getElementById("entrada").value;
    cFrase = cFrase.replace(/enter/g,"e");
    cFrase = cFrase.replace(/imes/g,"i");
    cFrase = cFrase.replace(/ai/g,"a");
    cFrase = cFrase.replace(/ober/g,"o");
    cFrase = cFrase.replace(/ufat/g,"u");
    document.getElementById("salida").value = cFrase;
}

function botonCopiar(){
    let salida = document.getElementById("salida");
    salida.select();
    salida.setSelectionRange(0,99999);
    document.execCommand("copy");
}
