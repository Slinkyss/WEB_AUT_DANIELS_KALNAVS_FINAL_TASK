import { BasePage } from "../pageObjects/basePage";

export class practiceForm extends BasePage {

    static get nameField(){

        return cy.get('#firstName');
    }

    static get lastNameField(){

        return cy.get('#lastName');
    }


    static get emailField(){

        return cy.get('#userEmail');
    }

    static get genderFieldMale(){

        return cy.get('label[for="gender-radio-1"]');
    }

    static get dateFieldClick(){

        return cy.get('#dateOfBirthInput');
    }
    

    static get dateWidgetMonth(){

        return cy.get('.react-datepicker__month-select');
    }

    static get dateWidgetYear(){

        return cy.get('.react-datepicker__year-select');
    }

    static get dateWidgetDay(){

        return cy.get('.react-datepicker__day')
    }
    
    
    static get numberField(){

        return cy.get('#userNumber');
    }

    static get subjectsField(){

        return cy.get('#subjectsContainer');
    }


    
    static get hobbiesField(){

        return cy.get('label[for="hobbies-checkbox-3"]');
    }


    static get uploadPictureButton(){

        return cy.get('#uploadPicture');
    }


    static get addressField(){

        return cy.get('#currentAddress');
    }

    static get stateField(){

        return cy.get('#stateCity-wrapper');
    }
    static get cityField(){

        return cy.get('#city');
    }

    static get submitButton(){

        return cy.get('#submit');
    }

    static get validacija(){
        return cy.get('.table.table-dark.table-striped.table-bordered.table-hover')
    }


    

    

    



}
