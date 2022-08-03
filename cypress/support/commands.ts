/* eslint-disable no-undef */
/// <reference types="cypress" />

import { API_URL } from '../consts';

export {};
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('getByTestId', (testId) => cy.get(`[data-testid="${testId}"]`));
Cypress.Commands.add('getById', (id) => cy.get(`#${id}`));
Cypress.Commands.add('typeInInput', (inputTestId, value) => cy.getById(String(inputTestId)).clear().type(value));
Cypress.Commands.add('clickTestElement', (testId) => {
  cy.getByTestId(testId).click();
});
Cypress.Commands.add('login', (login, password) => {
  cy.visit('http://localhost:3000/');
  cy.intercept('POST', `${API_URL}/login`).as('login');
  cy.typeInInput('login_login', login);
  cy.typeInInput('login_password', password);
  cy.clickTestElement('submit-login');
  cy.wait('@login');
});
Cypress.Commands.add('loginAdmin', () => {
  cy.login('gandalf.the.grey@etnetera.cz', 'wh1tew1zard');
});
Cypress.Commands.add('loginUser', () => {
  cy.login('aragorn@etnetera.cz', 'dun4dan');
});
Cypress.Commands.add('selectOption', (selectTestId: string, optionText: string) => {
  cy.getById(selectTestId).click();
  cy.get('.ant-select-item-option-content').contains(optionText).click();

  return cy.getById(selectTestId).should('contain.text', optionText);
});

declare global {
  // eslint-disable-next-line no-unused-vars
  namespace Cypress {
    interface Chainable {
        getByTestId(testId: string): Chainable<JQuery<HTMLElement>>;
        getById(id: string): Chainable<JQuery<HTMLElement>>;
        typeInInput(inputTestId: string, value: string): Chainable<JQuery<HTMLElement>>;
        clickTestElement(testId: string): void;
        login(login: string, password: string): void;
        loginAdmin(): void;
        loginUser(): void;
        selectOption(selectTestId: string, optionText: string): void;
    }
  }
}
