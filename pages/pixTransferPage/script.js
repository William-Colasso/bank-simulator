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
/*
function mascara(i){
    var v = i.value;

    if(isNaN(v[v.length-1])){
        i.value = v.substring(0, v.length-1);
        return;
     }
     
    if(v.length <= 14){
        i.setAttribute("maxlength", "18");
        v = v.replace(".", "");
        v = v.replace(".", "");
        v = v.replace("/", "");
        v = v.replace("-", "");
        if (v.length == 3){
            p1 = v.substring(0, 3);
            i.value = p1 + ".";
        }
        if (v.length == 7){
            p1 = v.substring(0, 7);
            i.value = p1 + ".";
        }
        if (v.length == 11){
            p1 = v.substring(0, 11);
            i.value = p1 + "-";
        } 
    }
    else if(v.length < 17){
        v = v.replace(".", "");
        v = v.replace(".", "");
        v = v.replace(".", "");
        v = v.replace("-", "");

        p1 = v.substring(0, 2);
        p2 = v.substring(2, 5);
        p3 = v.substring(5, 8);
        p4 = v.substring(8, 12);

        i.value = p1 + "." + p2 + "." + p3 + "/" + p4 + "-";

        console.log(v);
    }
}
*/

var options = {
    onKeyPress: function (cpf, ev, el, op) {
        var masks = ['000.000.000-000', '00.000.000/0000-00'];
        $('.cpfOuCnpj').mask((cpf.length > 14) ? masks[1] : masks[0], op);
    }
}

$('.cpfOuCnpj').length > 11 ? $('.cpfOuCnpj').mask('00.000.000/0000-00', options) : $('.cpfOuCnpj').mask('000.000.000-00#', options);