window.onload = () => {
    document.getElementById('encriptar').addEventListener('click', clickencriptar);
    document.getElementById('desencriptar').addEventListener('click', clickdesencriptar);
    document.getElementById('copiar').addEventListener('click', copiarEncriptado);
};

function clickencriptar() {
    document.getElementById('placeholder').classList.add('hide');
    document.getElementById('contenido-encriptado').classList.remove('hide');
    
    var texto = document.getElementById('texto-original').value;
    texto = encriptar(texto);

    document.getElementById('texto-encriptado').value = texto;
}

function clickdesencriptar() {
    document.getElementById('placeholder').classList.add('hide');
    document.getElementById('contenido-encriptado').classList.remove('hide');
    
    var texto = document.getElementById('texto-original').value;
    texto = desencriptar(texto);

    document.getElementById('texto-encriptado').value = texto;
}