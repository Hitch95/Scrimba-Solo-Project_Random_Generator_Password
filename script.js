const characters = {
    special: ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"],
    numbers: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    lowercase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    uppercase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
};

// Will display 2 choices of password for the users
const passwordOne = document.getElementById('password-one');
const passwordTwo = document.getElementById('password-two');

const btn = document.getElementById('button');

let length = parseInt(document.getElementById('characterAmountNumber').value);

btn.addEventListener("click", function () {
    passwordOne.textContent = "";
    passwordTwo.textContent = "";
    passwordOne.textContent = generateRandomPassword();
    passwordTwo.textContent = generateRandomPassword();
})

// function for matching input of type "number" with input of type "range"
function updateCharacterAmount() {
    let rangeValue = document.getElementById("characterAmountRange").value;
    document.getElementById("characterAmountNumber").value = rangeValue;
    length = parseInt(rangeValue);
}


function generateRandomPassword() {
    let password = "";
    let charSet = [];

    if (document.getElementById("includeSpecial").checked) charSet = charSet.concat(characters.special);
    if (document.getElementById("includeNumbers").checked) charSet = charSet.concat(characters.numbers);
    if (document.getElementById("includeLowercase").checked) charSet = charSet.concat(characters.lowercase);
    if (document.getElementById("includeUppercase").checked) charSet = charSet.concat(characters.uppercase);
    
    if (charSet.length === 0) return "Please select at least one type of characters";

    for (let i of Array(length).keys()) {
        let randomIndex = Math.floor(Math.random() * charSet.length);
        password += charSet[randomIndex];
    }
    return password;
}

