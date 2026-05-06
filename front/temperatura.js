const key = "960296abdfd0d420c1b6bd2f5430d36e";

const inputBusca = document.getElementById('cidade');
const main = document.querySelector('main');

inputBusca.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const cidade = inputBusca.value.trim();
        if (cidade) buscarCidade(cidade);
    }
});

async function buscarCidade(cidade) {
    const dados = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`
    ).then(res => res.json());

    if (dados.cod !== 200) {
        main.innerHTML = `<p>Cidade não encontrada</p>`;
        return;
    }

    listar(dados);
}

function listar(dados) {
    main.innerHTML = '';

    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
        <h3>${dados.name}</h3>
        <img src="https://openweathermap.org/img/wn/${dados.weather[0].icon}@2x.png">
        <p>${Math.floor(dados.main.temp)}°C</p>
        <small>${dados.weather[0].description}</small>
        <p>Umidade: ${dados.main.humidity}%</p>
        <p>Vento: ${dados.wind.speed} km/h</p>
    `;

    main.appendChild(card);
}