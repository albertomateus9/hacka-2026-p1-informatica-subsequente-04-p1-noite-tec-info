document.addEventListener("DOMContentLoaded", function() {
    const btnInteresse = document.getElementById("btn-interesse");
    const mensagemAlerta = document.getElementById("mensagem-alerta");

    if (btnInteresse) {
        btnInteresse.addEventListener("click", function() {
            // Remove a classe hidden para mostrar a mensagem de sucesso
            mensagemAlerta.classList.remove("hidden");
            
            // Muda o texto do botão
            btnInteresse.innerText = "Interesse Registrado!";
            btnInteresse.disabled = true;
            btnInteresse.style.backgroundColor = "#6c757d";
            btnInteresse.style.cursor = "default";
        });
    }
});