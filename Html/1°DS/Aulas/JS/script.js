let proximoid = 0

function Submit(){
    const a = document.getElementById("a").value;
    const b = document.getElementById("b").value;
    const c = document.getElementById("c").value;
    const x = document.getElementById("x").value;

if(x == 1){
    const delta = b*b - 4*a*c
    const res = (-b + delta)/(2*a)
}
if(x == 2){
    const delta = b*b - 4*a*c
    const res = (-b - delta)/(2*a)
}


    document.getElementById("form").reset();
    const tabela = document.getElementById("tabela");
    const novalinha = tabela.insertRow();

    const celid = novalinha.insertCell(0);
    const cela = novalinha.insertCell(1);
    const celb = novalinha.insertCell(2);
    const celc = novalinha.insertCell(3);
    const celResultado = novalinha.insertCell(4);

    celid.innerHTML = x
    cela.innerHTML = a
    celb.innerHTML = b
    celc.innerHTML = c
    celresultado.innerHTML = Resultado
}