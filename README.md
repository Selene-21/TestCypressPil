# Codigos Básicos de Cypress para Testing

-[Como instalar](#como-instalar-y-usar-cypress) -[Modelo codigo base](#modelo-codigo-base-para-test) -[Modelo codigo info Privada](#modelo-código-para-info-privada)

## Como instalar y usar Cypress

Código para instalar //npm install
Código para abrir Cypress// npx cypress open

## Modelo codigo base para test:

/// <reference types="cypress" />

describe('seccion o nombre del test', () => {
it('Verificar...', () => {
cy.visit('Aqui la URL que debe testearse')
cy.get('el objeto que debe traer').contains('lo que contiene el objeto').click()le indica al comando que debe hacer un click.
})
})

## Modelo código para info privada

Primero crear un archivo **cypres.env.json** en la raiz, que contenga todos los user y pass necesarios con la siguiente estructura:

```
[
    {
        "user": "xxx",
        "pass": "xxx"
    },
     {
       "user": "user@domine.com",
       "pass": "xxxxxxxx"
     }
]
```

El usuario [0] es un **usuario válido**
El usuario [1] es un **usuario NO válido**
Segundo agregar dicho archivo al gitignore para evitar fugas de informacion
