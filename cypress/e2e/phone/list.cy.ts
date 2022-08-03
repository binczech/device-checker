/// <reference types="cypress" />
describe('Phone List - admin', () => {
  beforeEach(() => {
    cy.loginAdmin();
  });
  it('should create new phone', () => {
    cy.getByTestId('open-phone-modal').should('be.visible').click();
    cy.getByTestId('create-form-modal').should('be.visible');
    cy.typeInInput('createPhone_code', '123').should('have.value', '123');
    cy.selectOption('createPhone_vendor', 'Apple');
  });
});
