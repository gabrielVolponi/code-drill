document.getElementById('searchIcon').addEventListener('click', function () {
    // Obtenha o valor do campo de entrada
    const userInput = document.getElementById('exerciseInput').value;

    // Exemplo: Enviar o valor para uma API
    console.log('User Input:', userInput);

    // Aqui você pode enviar o valor para a API
    fetch('https://sua-api.com/processar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: userInput }),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Resposta da API:', data);
        })
        .catch(error => {
            console.error('Erro ao enviar para a API:', error);
        });
});