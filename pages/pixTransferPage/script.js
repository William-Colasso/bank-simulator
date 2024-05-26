/*function cpf(){
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
}*/
function typeInput(caller){
    if(caller.id === 'cnpj'){
        $("#cpf").attr("style", "display: block");
        $("#celular").attr("style", "display: none");
        $("#email").attr("style", "display: none");
        $("#randomkey").attr("style", "display: none");
    }
    else if(caller.id === 'cel'){
        $("#cpf").attr("style", "display: none");
        $("#celular").attr("style", "display: block");
        $("#email").attr("style", "display: none");
        $("#randomkey").attr("style", "display: none");
    }
    else if(caller.id === 'em'){
        $("#cpf").attr("style", "display: none");
        $("#celular").attr("style", "display: none");
        $("#email").attr("style", "display: block");
        $("#randomkey").attr("style", "display: none");
    }
    else if(caller.id === 'random'){
        $("#cpf").attr("style", "display: none");
        $("#celular").attr("style", "display: none");
        $("#email").attr("style", "display: none");
        $("#randomkey").attr("style", "display: block");
    }
}