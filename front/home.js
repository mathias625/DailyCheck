const API = "http://localhost:3000/tarefas/listar";

const main = document.querySelector('main');

carregar();

function carregar() {
    fetch(API)
    .then(res => res.json())
    .then(data => {
        listar(data);
    })
    .catch(() => {
        main.innerHTML = `<p>Erro ao carregar tarefas</p>`;
    });
}

function listar(tarefas) {
    main.innerHTML = '';

    if (tarefas.length === 0) {
        main.innerHTML = `<p>Nenhuma tarefa cadastrada</p>`;
        return;
    }

    tarefas.forEach(t => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <h3>${t.nome}</h3>
            <img src="https://proeg.ufam.edu.br/images/IMAGEMPRAPROVA.jpg">
            <p>${t.descricao}</p>
            <small>${t.inicio} até ${t.fim}</small>
        `;

        main.appendChild(card);
    });
}