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

    getCalendartitle() {
        return cy.get('ui-datepicker-title');
    }

    getCalendar() {
        return cy.get('ui-datepicker-title');
    }
    getSalasblock() {
        return cy.get('id=div-contenido')
    }
}

export default new EdenHome2();