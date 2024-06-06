const copyArea = document.getElementById("copyArea");
const text = document.querySelector(".copy-text");
var canIPaste = true

async function paste() {
    if (canIPaste) {
        canIPaste = false
        const copiedText = await navigator.clipboard.readText()
        text.innerHTML = copiedText;
    }
}

copyArea.addEventListener("click", paste);
