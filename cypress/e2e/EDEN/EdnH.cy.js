/// <reference types= 'cypress'/>
import EdenHeader from "../../PageObject/Eden/EdenHeader";
const EdenHeaderlocators = new EdenHeader();
import Utils from "../../PageObject/Utils";

describe("Test Calendario", () => {
  it("Verificar Calendario", () => {
    cy.visit("https://www.edenentradas.com.ar/sitio/contenido/inicio");
    const [dia, mes, anio] = Utils.getCompleteDate();

    cy.log(dia, mes, anio);

    EdenHeaderlocators.getcalendartitle().should("contain.text", mes);
    EdenHeaderlocators.getcalendartitle().should("contain.text", anio);

    EdenHeaderlocators.getcalendar()
      .find("td")
      .each((cuadradoDia, $index) => {
        if ($index < dia) {
          cy.wrap(cuadradoDia).should(
            "have.class",
            "ui-datepicker-unselectable ui-state-disabled"
          );
        }
      });
  });

  it("Verificar Salas", () => {
    cy.visit("https://www.edenentradas.com.ar/sitio/contenido/salas");
    EdenHeaderlocators.getsalasblock().each((block) => {
      const titulosSalas = ["SALAS"];
      cy.wrap(block).should("be.visible");

      cy.wrap(block).should("contain.text", titulosSalas[$index]);
    });

    titulosSalas.forEach((titulo, $index) => {
      EdenHeaderlocators.getsalasblock()
        .eq($index)
        .should("contain.text", titulo);
    });
  });

  it("Verificar Salas", () => {
    cy.visit("https://www.edenentradas.com.ar/sitio/contenido/salas");
    EdenHeaderlocators.getsalasblock().each((block) => {
      cy.fixture("Salas").then((File) => {
        File.forEach((Salas, $index) => {
          EdenHeaderlocators.getsalasblock()
            .eq($index)
            .should("contain.text", Salas.titulo);
          EdenHeaderlocators.getsalasblock()
            .eq($index)
            .should("contain.text", Salas.Address);
        });
        cy.wrap(block).should("be.visible");

        cy.wrap(block).should("contain.text", titulosSalas[$index]);
      });
    });
  });
});
