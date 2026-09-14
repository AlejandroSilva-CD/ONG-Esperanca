# ONG Esperança

Site desenvolvido para a ONG Esperança com o objetivo de apresentar seus projetos, sua missão e permitir o cadastro de colaboradores.

## Tecnologias utilizadas

* HTML5
* CSS3
* JavaScript
* LocalStorage

## Pré-requisitos

Para executar o projeto é necessário apenas ter um navegador atualizado, como Google Chrome, Microsoft Edge ou Mozilla Firefox.

Não é necessário instalar dependências externas.

## Como executar

1. Baixe ou clone o repositório.
2. Abra a pasta do projeto.
3. Abra o arquivo `index.html` no navegador.

O projeto também pode ser executado utilizando a extensão Live Server no Visual Studio Code.

## Funcionalidades

* Página inicial da ONG.
* Apresentação dos projetos.
* Formulário de cadastro de colaboradores.
* Validação de CPF, telefone e CEP.
* Máscaras nos campos do formulário.
* Armazenamento de dados utilizando LocalStorage.
* Navegação entre as seções do site.

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
└── img/
    └── ong.png
```

## GitFlow

O projeto utiliza uma organização baseada no GitFlow.

* `main` — versão estável e final do projeto.
* `develop` — desenvolvimento e integração das funcionalidades.
* `feature/spa` — desenvolvimento da estrutura SPA.
* `feature/validacao-formulario` — validação dos campos do cadastro.
* `feature/localstorage` — armazenamento dos dados no navegador.

As funcionalidades são desenvolvidas nas branches `feature/`, depois integradas na `develop` e posteriormente na `main`.

## Versionamento

Foi utilizado o versionamento semântico no padrão:

`MAJOR.MINOR.PATCH`

Principais versões:

* `v1.0.0` — primeira versão estável do projeto.
* `v1.1.0` — implementação da validação do formulário.
* `v1.2.0` — implementação do armazenamento local.

## Testes

Os testes foram realizados diretamente no navegador, verificando a navegação, o funcionamento do formulário, as máscaras dos campos, a validação de CPF, telefone e CEP e o armazenamento dos dados no LocalStorage.

## Build

O projeto não possui processo de build, pois utiliza HTML, CSS e JavaScript sem dependências ou ferramentas de compilação. Os arquivos podem ser executados diretamente no navegador.

## Autor

Projeto desenvolvido como atividade acadêmica.
