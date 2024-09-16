 let proximoID = 1

 function addlinha(){
    //Variaveis da função
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    const admissão = document.getElementById("admissão").value;
    const demissão = document.getElementById("demissão").value;
 
    //Se for prenchido vazio
    if(nome === "" || idade === "" || admissão === "" ){
        alert("Todos os campos devem estar preenchidos");
    
}else{

    const table = document.getElementById("tabeladados").getElementsByTagName("tbody")[0];

    //Criando uma nova linha
    const novalinha = table.insertRow();

    //valores da linha
    const cellid = novalinha.insertCell(0);
    const cellnome = novalinha.insertCell(1);
    const cellidade = novalinha.insertCell(2);
    const celladmissão = novalinha.insertCell(3);
    const celldemissão = novalinha.insertCell(4);

    //inserindo valores
    cellid.innerHTML = proximoID;
    cellnome.innerHTML = nome;
    cellidade.innerHTML = idade;
    celladmissão.innerHTML = admissão;
    celldemissão.innerHTML = demissão;
    
    proximoID++

    //limpar formulario
    document.getElementById("form").reset();
}}
