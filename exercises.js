document.getElementById('searchIcon').addEventListener('click', function () {
    handleRequest();
});

document.getElementById('exerciseInput').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        handleRequest();
    }
});

function handleRequest() {
    // Mostrar o spinner e aplicar blur no corpo
    const loadingSpinner = document.getElementById('loadingSpinner');
    const body = document.body;
    loadingSpinner.classList.remove('hidden');
    body.classList.add('blur-sm');

    // Obtenha o valor do campo de entrada
    const userInput = document.getElementById('exerciseInput').value;

    const prompt = `Crie um unico exercício de programação sobre o seguinte tema: "${userInput}". O exercício deve conter: 1) Um enunciado claro do problema, 2) Exemplos de entrada e saída, e 3) Não forneça a solução. Se não for determinada uma linguagem de programação, escolha JavaScript. O exercício deve ser focado em ${userInput}, sem desvios para explicações gerais.`;

    // URL da API do Gemini
    const apiUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyAoRNt_ipLcYSHWRTGvNdtbKmcqCtx2aXE';

    // Corpo da requisição
    const requestBody = {
        contents: [{
            parts: [{ text: userInput }]
        }]
    };

    // Enviar o valor para a API do Gemini
    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro na API: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            // Ocultar o spinner e remover o blur
            loadingSpinner.classList.add('hidden');
            body.classList.remove('blur-sm');

            // Exibir a resposta da API no console
            console.log('Resposta da API Gemini:', data);
            console.log(data.candidates[0].content.parts[0].text);
        })
        .catch(error => {
            // Ocultar o spinner e remover o blur
            loadingSpinner.classList.add('hidden');
            body.classList.remove('blur-sm');

            console.error('Erro ao enviar para a API Gemini:', error);
        });
}
