/// <reference types="cypress" />

describe("Test Servicio sobre pagina de Claro", () => {
  it("Verificar servicio", () => {
    cy.request(
      "GET",
      "https://tienda.claro.com.ar/api/contentManagement?content=Productos_destacados_spot"
    ).then((Response) => {
      cy.log(JSON.stringify(Response));
      expect(Response.status).to.eq(200);
    });
  });

  it.only("Verificar servicio con funcion", () => {
    cy.callServiceCheck(
      "GET",
      "https://y.clarity.ms/collect",
      "TClaro_Schema",
      "Clarocat"
    );
  });
});
