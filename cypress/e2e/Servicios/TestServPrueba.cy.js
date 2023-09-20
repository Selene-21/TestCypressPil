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

  it.only("Verificar servicio 3 validacion tipo de datos", () => {
    cy.request({
      method: "GET",
      url: "https://edenapi.edenentradas.com.ar/edenventarestapi/api/contenido/inicio",
    }).then((Response) => {
      cy.writeFile(
        "cypress/fixtures/Autogenerados/llamada.json",
        Response.body
      );
      expect(Response.status).to.eq(200);
    });
    cy.validarSchema(`llamada`, "llamada_Schema");
  });
});
