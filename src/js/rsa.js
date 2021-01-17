const encryptedText = document.getElementById("encrypted-text");
const unencryptedText = document.getElementById('unencrypted-text');

const encrypt = new JSEncrypt();

function encryptMessage() {
    encrypt.setPublicKey(document.getElementById('rsa-pub-key').value);
    encryptedText.value = encrypt.encrypt(unencryptedText.value);
}

function decryptMessage() {
    encrypt.setPrivateKey(document.getElementById('rsa-private-key').value);
    document.getElementById("unencrypted-text").value = encrypt.decrypt(encryptedText.value); 
}


document.getElementById('button-encrypt').addEventListener('click', encryptMessage);
document.getElementById('button-decrypt').addEventListener('click', decryptMessage);