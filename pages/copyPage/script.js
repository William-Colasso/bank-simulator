const copyArea = document.querySelector(".copy-area");
const text = document.querySelector(".copy-text");
const loading = document.querySelector(".loading");

async function paste() {
    const copiedText = await navigator.clipboard.readText()
    text.innerHTML = copiedText;
} 

copyArea.addEventListener("mousedown", (event) => {
    paste();
});




