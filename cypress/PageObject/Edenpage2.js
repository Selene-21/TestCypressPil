class EdenHome2{
    getmenuButtons() {
        return cy.get('#navbar a');
    }

    getsubtitles() {
        return cy.get('h5')
    }
    getimageLogo() {
        return cy.get('#header-logo');
    }
}

export default new EdenHome2();