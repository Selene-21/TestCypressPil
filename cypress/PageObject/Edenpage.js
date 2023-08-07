/// <reference types="cypress" />

class EdenHomelocators {
    constructor() {
        this.menuButtons = '#navbar a'
        this.subtitles = 'h5'
    }

}

export default class EdenHome {
    constructor() {
        this.locators = new EdenHomelocators();
    }

    getmenuButtons(){
        return cy.get(this.locators.menuButtons);
    }

    getsubtitles(){
        return cy.get(this.locators.subtitles)
    }
}