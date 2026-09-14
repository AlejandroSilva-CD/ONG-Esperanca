const cpf = document.getElementById("cpf");
const telefone = document.getElementById("telefone");
const cep = document.getElementById("cep");

// Máscara do CPF
cpf.addEventListener("input", function () {
    let valor = cpf.value.replace(/\D/g, "");

    if (valor.length > 11) {
        valor = valor.substring(0, 11);
    }

    if (valor.length > 9) {
        valor = valor.replace(
            /^(\d{3})(\d{3})(\d{3})(\d{1,2})$/,
            "$1.$2.$3-$4"
        );
    } else if (valor.length > 6) {
        valor = valor.replace(
            /^(\d{3})(\d{3})(\d{1,3})$/,
            "$1.$2.$3"
        );
    } else if (valor.length > 3) {
        valor = valor.replace(
            /^(\d{3})(\d{1,3})$/,
            "$1.$2"
        );
    }

    cpf.value = valor;
});

// Máscara do telefone
telefone.addEventListener("input", function () {
    let valor = telefone.value.replace(/\D/g, "");

    if (valor.length > 11) {
        valor = valor.substring(0, 11);
    }

    if (valor.length > 10) {
        valor = valor.replace(
            /^(\d{2})(\d{5})(\d{4})$/,
            "($1) $2-$3"
        );
    } else if (valor.length > 6) {
        valor = valor.replace(
            /^(\d{2})(\d{5})(\d{0,4})$/,
            "($1) $2-$3"
        );
    } else if (valor.length > 2) {
        valor = valor.replace(
            /^(\d{2})(\d{0,5})$/,
            "($1) $2"
        );
    }

    telefone.value = valor;
});

// Máscara do CEP
cep.addEventListener("input", function () {
    let valor = cep.value.replace(/\D/g, "");

    if (valor.length > 8) {
        valor = valor.substring(0, 8);
    }

    if (valor.length > 5) {
        valor = valor.replace(
            /^(\d{5})(\d{1,3})$/,
            "$1-$2"
        );
    }

    cep.value = valor;
});


// Formulário
const formulario = document.querySelector("form");
const feedback = document.getElementById("feedback-form");

formulario.addEventListener("submit", function (event) {

    event.preventDefault();

    feedback.textContent = "";
    feedback.className = "feedback";

    // Validação do CPF
    if (!validarCPF(cpf.value)) {

        feedback.textContent = "CPF inválido. Digite um CPF válido.";
        feedback.classList.add("erro");

        cpf.focus();
        return;
    }

    // Validação do telefone
    let numeroTelefone = telefone.value.replace(/\D/g, "");

    if (numeroTelefone.length !== 11) {

        feedback.textContent =
            "Telefone inválido. Digite um telefone com 11 números.";

        feedback.classList.add("erro");

        telefone.focus();
        return;
    }

    // Validação do CEP
    let numeroCEP = cep.value.replace(/\D/g, "");

    if (numeroCEP.length !== 8) {

        feedback.textContent =
            "CEP inválido. Digite um CEP com 8 números.";

        feedback.classList.add("erro");

        cep.focus();
        return;
    }

    // Dados do cadastro
    const dadosCadastro = {
        nome: document.getElementById("nome").value,
        cpf: cpf.value,
        telefone: telefone.value,
        cep: cep.value,
        email: document.getElementById("email").value
    };

    // Salva os dados
    salvarCadastro(dadosCadastro);

    // Mensagem de sucesso
    feedback.textContent = "Cadastro realizado com sucesso!";
    feedback.classList.add("sucesso");
});


// Carrega os dados salvos
const dadosSalvos = carregarCadastro();

if (dadosSalvos) {
    document.getElementById("nome").value = dadosSalvos.nome;
    document.getElementById("cpf").value = dadosSalvos.cpf;
    document.getElementById("telefone").value = dadosSalvos.telefone;
    document.getElementById("cep").value = dadosSalvos.cep;
    document.getElementById("email").value = dadosSalvos.email;
}


// Navegação da página
function navegar() {

    const inicio = document.getElementById("inicio");
    const missao = document.getElementById("missao");
    const projetos = document.getElementById("projetos");
    const cadastro = document.getElementById("cadastro");

    const rota = window.location.hash;

    inicio.classList.add("oculto");
    missao.classList.add("oculto");
    projetos.classList.add("oculto");
    cadastro.classList.add("oculto");

    if (rota === "#projetos") {

        projetos.classList.remove("oculto");

    } else if (rota === "#cadastro") {

        cadastro.classList.remove("oculto");

    } else {

        inicio.classList.remove("oculto");
        missao.classList.remove("oculto");
    }
}

window.addEventListener("hashchange", navegar);

navegar();