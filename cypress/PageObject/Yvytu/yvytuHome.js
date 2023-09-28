/// <reference types= 'cypress'/>

class YvytuHome {
  getMenuPillBtn() {
    return cy.get('a[class*="rounded-full py-2 px-4"]');
  }

  getMenuAllBtn() {
    return cy.get("nav#menu-nav");
  }
}

export default new YvytuHome();
