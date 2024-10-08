let proximoid = 0

function Submit(){
    const a = document.getElementById("a").value;
    const b = document.getElementById("b").value;
    const c = document.getElementById("c").value;
    const x = document.getElementById("x").value;

    const delta = (b*b) - (4*a*c);

if(delta <= 0){
    alert("Não foi possivel fazer o calculo")
    document.getElementById("form").reset();
}else{

if(x == 1){
    var res = (-b + Math.sqrt(delta))/(2*a);
}
if(x == 2){
    var res = (-b - Math.sqrt(delta))/(2*a);
}

    document.getElementById("form").reset();
    const tabela = document.getElementById("tabela");
    const novalinha = tabela.insertRow();

    const celx = novalinha.insertCell(0);
    const cela = novalinha.insertCell(1);
    const celb = novalinha.insertCell(2);
    const celc = novalinha.insertCell(3);
    const celres = novalinha.insertCell(4);

    celx.innerHTML = x
    cela.innerHTML = a
    celb.innerHTML = b
    celc.innerHTML = c
    celres.innerHTML = res
}}