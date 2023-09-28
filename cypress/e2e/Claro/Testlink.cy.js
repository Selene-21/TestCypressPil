/// <reference types="cypress" />
const userPage = require("../../PageObject/PageUser/UsernPass");

describe("testeando link caidos", () => {
  it("Verificar link en celulares", () => {
    cy.visit("https://tienda.claro.com.ar/plp/celulares-gama-alta");
    cy.get("a").contains("celulares Samsung").click();
  });

  it("Verificar login", () => {
    //Test de prueba para logearse
    // Primero: ingresar a la pagina
    cy.visit("https://tienda.claro.com.ar/home");

    //Segundo: rellenar los campos requeridos
    cy.get("#email").type("lalala@lala.com");
    cy.get("#contrasenia").type("123hello");

    //Tercero: realizar un click en submit o ingresar
    cy.get("button").contains("INGRESAR").click();

    //Por ultimo verificar si el acceso fue o no exitoso
    cy.url().should("include", `${String}`);
    cy.get("h2").should("contain", `${String}`);
  });

  //Uso de locadores
  userPage.getmail().type(user);
  userPage.getpass().type(pass);
  userPage.getsendbtn().click();

  //Ejemplo buenas practicas
  const user = cypress.env()[0].user;
  const pass = cypress.env()[0].pass;
  cy.log(user);
  cy.log(pass);

  //Test de prueba para logearse 2
  // Primero: ingresar a la pagina
  cy.visit("https://tienda.claro.com.ar/home");

  //Segundo: rellenar los campos requeridos
  cy.get("#email").type(user);
  cy.get("#contrasenia").type(pass);

  //Tercero: realizar un click en submit o ingresar
  cy.get("button").contains("INGRESAR").click();

  //Por ultimo verificar si el acceso fue o no exitoso
  cy.url().should("include", `${String}`);
  cy.get("h2").should("contain", `${String}`);
});
