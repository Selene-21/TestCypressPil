/// <reference types="cypress" />


describe('Test Servicio', () => {
    it('Verificar servicio', () => {
    cy.request('GET', 'https://edenapi.edenentradas.com.ar/edenventarestapi2/api/contenido/inicio').then((Response) => { 
        cy.log(JSON.stringify(Response));
        expect(Response.status).to.eq(200);
    })
    
    })

    it('Verificar servicio 2', () => { 

    })
    }) 