const turmaId =
    localStorage.getItem("turmaId");

listarAtividades();

async function listarAtividades() {

    const resposta =
        await fetch(
            "http://localhost:3000/atividades"
        );

    const atividades =
        await resposta.json();

    const lista =
        document.getElementById(
            "listaAtividades"
        );

    lista.innerHTML = "";

    atividades
        .filter(a =>
            a.turmaId == turmaId
        )
        .forEach(a => {

            lista.innerHTML += `
                <div class="card">
                    ${a.descricao}
                </div>
            `;
        });
}

async function cadastrarAtividade() {

    const descricao =
        document.getElementById(
            "descricao"
        ).value;

    await fetch(
        "http://localhost:3000/atividades",
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                descricao,
                turmaId: Number(turmaId)
            })
        }
    );

    document.getElementById(
        "descricao"
    ).value = "";

    listarAtividades();
}

function voltar() {

    window.location.href =
        "professor.html";
}

function logout() {

    localStorage.clear();

    window.location.href =
        "index.html";
}