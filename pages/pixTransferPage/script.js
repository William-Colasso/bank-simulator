function cpf(){
    document.getElementById("cpf").style.opacity="100%";
    document.getElementById("celular").style.opacity="0%";
    document.getElementById("email").style.opacity="0%";
    document.getElementById("randomkey").style.opacity="0%";
}

function celular(){
    document.getElementById("cpf").style.opacity="0%";
    document.getElementById("celular").style.opacity="100%";
    document.getElementById("email").style.opacity="0%";
    document.getElementById("randomkey").style.opacity="0%";
}

function email(){
    document.getElementById("cpf").style.opacity="0%";
    document.getElementById("celular").style.opacity="0%";
    document.getElementById("email").style.opacity="100%";
    document.getElementById("randomkey").style.opacity="0%";
}

function randomkey(){
    document.getElementById("cpf").style.opacity="0%";
    document.getElementById("celular").style.opacity="0%";
    document.getElementById("email").style.opacity="0%";
    document.getElementById("randomkey").style.opacity="100%";
}