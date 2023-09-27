/// <reference types= 'cypress'/>

class YvytuHome {
  getMenuPillBtn() {
    return cy.get('a[class*="rounded-full py-2 px-4"]');
  }
}

export default new YvytuHome();
