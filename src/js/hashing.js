const textToHash = document.getElementById("text-to-hash");
const hashingMethod = document.getElementById('hash-methods');
const hashedTextBox = document.getElementById('hashed-text');


const hashText = () => {
    switch (hashingMethod.value) {
        case 'SHA1':
            textToSHA1();
            break;
        case 'SHA224':
            textToSHA224();
            break;
        case 'SHA256':
            textToSHA256();
            break;
        case 'SHA512':
            textToSHA512();
            break;
        case 'MD5':
            textToMD5();
            break;
    }
};

const textToSHA1 = () => {
    hashedTextBox.value = CryptoJS.SHA1(textToHash.value).toString();
};

const textToSHA224 = () => {
    hashedTextBox.value = CryptoJS.SHA224(textToHash.value).toString();
};

const textToSHA256 = () => {
    hashedTextBox.value = CryptoJS.SHA256(textToHash.value).toString();
};

const textToSHA512 = () => {
    hashedTextBox.value = CryptoJS.SHA512(textToHash.value).toString();
};

const textToMD5 = () => {
    hashedTextBox.value = CryptoJS.MD5(textToHash.value).toString();
};


textToHash.addEventListener('input', hashText);
hashingMethod.addEventListener('input', hashText);