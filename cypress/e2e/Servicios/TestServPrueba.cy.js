/// <reference types="cypress" />


describe('Test Servicio', () => {
    it('Verificar servicio', () => {
        cy.request('GET', 'https://edenapi.edenentradas.com.ar/edenventarestapi2/api/contenido/inicio').then((Response) => {
            cy.log(JSON.stringify(Response));
            expect(Response.status).to.eq(200);
        })

    })

    it('Verificar servicio 2', () => {
        cy.request({
            method: 'GET',
            url: 'https://edenapi.edenentradas.com.ar/edenventarestapi2/api/contenido/inicio',
        }).then((Response) => {
            cy.writeFile('cypress/fixtures/Autogenerados.json', Response.body);
            expect(Response.status).to.eq(200);
        })

    })
})