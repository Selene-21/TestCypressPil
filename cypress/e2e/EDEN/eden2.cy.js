/// <reference types="cypress" />
const EdenHome2 = require ('../../PageObject/Edenpage2')

describe('test sobre la pagina EDEN ENTRADAS', () => {
    it('verificar subtitulos', () => {
      cy.visit('https://www.edenentradas.com.ar/sitio/contenido/inicio');
      EdenHome2.getsubtitles().first().should('contain.text', 'BUSCAR EVENTO');
      EdenHome2.getsubtitles().last().should('contain.text', 'CALENDARIO DE EVENTOS');
    })
    
    it('verificar MENU', () => {
      cy.visit('https://www.edenentradas.com.ar/sitio/contenido/inicio');
      EdenHome2.getmenuButtons().eq(0).should('contain.text', 'HOME');
      EdenHome2.getmenuButtons().eq(1).should('contain.text', 'TODOS');
      EdenHome2.getmenuButtons().eq(2).should('contain.text', 'AGENDA DEL FINDE');
      EdenHome2.getmenuButtons().eq(3).should('contain.text', 'RECITALES');
      EdenHome2.getmenuButtons().eq(4).should('contain.text', 'TEATROS');
      EdenHome2.getmenuButtons().eq(5).should('contain.text', 'CUARTETOS');
      EdenHome2.getmenuButtons().eq(6).should('contain.text', 'FESTIVALES');
      EdenHome2.getmenuButtons().eq(7).should('contain.text', 'SALAS');
      })

      it('Verificar página de RECITALES', () => {
        cy.visit('http://www.edenentradas.com.ar/');
        EdenHome2.getmenuButtons().eq(3).click();
      })
    })