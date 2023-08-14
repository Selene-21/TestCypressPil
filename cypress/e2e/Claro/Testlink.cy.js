/// <reference types="cypress" />


describe('testeando link caidos', () => {
it('Verificar link en celulares', () => {
cy.visit('https://tienda.claro.com.ar/plp/celulares-gama-alta')
cy.get('a').contains('celulares Samsung').click()
})
}) 