async function login() {

    const email =
        document.getElementById("email").value;

    const senha =
        document.getElementById("senha").value;

    try {

        const resposta =
            await fetch("http://localhost:3000/professores");

        const professores =
            await resposta.json();

        const professor =
            professores.find(p =>
                p.email === email &&
                p.senha === senha
            );

        if (professor) {

            localStorage.setItem(
                "professor",
                JSON.stringify(professor)
            );

            window.location.href =
                "professor.html";
        }
        else {

            alert("Login inválido");
        }

    } catch (erro) {

        console.error(erro);

        alert("Erro ao conectar com o servidor");
    }
}