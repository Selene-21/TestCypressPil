/// <reference types="cypress" />
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
  edenpage.getmenuButtons().each((button, $index) => {
    cy.wrap(button).should('contain.text', menuBton[$index]);

  })
})

it.only('verificar RECITALES', () => {
  cy.visit('https://www.edenentradas.com.ar/');
  edenpage.getmenuButtons().contains('RECITALES').click();
  const newUrl = 'https://www.edenentradas.com.ar/sitio/contenido/recitales';
  cy.url().should('eq', newUrl);
})
})