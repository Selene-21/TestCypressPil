/// <reference types="cypress" />
import Edenpage from "../../PageObject/Edenpage"
const edenpage = new Edenpage();

describe('test sobre la página EDEN ENTRADAS', () => {
  it('verificar subtitulos', () => { 
    cy.visit('https://www.edenentradas.com.ar/sitio/contenido/inicio');
    edenpage.getsubtitles().first().should('contain.text', 'BUSCAR EVENTO')
    edenpage.getsubtitles().last().should('contain.text', 'CALENDARIO DE EVENTOS')
  })

it('verificar MENU', () =>{ 
  cy.visit('https://www.edenentradas.com.ar/sitio/contenido/inicio');
  edenpage.getmenuButtons().eq(0).should('contain.text', 'HOME')
  edenpage.getmenuButtons().eq(1).should('contain.text', 'TODOS')
  edenpage.getmenuButtons().eq(2).should('contain.text', 'AGENDA DEL FINDE')
  edenpage.getmenuButtons().eq(3).should('contain.text', 'RECITALES')
  edenpage.getmenuButtons().eq(4).should('contain.text', 'TEATROS')
  edenpage.getmenuButtons().eq(5).should('contain.text', 'CUARTETOS')
  edenpage.getmenuButtons().eq(6).should('contain.text', 'FESTIVALES')
  edenpage.getmenuButtons().eq(7).should('contain.text', 'SALAS')
})

it('verificar RECITALES', () => {
  cy.visit('https://www.edenentradas.com.ar/');
  edenpage.getmenuButtons().eq(3).click();
})})