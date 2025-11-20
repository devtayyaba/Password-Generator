let passBox = document.querySelector("#pass-box");
let range = document.querySelector("#inputSlider");
let rangeVal = document.querySelector("#sliderVal");
let lowercase = document.querySelector("#lowercase");
let uppercase = document.querySelector("#uppercase");
let number = document.querySelector("#numbers");
let symbol = document.querySelector("#symbols");
let btn = document.querySelector("#btn");
let copyIcon = document.querySelector("#copyIcon");

rangeVal.textContent = range.value;
range.addEventListener("input", () => {
    rangeVal.textContent = range.value;
});


btn.addEventListener("click", () => {
    passBox.value = genPassword();
});

let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let numbers = "0123456789";
let symbols = "~!@#$%^&*";


const genPassword = () => {
    let genpass = "";
    let allChars = "";

    allChars += lowercase.checked ? lowerChars : "";
    allChars += uppercase.checked ? upperChars : "";
    allChars += number.checked ? numbers : "";
    allChars += symbol.checked ? symbols : "";

    // for optimization
    if (allChars == "" || allChars.length == 0) {
        return genpass;

    }

    // loop to iterate for each idx generated randomly
    for (let i = 0; i < range.value; i++) {

        genpass += allChars.charAt(Math.floor(Math.random() * allChars.length));
    }
    return genpass;
}

copyIcon.addEventListener("click", () => {
    if (passBox.value != "" || passBox.value.length >= 1)
        navigator.clipboard.writeText(passBox.value);
    copyIcon.innerText = "check";
    copyIcon.style.color = "green";
    copyIcon.title = "Password is copied";

    setInterval(() => {
        copyIcon.innerText = "content_copy";
        copyIcon.title = "";
        copyIcon.style.color = "black";
    }, 3000); //3000ms == 3s

});