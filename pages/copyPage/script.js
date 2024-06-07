const copyArea = document.querySelector(".copy-area");
const text = document.querySelector(".copy-text");
const loading = document.querySelector(".loading");
var clicking = true;
var ola = 2 + 2;

async function paste() {
    const copiedText = await navigator.clipboard.readText()
    text.innerHTML = copiedText;
} 

copyArea.addEventListener("mousedown", (event) => {
    clicking = true
    console.log("Mousedown");
    while (clicking) {
        copyArea.addEventListener("mouseup", (event) => {
            clicking = false
            console.log("Mouseup");
        });
    }
});




