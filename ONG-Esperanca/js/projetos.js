const projetos = [
    {
        titulo: "Campanha de Alimentos",
        descricao: "Arrecadação de alimentos para famílias em situação de vulnerabilidade.",
        categoria: "Alimentação"
    },
    {
        titulo: "Ação Social",
        descricao: "Atividades e ações para ajudar pessoas da comunidade.",
        categoria: "Social"
    },
    {
        titulo: "Campanha do Agasalho",
        descricao: "Arrecadação de roupas e agasalhos para o inverno.",
        categoria: "Doação"
    }
];

function criarTemplateProjeto(projeto) {
    return `
        <article class="card-projeto">
            <span class="badge">${projeto.categoria}</span>
            <h3>${projeto.titulo}</h3>
            <p>${projeto.descricao}</p>
        </article>
    `;
}

function mostrarProjetos() {
    const lista = document.getElementById("lista-projetos");

    if (lista) {
        lista.innerHTML = projetos
            .map(criarTemplateProjeto)
            .join("");
    }
}

mostrarProjetos();