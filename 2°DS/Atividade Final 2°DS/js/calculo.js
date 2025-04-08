$("#submit").click(function () {
    var numero1 = $("#numero1").val();
    var numero2 = $("#numero2").val();
    var numero3 = $("#numero3").val();

    if (numero1.length === 0 || numero2.length === 0 || numero3.length === 0) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    var numeros = [Number(numero1), Number(numero2), Number(numero3)];

    var ordemCrescente = numeros.sort((a, b) => a - b);

    var somaMedia = 0;
    for (let i = 0; i < numeros.length; i++) {
        somaMedia += numeros[i];
    }
    var media = somaMedia / numeros.length;

    var somaLoops = numeros.reduce((acc, curr) => acc + curr, 0); 

    $("#oc")
        .html(`<p>Os números organizados em ordem crescente são: ${ordemCrescente}</p>`)
        .css({ "font-weight": "bold", "font-size": "20pt", "color": "#000000" });

    $("#media")
        .html(`<p>A média dos números é: ${media}</p>`)
        .css({ "font-weight": "bold", "font-size": "20pt", "color": "#000000" });

    $("#loops")
        .html(`<p>A soma acumulada dos loops é: ${somaLoops}</p>`)
        .css({ "font-weight": "bold", "font-size": "20pt", "color": "#000000" });
});
