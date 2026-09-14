function salvarCadastro(dados) {
    localStorage.setItem("cadastroONG", JSON.stringify(dados));
}

function carregarCadastro() {
    const cadastroSalvo = localStorage.getItem("cadastroONG");

    if (cadastroSalvo) {
        return JSON.parse(cadastroSalvo);
    }

    return null;
}