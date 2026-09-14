# ONG Esperança

Site da ONG Esperança desenvolvido como projeto acadêmico, com foco em uma interface simples, responsiva e organizada para apresentar a instituição, seus projetos e um formulário de cadastro de colaboradores.

## Funcionalidades

- Página inicial com apresentação e missão da ONG.
- Área de projetos.
- Formulário de cadastro de colaborador.
- Máscaras e validações de CPF, telefone e CEP.
- Feedback para dados inválidos.
- Uso de JavaScript para navegação e funcionalidades da aplicação.
- Armazenamento de dados no `localStorage`.
- Layout responsivo com HTML e CSS.

## Estrutura do projeto

```text
ONG-Esperanca/
├── index.html
├── projetos.html
├── cadastro.html
├── css/
│   └── style.css
├── js/
│   ├── armazenamento.js
│   ├── projetos.js
│   ├── script.js
│   └── validacao.js
├── img/
│   └── ong.png
├── .gitignore
└── README.md
```

## GitFlow utilizado

O projeto foi organizado seguindo uma estrutura baseada no GitFlow:

- `main`: versão estável e pronta para entrega.
- `develop`: branch de desenvolvimento e integração das alterações.
- `feature/*`: branches destinadas ao desenvolvimento de funcionalidades específicas.

Exemplos de branches de funcionalidade utilizadas na organização do projeto:

```text
feature/spa
feature/validacao-formulario
feature/localstorage
```

O fluxo recomendado é:

```text
feature/* → develop → main
```

As funcionalidades são desenvolvidas separadamente nas branches `feature/*`, depois integradas em `develop` para testes e, quando estiverem estáveis, seguem para `main`.

## Como executar

O projeto é front-end e pode ser executado abrindo o arquivo `index.html` no navegador. Para uma experiência melhor durante o desenvolvimento, também pode ser utilizado um servidor local, como o Live Server do VS Code.

## Tecnologias

- HTML5
- CSS3
- JavaScript
- Git / GitHub

## Projeto acadêmico

Projeto desenvolvido para prática de desenvolvimento web, organização de código, JavaScript, validação de formulários, armazenamento local e controle de versões.
