/// <reference types= 'cypress'/>

class YvytuHome {
  getMenuPillBtn() {
    return cy.get('a[class*="rounded-full py-2 px-4"]');
  }

  getMenuAllBtn() {
    return cy.get("nav#menu-nav");
  }

  getAppBtn() {
    return cy.get("#btn-scroll-top");
  }
}

export default new YvytuHome();
