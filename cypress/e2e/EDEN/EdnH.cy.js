/// <reference types= 'cypress'/>
import EdenHeader from '../../PageObject/EdenHeader'
const EdenHeaderlocators = new EdenHeader();

describe('Test Calendario', () => {
    it('Verificar Calendario', () => { 
        cy.visit('https://www.edenentradas.com.ar/sitio/contenido/inicio');
        EdenHeaderlocators.getcalendartitle().should('contain.text', 'Agosto');
        EdenHeaderlocators.getcalendartitle().should('contain.text', '2023');
    
    })

})