("#calcular").click(function () {
    var resultado = document.getElementById((v1 + v2) / 100)
    //msg
    if (v1 > v2 ) {
        msg = "valor 1 é maior";
    }else if (v1 < v2) {
        msg = "v1 é menor";
    } else {
        msg = "Valores iguais"
    }
    alert(msg);

    //ternário
    msg = v1 > v2 ? "valor 1 é maior" : "valor 1 não é maior"; 
    
    //swirch
    switch(parseInt(res) % 2){
        case 0:
            msg += "Resultado é impar";
            break;
    }

    $("")

    //fatorial
    var fatorial =1;
    for(var x = 1; x <= v1; x++) {
        fatorial *= x;
    }
    $("#fatorial")
    .text("fatoria: " + fatorial)
    .css({"font-wight": "bold", "font-size": "20pt", color: #FFFFFF;})

});