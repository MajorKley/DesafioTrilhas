document.getElementById("inscricao-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let idade = document.getElementById("idade").value;

    if (nome === "" || email === "" || idade === "") {
        document.getElementById("mensagem").textContent = "Por favor, preencha todos os campos obrigatórios.";
        document.getElementById("mensagem").style.color = "red";
        return;
    }

    document.getElementById("mensagem").textContent = "Inscrição confirmada com sucesso!";
    document.getElementById("mensagem").style.color = "green";
});


