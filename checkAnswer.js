function handleCorrection() {

    // Obtenha o valor do campo de entrada
    const userAnswer = document.getElementById('userAnswer').value

    const questText = document.getElementById('quest').textContent

    const promptCorrection = `Dada a seguinte questão: "${questText}", avalie a solução fornecida pelo usuário: "${userAnswer}".
Primeiro, diga claramente se a resposta está correta ou incorreta.
Se estiver incorreta, aponte de forma breve os principais erros, sem revelar a solução completa.
Limite toda a resposta a no máximo 600 caracteres.`;

    // console.log(promptCorrection);

    // URL da API do Gemini
    const apiUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyAoRNt_ipLcYSHWRTGvNdtbKmcqCtx2aXE';

    // Corpo da requisição
    const requestBody = {
        contents: [{
            parts: [{ text: promptCorrection }]
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

            // Obter o texto da resposta da API
            const correctionText = data.candidates[0].content.parts[0].text;

            if (correctionText) {
                // Substituir os asteriscos por tags <strong> para formatação
                const formattedAnswer = correctionText
                    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Substitui **texto** por <strong>texto</strong>
                    .replace(/\n/g, '<br>'); // Substitui quebras de linha por <br>
            
                const correction = document.getElementById('correction');
                correction.classList.remove('hidden');
                correction.innerHTML = formattedAnswer;
            } else {
                document.getElementById('quest').textContent = 'Nenhuma resposta encontrada.';
            }

        })
        .catch(error => {

            console.error('Erro ao enviar para a API Gemini:', error);
        });
}
document.getElementById('submitAnswer').addEventListener('click', (event) => {
    event.preventDefault(); 
    handleCorrection();
});
document.getElementById('userAnswer').addEventListener('keydown', function(event) {
    if (event.key === 'Enter' && !event.shiftKey) { 
        event.preventDefault(); 
        handleCorrection(); 
    }
});