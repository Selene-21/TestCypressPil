/// <reference types="cypress" />
const YvytuHome = require("../../PageObject/Yvytu/yvytuHome");

describe("test sobre la pagina YVYTU", () => {
  beforeEach(() => {
    cy.visit("https://www.vientosdelaselva.com.ar");
  });
  it("Verificar barra de navegacion - Iterar en botones pildora", () => {
    const menu = ["LA RESERVA", "CABAÑAS", "COMO LLEGAR", "CONTACTO", "DONÁ"];

    YvytuHome.getMenuPillBtn().each((boton, indice) => {
      cy.wrap(boton).should("have.text", menu[indice]).and("be.visible");
    });
  });

  it("Iterar en botones", () => {
    const menu = ["LA RESERVA", "CABAÑAS", "COMO LLEGAR", "CONTACTO", "DONÁ"];

    YvytuHome.getMenuAllBtn().each((boton, indice) => {
      if (indice != 0) {
        cy.wrap(boton).should("have.text", menu[indice]);
      }
    });
  });

  it("Verificar comportamiento boton Ir Arriba", () => {
    YvytuHome.getUpBtn().should("not.exist");
  });
});
