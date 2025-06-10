// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD9y7NMj_fo7HC-bzsveIFgicAhSH-vdQY",
  authDomain: "crud-e41be.firebaseapp.com",
  databaseURL: "https://crud-e41be-default-rtdb.firebaseio.com",
  projectId: "crud-e41be",
  storageBucket: "crud-e41be.firebasestorage.app",
  messagingSenderId: "552645825396",
  appId: "1:552645825396:web:47df6e09d7b07e61fc1221",
  measurementId: "G-MMNWYS83D6"
};

// Inicializa Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database().ref("Alunos");

// Carregar usuários
function carregarAlunos() {
  db.on("value", (snapshot) => {
    const tbody = $("#tabelaAlunos");
    tbody.empty();
    snapshot.forEach((child) => {
      const aluno = child.val();
      const key = child.key;
      tbody.append(`
        <tr>
          <td>${aluno.nome}</td>
          <td>${aluno.email}</td>
          <td>${aluno.telefone}</td>
          <td>
            <button class="btn btn-warning btn-sm edit-btn" data-id="${key}">Editar</button>
            <button class="btn btn-danger btn-sm delete-btn" data-id="${key}">Excluir</button>
          </td>
        </tr>
      `);
    });
  });
}

// Salvar usuário (create/update)
$("#formAlunos").submit(function (e) {
  e.preventDefault();

  const id = $("#id").val();
  const nome = $("#txtnome").val();
  const email = $("#txtemail").val();
  const telefone = $("#txttelefone").val();

  if (id) {
    db.child(id).update({ nome, email, telefone });
  } else {
    db.push({ nome, email, telefone });
  }

  this.reset();
  $("#id").val("");
});

// Editar
$(document).on("click", ".edit-btn", function () {
  const id = $(this).data("id");
  db.child(id)
    .get()
    .then((snapshot) => {
      const aluno = snapshot.val();
      $("#id").val(id);
      $("#txtnome").val(aluno.nome);
      $("#txtemail").val(aluno.email);
      $("#txttelefone").val(aluno.telefone);
    });
});

// Excluir
$(document).on("click", ".delete-btn", function () {
  const id = $(this).data("id");
  if (confirm("Tem certeza que deseja excluir?")) {
    db.child(id).remove();
  }
});

// Inicializar
carregarAlunos();
