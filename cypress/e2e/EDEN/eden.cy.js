/// <reference types="cypress" />
import Edenpage from "../../PageObject/Eden/Edenpage";
const edenpage = new Edenpage();

describe("test sobre la página EDEN ENTRADAS", { tags: "@regression" }, () => {
  beforeEach(() => {
    //const tamPantalla = Cypress.env("viewportdesktop").device;
    const tamPantalla = Cypress.env("viewportmobile").device;
    cy.viewport(tamPantalla);
    cy.visit("http://www.edenentradas.com.ar/");
  });

  afterEach(() => {
    //funcion para desloguearse
  });
  it("verificar subtitulos", { tags: "@regression" }, () => {
    edenpage.getsubtitles().first().should("contain.text", "BUSCAR EVENTO");
    edenpage
      .getsubtitles()
      .last()
      .should("contain.text", "CALENDARIO DE EVENTOS");
  });

  it("verificar MENU", () => {
    edenpage.getmenuButtons().eq(0).should("contain.text", "HOME");
    edenpage.getmenuButtons().eq(1).should("contain.text", "TODOS");
    edenpage.getmenuButtons().eq(2).should("contain.text", "AGENDA DEL FINDE");
    edenpage.getmenuButtons().eq(3).should("contain.text", "RECITALES");
    edenpage.getmenuButtons().eq(4).should("contain.text", "TEATROS");
    edenpage.getmenuButtons().eq(5).should("contain.text", "CUARTETOS");
    edenpage.getmenuButtons().eq(6).should("contain.text", "FESTIVALES");
    edenpage.getmenuButtons().eq(7).should("contain.text", "SALAS");
  });

  it("verificar RECITALES", () => {
    edenpage.getmenuButtons().eq(3).click();
  });

  it("Verificar imagen del Logo", () => {
    const imgSource =
      "https://static.edenentradas.com.ar/sitio/images/logo.gif";
    edenpage.getImageLogo().should("be.visible");
    edenpage.getImageLogo().should("have.attr", "src", imgSource);
    edenpage.getImageLogo().should("have.attr", "alt", "EdenEntradas");
  });
});
