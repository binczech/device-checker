/// <reference types="cypress" />

describe('Phone List - admin', () => {
  beforeEach(() => {
    cy.loginAdmin();
  });
  it('should create new phone', () => {
    // visit page and open modal
    cy.interceptEndpoint('GET', '/phones', 'createPhone');
    cy.getByTestId('open-phone-modal').should('be.visible').click();
    cy.getByTestId('create-form-modal').should('be.visible');

    // try submit without data
    cy.submitForm();
    cy.getByTestId('create-form-modal').should('be.visible');
    cy.errorShouldExist('Please input Code designation (identifier)!');
    cy.errorShouldExist('Please input Manufacturer!');
    cy.errorShouldExist('Please input Model!');
    cy.errorShouldExist('Please input Operation system!');
    cy.errorShouldExist('Please input Operation system version!');

    // fill in data and submit
    cy.typeInInput('createPhone_code', '123').should('have.value', '123');
    cy.selectOption('createPhone_vendor', 'Apple');
    cy.typeInInput('createPhone_model', 'iPhone 20');
    cy.selectOption('createPhone_os', 'iOS');
    cy.typeInInput('createPhone_osVersion', '27');
    cy.typeInInput('createPhone_image', 'https://www.o2.cz/_pub/47/e0/bd/214260_439562_popup.png');
    cy.submitForm();
    cy.getByTestId('create-form-modal').should('not.exist');
    cy.wait('@createPhone');
    cy.getByTestId('phone_123').contains('iPhone 20').should('be.visible');
  });
  it('should show code already exists', () => {
    // visit page and open modal
    cy.getByTestId('open-phone-modal').should('be.visible').click();
    cy.getByTestId('create-form-modal').should('be.visible');

    // fill in duplicate code
    cy.typeInInput('createPhone_code', '123').should('have.value', '123');
    cy.selectOption('createPhone_vendor', 'Apple');
    cy.errorShouldExist('Code already used');
  });
  it('should edit phone', () => {
    cy.interceptEndpoint('GET', '/phones', 'getPhones');
    cy.wait('@getPhones');
    cy.getByTestId('phone_123').findByTestId('edit-phone').click();
    cy.getByTestId('edit-form-modal').should('be.visible');
    cy.inputShouldHaveValue('editPhone_code', '123');
    cy.typeInInput('editPhone_model', 'S300');
    cy.typeInInput('editPhone_osVersion', '227');
    cy.getById('editPhone_image').clear();
    cy.submitForm();
    cy.wait('@getPhones');
    cy.getByTestId('edit-form-modal').should('not.exist');
    cy.getByTestId('phone_123').contains('S300').should('be.visible');
  });
  it('should delete phone', () => {
    cy.interceptEndpoint('GET', '/phones', 'getPhones');
    cy.wait('@getPhones');
    cy.getByTestId('phone_123').findByTestId('delete-phone').click();
    cy.getById('confirm-delete-phone').click();
    cy.getByTestId('phone_123').should('not.exist');
  });
});
