 let proximoID = 1

 function finalizar(){
    //Variaveis da função
    const id = document.getElementById("ID").value;
    const produto = document.getElementById("produto").value;
    const marca = document.getElementById("marca").value;
    const segmento = document.getElementById("segmento").value;
    const valor = document.getElementById("valor").value;
    const data = document.getElementById("data").value;
 
    //Se for prenchido vazio
    if(id === "" || produto === "" || marca === "" || segmento == "" || valor == "" || data == ""){
        alert("Todos os campos devem estar preenchidos");
    
}else{

    const table = document.getElementById("tabeladados").getElementsByTagName("tbody")[0];

    //Criando uma nova linha
    const finalizar = table.insertRow();

    //valores da linha
    const cellid = finalizar.insertCell(0);
    const cellproduto = finalizar.insertCell(1);
    const cellmarca = finalizar.insertCell(2);
    const cellsegmento = finalizar.insertCell(3);
    const cellvalor = finalizar.insertCell(4);
    const celldata = finalizar.insertCell(5);

    //inserindo valores
    cellid.innerHTML = id;
    cellproduto.innerHTML = produto;
    cellmarca.innerHTML =  marca;
    cellsegmento.innerHTML = segmento;
    cellvalor.innerHTML = valor;
    celldata.innerHTML = data;
    
    proximoID++

    //limpar formulario
    document.getElementById("form").reset();
}}