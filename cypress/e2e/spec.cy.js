const { BasePage } = require("../../pageObjects/basePage");
const { practiceForm } = require("../../pageObjects/practiceForm");

describe("final task", () => {
  context("Without auto login", () => {
    beforeEach(() => {
     BasePage.visit();
    });

    it.only('- Make an Appointment', () => {

      practiceForm.nameField.type("Daniels");
      practiceForm.lastNameField.type("Daniels");
      practiceForm.emailField.type("Daniels@gmail.com");
      practiceForm.genderFieldMale.click();
      practiceForm.dateFieldClick.click();
      practiceForm.dateWidgetMonth.select("1");
      practiceForm.dateWidgetYear.select("1930");
      practiceForm.dateWidgetDay.contains("28").click();
      practiceForm.numberField.type("12345678");
      practiceForm.subjectsField.type("Economics{enter}");
      practiceForm.hobbiesField.click();
      practiceForm.uploadPictureButton.selectFile('files/Pakkun.png');
      practiceForm.addressField.type("Mana adrese ir sada");
      //nesaprotu ka savadak var izdarit, ja spiez dropdown bultas un tad inpsect, vins aizveras. 
      practiceForm.stateField.type('NCR{enter}');
      practiceForm.cityField.type('Delhi{enter}');
      practiceForm.submitButton.click();


      //validacija

      practiceForm.validacija.contains('td', 'Student Name').next().should("contain.text", "Daniels Daniels");
      practiceForm.validacija.contains('td', 'Student Email').next().should("contain.text", "Daniels@gmail.com");
      practiceForm.validacija.contains('td', 'Gender').next().should("contain.text", "Male");
      practiceForm.validacija.contains('td', 'Mobile').next().should("contain.text", "12345678");
      practiceForm.validacija.contains('td', 'Date of Birth').next().should("contain.text", "28 January,1930");
      practiceForm.validacija.contains('td', 'Subjects').next().should("contain.text", "Economics");
      practiceForm.validacija.contains('td', 'Hobbies').next().should("contain.text", "Music");
      practiceForm.validacija.contains('td', 'Picture').next().should("contain.text", "Pakkun.png");
      practiceForm.validacija.contains('td', 'Address').next().should("contain.text", "Mana adrese ir sada");
      practiceForm.validacija.contains('td', 'State and City').next().should("contain.text", "NCR Delhi");
    });

  });
});
