var encrypt = new JSEncrypt();
function encryptMessage() {
    encrypt.setPublicKey(document.getElementById('rsa-pub-key').value);
    document.getElementById("encrypted-text").value = encrypt.encrypt(document.getElementById('text').value);
}

function decryptMessage() {
    encrypt.setPrivateKey(document.getElementById('rsa-private-key').value);
    document.getElementById("text").value = encrypt.decrypt(document.getElementById('encrypted-text').value); 
}

document.getElementById('button-encrypt').addEventListener('click', encryptMessage);
document.getElementById('button-decrypt').addEventListener('click', decryptMessage);