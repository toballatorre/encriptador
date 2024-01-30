function encriptar(texto) {
    var texto = texto.toLowerCase();

    // Recorer cada letra
    var textoencriptado = '';

    const keys = {
        'a': 'ai',
        'e': 'enter',
        'i': 'imes',
        'o': 'ober',
        'u': 'ufat'
    };

    for (const letra of texto) {
        
        // Si tiene la letra
        if (Object.hasOwn(keys, letra)) {
            textoencriptado += keys[letra];
        } else {
            textoencriptado += letra;
        }
    }
    return textoencriptado;
}

function desencriptar(texto) {
    const keys = {
        'a': 'ai',
        'e': 'enter',
        'i': 'imes',
        'o': 'ober',
        'u': 'ufat'
    };

    for (const letter in keys) {
        if (Object.hasOwnProperty.call(keys, letter)) {
            const word = keys[letter];
            texto = texto.replaceAll(word, letter);
        }
    }

    return texto;
}

function copiarEncriptado() {
    var textoencriptadonode = document.getElementById("texto-encriptado");
  
    textoencriptadonode.select();
    textoencriptadonode.setSelectionRange(0, 99999); // para dispositivos móbiles
  
    navigator.clipboard.writeText(textoencriptadonode.value);
  
    alert("Copied the text: " + textoencriptadonode.value);
  }
