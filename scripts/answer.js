document.getElementById("btnStart").addEventListener('click', function () {
    const btnStart = document.getElementById("btnStart");
    const btnStop = document.getElementById("btnStop");

    // Adiciona classes para animação e alterna visibilidade
    btnStart.classList.add('hidden');
    btnStop.classList.remove('hidden');
    
});

document.getElementById("btnStop").addEventListener('click', function (params) {
    const btnStart = document.getElementById("btnStart");
    const btnStop = document.getElementById("btnStop");

    btnStop.classList.add("hidden")
    btnStart.classList.remove("hidden")
})


