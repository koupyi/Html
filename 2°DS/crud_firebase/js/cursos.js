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
const db = firebase.database().ref("cursos");

// Carregar usuários
function carregarCursos() {
  db.on("value", (snapshot) => {
    const tbody = $("#tabelaCursos");
    tbody.empty();
    snapshot.forEach((child) => {
      const user = child.val();
      const key = child.key;
      tbody.append(`
        <tr>
          <td>${user.nome}</td>
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
$("#formCursos").submit(function (e) {
  e.preventDefault();

  const id = $("#id").val();
  const nome = $("#txtnome").val();

  if (id) {
    db.child(id).update({ nome });
  } else {
    db.push({ nome });
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
      const user = snapshot.val();
      $("#id").val(id);
      $("#txtnome").val(user.nome);
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
carregarCursos();
