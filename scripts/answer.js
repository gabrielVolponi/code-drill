let timerInterval; // Variável para armazenar o intervalo
let elapsedTime = 0; // Tempo decorrido em segundos

document.getElementById("btnStart").addEventListener('click', function () {
    const btnStart = document.getElementById("btnStart");
    const btnStop = document.getElementById("btnStop");
    const timerDisplay = document.querySelector("p.flex"); // Seleciona o elemento do cronômetro

    // Adiciona classes para animação e alterna visibilidade
    btnStart.classList.add('hidden');
    btnStop.classList.remove('hidden');

    // Inicia o cronômetro
    timerInterval = setInterval(() => {
        elapsedTime++;
        timerDisplay.textContent = formatTime(elapsedTime);
    }, 1000);
});

document.getElementById("btnStop").addEventListener('click', function () {
    const btnStart = document.getElementById("btnStart");
    const btnStop = document.getElementById("btnStop");

    // Para o cronômetro
    clearInterval(timerInterval);

    // Alterna visibilidade dos botões
    btnStop.classList.add("hidden");
    btnStart.classList.remove("hidden");
});

// Função para formatar o tempo em HH:MM:SS
function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

// Recuperar a resposta do localStorage
const exerciseAnswer = localStorage.getItem('exerciseAnswer');

// Exibir a resposta no elemento com ID "quest"
if (exerciseAnswer) {
    // Substituir os asteriscos por tags <strong> para formatação
    const formattedAnswer = exerciseAnswer
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Substitui **texto** por <strong>texto</strong>
        .replace(/\n/g, '<br>'); // Substitui quebras de linha por <br>

    document.getElementById('quest').innerHTML = formattedAnswer;
} else {
    document.getElementById('quest').textContent = 'Nenhuma resposta encontrada.';
}

// document.getElementById("btnDone").addEventListener("click", function () {
//     const modal = document.getElementById("modal");
//     modal.classList.remove("hidden"); 
// });
const btnDone = document.getElementById("btnDone")
btnDone.addEventListener("click", function () {
    const checkAnswer = document.getElementById("checkAnswer");
    const bntHome = document.getElementById('btnHome');
    checkAnswer.classList.remove("hidden"); 
    checkAnswer.offsetHeigth;
    btnStart.classList.add('hidden');
    btnStop.classList.add('hidden');
    btnDone.classList.add('hidden');
    bntHome.classList.remove('hidden');
    clearInterval(timerInterval);

});


document.getElementById('closeModal').addEventListener('click', function (params) {
    const modal = document.getElementById("modal")
    modal.classList.add("hidden")
})



