var textoCrep = document.querySelector("#texto");
var textoDecr = document.querySelector("#container-descrip");

function criptografar(){
    var texto = textoCrep.value;

    var resultCripto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");

    document.getElementById('container-descrip').innerHTML = '<textarea readonly id="output-texto">' + resultCripto +
     '</textarea>' + '<button class="bnt-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function descriptografar(){
    var texto = textoCrep.value;

    var resultDescrip = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

    document.getElementById('container-descrip').innerHTML = '<textarea readonly id="output-texto">' + resultDescrip  +
     '</textarea>' + '<button class="bnt-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function copiar() {
    var textoCop = document.getElementById('output-texto');
  
    textoCop.select();
    document.execCommand('copy');
    alert("Texto copiado com sucesso!");
}