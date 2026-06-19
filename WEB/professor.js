const professor =
    JSON.parse(
        localStorage.getItem("professor")
    );

if (!professor) {

    window.location.href =
        "index.html";
}

listarTurmas();

async function listarTurmas() {

    const resposta =
        await fetch(
            "http://localhost:3000/turmas"
        );

    const turmas =
        await resposta.json();

    const lista =
        document.getElementById(
            "listaTurmas"
        );

    lista.innerHTML = "";

    turmas
        .filter(t =>
            t.professorId === professor.id
        )
        .forEach(turma => {

            lista.innerHTML += `
                <tr>

                    <td>${turma.id}</td>

                    <td>${turma.nome}</td>

                    <td>

                        <button onclick="abrirAtividades(${turma.id})">
                            Visualizar
                        </button>

                        <button onclick="excluirTurma(${turma.id})">
                            Excluir
                        </button>

                    </td>

                </tr>
            `;
        });
}

async function cadastrarTurma() {

    const nome =
        document.getElementById(
            "nomeTurma"
        ).value;

    await fetch(
        "http://localhost:3000/turmas",
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                nome,
                professorId: professor.id
            })
        }
    );

    document.getElementById(
        "nomeTurma"
    ).value = "";

    listarTurmas();
}

async function excluirTurma(id) {

    if (!confirm(
        "Deseja excluir a turma?"
    )) {
        return;
    }

    const resposta =
        await fetch(
            `http://localhost:3000/turmas/${id}`,
            {
                method: "DELETE"
            }
        );

    const dados =
        await resposta.json();

    if (dados.mensagem) {

        alert(dados.mensagem);
    }

    listarTurmas();
}

function abrirAtividades(id) {

    localStorage.setItem(
        "turmaId",
        id
    );

    window.location.href =
        "atividades.html";
}

function logout() {

    localStorage.clear();

    window.location.href =
        "index.html";
}