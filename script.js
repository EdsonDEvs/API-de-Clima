document.querySelector('#weather-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita o comportamento padrão do formulário

    // Captura o nome da cidade digitada
    const city = document.querySelector('#city').value;

    // Chave da API OpenWeather fornecida
    const apiKey = '7cd1ac1cf0454514002ad3b0abb527c0';
    
    // URL da API, com o nome da cidade digitada
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`;

    // Faz a requisição para a API
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const resultDiv = document.querySelector('#weather-result');
            if (data.cod === 200) { // Se a cidade for encontrada
                resultDiv.innerHTML = `
                    <h3>${data.name}, ${data.sys.country}</h3>
                    <p>Temperatura: ${data.main.temp}°C</p>
                    <p>Clima: ${data.weather[0].description}</p>
                `;
            } else {
                resultDiv.innerHTML = `<p>Cidade não encontrada!</p>`;
            }
        })
        .catch(error => console.error('Erro:', error)); // Lida com erros
});
