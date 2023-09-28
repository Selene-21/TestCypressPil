/// <reference types="cypress" />
const YvytuHome = require("../../PageObject/Yvytu/yvytuHome");

describe("test sobre la pagina YVYTU", () => {
  it("Verificar barra de navegacion - Iterar en botones pildora", () => {
    cy.visit("https://www.vientosdelaselva.com.ar");

    const menu = ["LA RESERVA", "CABAÑAS", "COMO LLEGAR", "CONTACTO", "DONÁ"];

    YvytuHome.getMenuPillBtn().each((boton, indice) => {
      cy.wrap(boton).should("have.text", menu[indice]).and("be.visible");
    });
  });

  it("Iterar en botones", () => {
    cy.visit("https://www.vientosdelaselva.com.ar");

    const menu = ["LA RESERVA", "CABAÑAS", "COMO LLEGAR", "CONTACTO", "DONÁ"];

    YvytuHome.getMenuAllBtn().each((boton, indice) => {
      if (indice != 0) {
        cy.wrap(boton).should("have.text", menu[indice]);
      }
    });
  });
});
