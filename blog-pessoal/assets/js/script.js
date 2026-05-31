document.addEventListener("DOMContentLoaded", () => {

// --- Lógica do Modo Escuro ---
    const btnTema = document.getElementById("btn-tema");
    const raizHtml = document.documentElement; // <-- Mudança aqui! Agora focamos no <html>

// 1. Checa se o usuário já tinha escolhido o modo escuro na última visita
    if (localStorage.getItem("tema") === "escuro") {
        raizHtml.classList.add("dark-mode");
        btnTema.textContent = "🌙 Modo Escuro"; // <-- Agora mostra onde você está
    } else {
        btnTema.textContent = "☀️ Modo Claro"; // <-- Adicionamos isso para o modo claro inicial
    }

    // 2. Quando clicar no botão, inverte o modo
    btnTema.addEventListener("click", () => {
        raizHtml.classList.toggle("dark-mode");

        // 3. Atualiza o texto do botão e salva a preferência no navegador
        if (raizHtml.classList.contains("dark-mode")) {
            localStorage.setItem("tema", "escuro");
            btnTema.textContent = "🌙 Modo Escuro"; // <-- Invertido
        } else {
            localStorage.setItem("tema", "claro");
            btnTema.textContent = "☀️ Modo Claro"; // <-- Invertido
        }
    });


    const feixesDeLuz = document.getElementById("feixes-de-luz");
    const totalEstrelas = 200; // Número total de estrelas

    for (let i = 0; i < totalEstrelas; i++) {
        const estrela = document.createElement("div");
        estrela.classList.add("luz");

        // Posicionamento aleatório
        estrela.style.top = Math.random() * 100 + "%";
        estrela.style.left = Math.random() * 100 + "%";

        // Delay aleatório para a animação
        estrela.style.animationDelay = Math.random() * 10 + "s";

        feixesDeLuz.appendChild(estrela);
    }
});