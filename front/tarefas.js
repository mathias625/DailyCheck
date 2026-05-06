const API = "http://localhost:3000/tarefas";

function salvar() {
    const data = {
        nome: document.getElementById("nome").value,
        inicio: document.getElementById("inicio").value,
        fim: document.getElementById("fim").value,
        descricao: document.getElementById("descricao").value
    };

    fetch(`${API}/cadastrar`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
    .then(() => listar());
}

function listar() {
    fetch(`${API}/listar`)
    .then(res => res.json())
    .then(data => {
        const lista = document.getElementById("lista");
        lista.innerHTML = "";

        data.forEach(t => {
            lista.innerHTML += `
            <div class="card">
                <h3>${t.nome}</h3>
                <p>${t.descricao}</p>
                <button onclick="deletar(${t.id})">Excluir</button>
            </div>
            `;
        });
    });
}

function deletar(id) {
    fetch(`${API}/excluir/${id}`, {
        method: "DELETE"
    })
    .then(() => listar());
}

listar();