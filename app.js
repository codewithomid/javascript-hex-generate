const hex = document.querySelector(".hex");
const btn = document.querySelector(".generate");
const span = document.querySelector(".span");
const copy = document.querySelector(".copy");

const generateColor = () => {
    const randomColor = Math.random().toString(16).substring(2, 8);
    document.body.style.backgroundColor = "#" + randomColor;
    btn.style.backgroundColor = "#" + randomColor;
    hex.innerHTML = "#" + randomColor;

    copy.style.backgroundColor = "#357aea";
    copy.innerHTML = "Copy";
};

btn.addEventListener("click", generateColor);

generateColor();

function copyForClipboard() {
    const copyText = document.querySelector(".hex").innerHTML;
    navigator.clipboard.writeText(copyText);
    copy.style.backgroundColor = "#76C893";
    copy.innerHTML = "Copied";
}
