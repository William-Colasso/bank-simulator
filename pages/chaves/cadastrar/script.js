function typeInput(caller){
    if(caller.id === 'cnpj'){
        $("#cpf").attr("style", "display: flex");
        $("#celular").attr("style", "display: none");
        $("#email").attr("style", "display: none");
        $("#randomkey").attr("style", "display: none");
    }
    else if(caller.id === 'cel'){
        $("#cpf").attr("style", "display: none");
        $("#celular").attr("style", "display: flex");
        $("#email").attr("style", "display: none");
        $("#randomkey").attr("style", "display: none");
    }
    else if(caller.id === 'em'){
        $("#cpf").attr("style", "display: none");
        $("#celular").attr("style", "display: none");
        $("#email").attr("style", "display: flex");
        $("#randomkey").attr("style", "display: none");
    }
    else if(caller.id === 'random'){
        $("#cpf").attr("style", "display: none");
        $("#celular").attr("style", "display: none");
        $("#email").attr("style", "display: none");
        $("#randomkey").attr("style", "display: flex");
    }
}