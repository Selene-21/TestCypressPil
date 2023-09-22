/// <reference types="cypress" />

describe("Test Servicio", () => {
  it("Verificar servicio", () => {
    cy.request(
      "GET",
      "https://edenapi.edenentradas.com.ar/edenventarestapi2/api/contenido/inicio"
    ).then((Response) => {
      cy.log(`Respuesta del servicio de inicio: ${JSON.stringify(Response)}`);
      expect(Response.status).to.eq(200);
    });
  });

  it("Verificar servicio 2", () => {
    cy.request({
      method: "GET",
      url: "https://edenapi.edenentradas.com.ar/edenventarestapi2/api/contenido/inicio",
    }).then((Response) => {
      cy.writeFile(
        "cypress/fixtures/Autogenerados/eventos.json",
        Response.body
      );
      expect(Response.status).to.eq(200);
    });
  });

  it("Verificar servicio 3 validacion tipo de datos", () => {
    cy.request({
      method: "GET",
      url: "https://edenapi.edenentradas.com.ar/edenventarestapi/api/contenido/inicio",
    }).then((Response) => {
      cy.log(`respuesta del servicio de inicio: ${JSON.stringify(Response)}`);
      expect(Response.status).to.eq(200);
      cy.writeFile(
        "cypress/fixtures/Autogenerados/eventos.json",
        Response.body
      );
    });
    cy.validarSchema(`llamada_Schema`, "eventos");
  });

  it("Verificar servicio de CUARTETOS 4", () => {
    cy.request({
      method: "GET",
      url: "https://edenapi.edenentradas.com.ar/edenventarestapi/api/contenido/eventos/cuartetos",
    }).then((Response) => {
      cy.log(
        `respuesta del servicio de Cuartetos: ${JSON.stringify(Response)}`
      );
      expect(Response.status).to.eq(200);
      cy.writeFile(
        "cypress/fixtures/Autogenerados/cuartetos.json",
        Response.body
      );
    });
    cy.validarSchema(`cuartetos_Schema`, "cuartetos");
  });
});

it.only("Verificar servicio con funcion", () => {
  cy.callServiceCheck(
    "GET",
    "https://edenapi.edenentradas.com.ar/edenventarestapi/api/contenido/inicio",
    "llamada_Schema",
    "eventos"
  );
});
