const passwordField = document.getElementById('secret-key');
const textToEncrypt = document.getElementById("text-to-encrypt");
const textToDecrypt = document.getElementById("text-to-decrypt");

const encryptAES = () => {
    textToDecrypt.value = CryptoJS.AES.encrypt(textToEncrypt.value, passwordField.value).toString();
};

const descryptAES = () => {
    textToEncrypt.value = CryptoJS.AES.decrypt(textToDecrypt.value, passwordField.value).toString(CryptoJS.enc.Utf8);
};

textToEncrypt.addEventListener('input', encryptAES);
textToDecrypt.addEventListener('input', descryptAES);