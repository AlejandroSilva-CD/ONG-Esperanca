# GitFlow - ONG Esperança

## Branches principais

### main
Contém somente versões estáveis do projeto, prontas para apresentação ou entrega.

### develop
É a branch usada para integrar e testar as funcionalidades antes de uma nova versão chegar à `main`.

## Branches de funcionalidade

Cada funcionalidade pode ser desenvolvida em uma branch própria:

- `feature/spa`
- `feature/validacao-formulario`
- `feature/localstorage`

## Fluxo

```text
main
 ↑
 develop
 ↑
 feature/*
```

Depois que uma funcionalidade estiver concluída, ela é integrada à `develop`. Após os testes finais, a `develop` pode ser integrada à `main`.
