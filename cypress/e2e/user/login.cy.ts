/// <reference types="cypress" />
describe('User Login', () => {
  beforeEach(() => {
    window.localStorage.removeItem('user');
  });
  it('Wrong credentials', () => {
    cy.login('admin', 'somePassword');
    cy.get('.ant-notification-notice-description').should('contain', 'Invalid login or password.');
  });
  it('Correct credentials', () => {
    cy.loginAdmin();
    cy.url().should('include', '/phones');
  });
});
