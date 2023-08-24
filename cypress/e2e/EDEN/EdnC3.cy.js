/// <reference types="cypress" />
import EdenHome from "../../PageObject/Edenpage";
import Edenpage from "../../PageObject/Edenpage"
const edenpage = new Edenpage();

describe('test sobre la página EDEN ENTRADAS', () => {
  it('verificar subtitulos', () => { 
    cy.visit('https://www.edenentradas.com.ar/sitio/contenido/inicio');
    const txtBuscar = 'BUSCAR EVENTO';
    const txtCalendar = 'CALENDARIO DE EVENTOS'

    edenpage.getsubtitles().first().should('contain.text', txtBuscar)
    edenpage.getsubtitles().last().should('contain.text', txtCalendar)
  })

it('verificar MENU', () =>{ 
  cy.visit('https://www.edenentradas.com.ar/sitio/contenido/inicio');
  const menuBton = ['HOME','TODOS','AGENDA DEL FINDE', 'RECITALES', 'TEATROS','CUARTETOS','FESTIVALES','SALAS'];
  menuBton.forEach((txtBton, $index) => {
    edenpage.getmenuButtons().eq($index).should('contain.text', txtBton);
  })
})

it.only('verificar RECITALES', () => {
  cy.visit('https://www.edenentradas.com.ar/');
  edenpage.getmenuButtons().contains('RECITALES').click();
  cy.url().should('eq', 'https://www.edenentradas.com.ar/sitio/contenido/recitales');
})
})