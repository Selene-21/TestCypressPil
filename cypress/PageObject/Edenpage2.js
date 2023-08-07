class EdenHome2{
    getmenuButtons() {
        return cy.get('#navbar a');
    }

    getsubtitles() {
        return cy.get('h5')
    }
}

export default new EdenHome2();