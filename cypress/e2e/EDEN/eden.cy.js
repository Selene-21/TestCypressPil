/// <reference types="cypress" />
import Edenpage from "../../PageObject/Edenpage"
const edenpage = new Edenpage();

describe("test sobre la pagina EDEN ENTRADAS", () => {
    it('verificar subtitulos', () => {
      cy.visit('https://www.edenentradas.com.ar/sitio/contenido/inicio');
      Edenpage.getsubtitles().first().should('contain.text', 'BUSCAR EVENTO')
      Edenpage.getsubtitles().last().should('contain.text', 'CALENDARIO DE EVENTOS')
  
      })
    })
    it('verificar MENU', () => {
      cy.visit('https://www.edenentradas.com.ar/sitio/contenido/inicio')
      Edenpage.getmenuButtons().eq(0).should('contain.text', 'HOME')
      Edenpage.getmenuButtons().eq(1).should('contain.text', 'TODOS')
      Edenpage.getmenuButtons().eq(2).should('contain.text', 'AGENDA DEL FINDE')
      Edenpage.getmenuButtons().eq(3).should('contain.text', 'RECITALES')
      Edenpage.getmenuButtons().eq(4).should('contain.text', 'TEATROS')
      Edenpage.getmenuButtons().eq(5).should('contain.text', 'CUARTETOS')
      Edenpage.getmenuButtons().eq(6).should('contain.text', 'FESTIVALES')
      Edenpage.getmenuButtons().eq(7).should('contain.text', 'SALAS')
      })

      it('Verificar página RECITALES', () => {
        cy.visit('https://www.edenentradas.com.ar/');

        Edenpage.getmenuButtons().eq(3).click();
      } )