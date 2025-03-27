export class BasePage {
    static visit() {
        return cy.visit(Cypress.config('baseUrl')); 
    }

    

}