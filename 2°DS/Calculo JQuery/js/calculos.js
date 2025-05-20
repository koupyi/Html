$("#calcular").click(function () {
    var nome = $("#txtnome").val();
    var idade = parseFloat($("#txtidade").val());
    var salario = parseFloat($("#txtsalario").val());
    var dependentes = parseFloat($("#txtdependentes").val());
    var bonus = 0
    var inss = (salario * 0.08)
    var valeTransporte = (salario * 0.05)

    //
    if (nome == "" || isNaN(idade) || isNaN(salario) || isNaN(dependentes)) {
        alert("Preencha todos os campos corretamente");
        return;
    } 

    //Equações
    if(idade > 50) {
        bonus = 300
    }else{
        bonus = 200
    }

    var salarioLiquido = salario - inss - valeTransporte + bonus + (dependentes * 50)

    $("#txtresultado").html(
        `<div class="alert alert-primary" role="alert">
            <strong>Resultados:</strong><br>
            Nome: ${nome}<br>
            Dependentes: ${dependentes}<br>
            Salário Bruto: R$ ${salario.toFixed(2)}<br>
            INSS: R$ ${inss.toFixed(2)}<br>
            Vale Transporte: R$ ${valeTransporte.toFixed(2)}<br>
            Salário Líquido: R$ ${salarioLiquido.toFixed(2)}
        </div>`
    );

});