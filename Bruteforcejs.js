function bruteforce() {
    const cipherText = document.getElementById('cipherText').value;
    const moduloValue = parseInt(document.getElementById('moduloValue').value);
    const outputArea = document.getElementById('possibleTexts');
    let possiblePlainTexts = '';

    for (let shift = 0; shift < moduloValue; shift++) {
        let decryptedText = '';
        for (let i = 0; i < cipherText.length; i++) {
            let charCode = cipherText.charCodeAt(i);

            // Decrypting character by character
            if (charCode >= 65 && charCode <= 90) {
                decryptedText += String.fromCharCode(((charCode - 65 - shift + 26) % 26) + 65);
            } else if (charCode >= 97 && charCode <= 122) {
                decryptedText += String.fromCharCode(((charCode - 97 - shift + 26) % 26) + 97);
            } else if (charCode >= 48 && charCode <= 57) {
                decryptedText += String.fromCharCode(((charCode - 48 - shift + 10) % 10) + 48);
            } else {
                decryptedText += cipherText[i];
            }
        }
        possiblePlainTexts += `Shift ${shift}: ${decryptedText}\n`;
    }

    outputArea.value = possiblePlainTexts;
}

function goBack() {
    alert('Back button clicked!');
}
