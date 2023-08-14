/// <reference types="cypress" />


describe('testeando link caidos', () => {
    it('Verificar link en accesorios', () => {
        cy.visit('https://tienda.claro.com.ar/pdp/accesorios/cover-transparente-antishock-samsung-galaxy-a04?color=transparente')
        cy.get('a').contains('acá').click()
        cy.get('h1').should('have.text', '¿Cuáles son los medios de pago disponibles?')
    })
 })