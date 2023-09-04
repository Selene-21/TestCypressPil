/// <reference types= 'cypress'/>
import EdenHeader from '../../PageObject/EdenHeader'
const EdenHeaderlocators = new EdenHeader();

describe('Test Calendario', () => {
    it('Verificar Calendario', () => { 
        cy.visit('https://www.edenentradas.com.ar/sitio/contenido/inicio');

        const fechaActual = new Date();
        const diaActual = fechaActual.getDate();
        const mesActual = fechaActual.getMonth();
        const anioActual = fechaActual.getFullYear();
        const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre','Noviembre', 'Diciembre']

        cy.log(diaActual);
        cy.log(fechaActual);
    

        EdenHeaderlocators.getcalendartitle().should('contain.text', meses[mesActual]);
        EdenHeaderlocators.getcalendartitle().should('contain.text', anioActual);

        EdenHeaderlocators.getcalendar().find('td').each((cuadradoDia, $index) => {
            if($index < diaActual){ 
            cy.wrap(cuadradoDia).should('have.class','ui-datepicker-unselectable ui-state-disabled');
        }
        })
    
    })

    it('Verificar Salas', () => {
        cy.visit('https://www.edenentradas.com.ar/sitio/contenido/salas');
        EdenHeaderlocators.getsalasblock().each((block) => { 
            const titulosSalas = ['SALAS']
            cy.wrap(block).should('be.visible');

            cy.wrap(block).should('contain.text', titulosSalas[$index])

        


        })

        titulosSalas.forEach((titulo, $index) => {
            EdenHeaderlocators.getsalasblock().eq($index).should('contain.text', titulo);
        })
    })

    it('Verificar Salas', () => {
        cy.visit('https://www.edenentradas.com.ar/sitio/contenido/salas');
        EdenHeaderlocators.getsalasblock().each((block) => { 
           cy.fixture("Salas").then((File) => { 
            File.forEach((Salas, $index) => {
                EdenHeaderlocators.getsalasblock().eq($index).should('contain.text', Salas.titulo);
                EdenHeaderlocators.getsalasblock().eq($index).should('contain.text', Salas.Address);

           })
            cy.wrap(block).should('be.visible');

            cy.wrap(block).should('contain.text', titulosSalas[$index])

        


        })
        })
    })



})