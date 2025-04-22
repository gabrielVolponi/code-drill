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
    const body = document.body;
    const overlay2 = document.getElementById("overlay2")
    overlay2.classList.remove('hidden');
    const spinner = document.getElementById('spinner');
    spinner.classList.remove('hidden');


    // Obtenha o valor do campo de entrada
    const userInput = document.getElementById('exerciseInput').value;

    const prompt = `Crie um unico exercício de programação sobre o seguinte tema: "${userInput}". O exercício deve conter: 1) Um enunciado claro do problema, 2) 1 Exemplo de entrada e saída, e 3) Não forneça a solução. Se não for determinada uma linguagem de programação, escolha JavaScript. O exercício deve ser focado em ${userInput}, sem desvios para explicações. Limite sua reposta a 500 caracteres, sempre!`;

    // URL da API do Gemini
    const apiUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyAoRNt_ipLcYSHWRTGvNdtbKmcqCtx2aXE';

    // Corpo da requisição
    const requestBody = {
        contents: [{
            parts: [{ text: prompt }]
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
            body.classList.remove('blur-2xl');

            // Obter o texto da resposta da API
            const exerciseText = data.candidates[0].content.parts[0].text;

            // Salvar a resposta no localStorage
            localStorage.setItem('exerciseAnswer', exerciseText);

            // Redirecionar para a página answer.html
            window.location.href = 'answer.html';
        })
        .catch(error => {
            // Ocultar o spinner e remover o blur
            body.classList.remove('blur-sm');

            console.error('Erro ao enviar para a API Gemini:', error);
        });
}
