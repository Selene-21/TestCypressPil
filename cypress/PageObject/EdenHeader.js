/// <reference types= 'cypress'/>

class EdenHeaderlocators {
    constructor() {
         //Calendario 
         this.calendartitle = '.ui-datepicker-header';
         this.calendar = 'ui-datepicker-title';
     }
    }

 export default class EdenHeader {
    constructor() {
        this.locators = new EdenHeaderlocators();
        }
        getcalendartitle(){
            return cy.get(this.locators.calendartitle);
        }
    
        getcalendar(){
            return cy.get(this.locators.calendar);
        }
 }