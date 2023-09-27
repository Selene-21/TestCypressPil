/// <reference types="cypress" />

class User {
  //Login
  getmail() {
    return cy.get("#email");
  }
  getpass() {
    return cy.get("#contrasenia");
  }
  getsendbtn() {
    return cy.get('button[type="submit"]');
  }
}

export default new User();
