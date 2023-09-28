/// <reference types="cypress" />
import Edenpage from "../../PageObject/Eden/Edenpage";
const edenpage = new Edenpage();

describe("test sobre la página EDEN ENTRADAS", () => {
  it("verificar subtitulos", () => {
    cy.visit("https://www.edenentradas.com.ar/sitio/contenido/inicio");
    const txtBuscar = "BUSCAR EVENTO";
    const txtCalendar = "CALENDARIO DE EVENTOS";

    edenpage.getsubtitles().first().should("contain.text", txtBuscar);
    edenpage.getsubtitles().last().should("contain.text", txtCalendar);
  });

  it("verificar MENU", () => {
    cy.visit("https://www.edenentradas.com.ar/sitio/contenido/inicio");
    const menuBton = [
      "HOME",
      "TODOS",
      "AGENDA DEL FINDE",
      "RECITALES",
      "TEATROS",
      "CUARTETOS",
      "FESTIVALES",
      "SALAS",
    ];

    edenpage.getmenuButtons().eq(0).should("contain.text", menuBton[0]);
    edenpage.getmenuButtons().eq(1).should("contain.text", menuBton[1]);
    edenpage.getmenuButtons().eq(2).should("contain.text", menuBton[2]);
    edenpage.getmenuButtons().eq(3).should("contain.text", menuBton[3]);
    edenpage.getmenuButtons().eq(4).should("contain.text", menuBton[4]);
    edenpage.getmenuButtons().eq(5).should("contain.text", menuBton[5]);
    edenpage.getmenuButtons().eq(6).should("contain.text", menuBton[6]);
    edenpage.getmenuButtons().eq(7).should("contain.text", menuBton[7]);
  });

  it("verificar RECITALES", () => {
    cy.visit("https://www.edenentradas.com.ar/");
    edenpage.getmenuButtons().eq(3).click();
    /*const newUrl = 'https://www.edenentradas.com.ar/sitio/contenido/recitales';
  cy.url().should('eq', newUrl);*/
    cy.url().should("include", "/sitio/contenido/recitales");
  });
});
