
function generatePassword() {
    let length = document.getElementById('length').value;
    let useUppercase = document.getElementById('uppercase').checked;
    let useLowercase = document.getElementById('lowercase').checked;
    let useDigits = document.getElementById('digits').checked;
    let useSpecial = document.getElementById('special').checked;

    let charset = "";
    if (useUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (useLowercase) charset += "abcdefghijklmnopqrstuvwxyz";
    if (useDigits) charset += "0123456789";
    if (useSpecial) charset += "!@#$%^&*()_+";
    
    let password = "";
    for (let i = 0; i < length; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    document.getElementById('password').value = password;
}
