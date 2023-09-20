// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const Ajv = require("ajv");
const ajv = new Ajv();

Cypress.Commands.add("openSize", () => {
  let tamPantalla;

  if (cypress.env("type") === "mobile") {
    tamPantalla = Cypress.env("viewportmobile").device;
  } else {
    tamPantalla = Cypress.env("viewportdesktop").device;
  }
  cy.viewport(tamPantalla);
  cy.visit("/");
});

/**
 * @method validarSchema
 * @param {String} schemaName - Nombre del archivo que esta dentro de la carpeta fixture/schemas
 * @param {String} serviceName - Nombre del archivo que esta dentro de la carpeta fixture/Autogenerados
 */
Cypress.Commands.add("validarSchema", (schemaName, serviceName) => {
  cy.fixture(`schemas/${schemaName}.json`).then((schema) => {
    //hacer algo con el schema
    cy.fixture(`Autogenerados/${serviceName}.json`).then((dataService) => {
      const validate = ajv.compile(schema);
      const valid = validate(dataService);
      if (!valid) {
        cy.log(JSON.stringify(validate.errors));
        throw new Error(
          `error en el servicio ${JSON.stringify(validate.errors)}`
        );
      } else {
        cy.log(`el schema ${schemaName} se valido correctamente`);
      }
    });
  });
});
