/* eslint-disable no-undef */
/// <reference types="cypress" />

import { Method } from 'cypress/types/net-stubbing';

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
Cypress.Commands.add('getByTestId', (testId: string) => cy.get(`[data-testid="${testId}"]`));
Cypress.Commands.add('findByTestId', { prevSubject: true }, (subject, testId: string) => subject
  .find(`[data-testid="${testId}"]`));
Cypress.Commands.add('getById', (id: string) => cy.get(`#${id}`));
Cypress.Commands.add('typeInInput', (inputTestId: string, value: string) => cy
  .getById(String(inputTestId))
  .clear()
  .type(value)
  .should('have.value', value));
Cypress.Commands.add('clickTestElement', (testId: string) => {
  cy.getByTestId(testId).click();
});
Cypress.Commands.add('interceptEndpoint', (method: Method, path: string, as: string) => {
  cy.intercept(method, `${API_URL}${path}`).as(as);
});
Cypress.Commands.add('login', (login: string, password: string) => {
  cy.visit('http://localhost:3000/');
  cy.interceptEndpoint('POST', '/login', 'login');
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

  return cy
    .getById(selectTestId)
    .parent()
    .parent()
    .find('.ant-select-selection-item')
    .should('contain.text', optionText);
});
Cypress.Commands.add('notificationShouldContain', (text: string) => cy
  .get('ant-notification-notice-message')
  .should('have.text', text));
Cypress.Commands.add('submitForm', () => cy.getByTestId('submit-form').click());
Cypress.Commands.add('errorShouldExist', (errorText: string) => cy
  .get('.ant-form-item-explain-error')
  .contains(errorText)
  .should('exist'));
Cypress.Commands.add('inputShouldHaveValue', (inputTestId: string, value: string) => cy
  .getById(inputTestId)
  .should('have.value', value));

declare global {
  // eslint-disable-next-line no-unused-vars
  namespace Cypress {
    interface Chainable {
        getByTestId(testId: string): Chainable<JQuery<HTMLElement>>;
        findByTestId(testId: string): Chainable<JQuery<HTMLElement>>;
        getById(id: string): Chainable<JQuery<HTMLElement>>;
        typeInInput(inputTestId: string, value: string): Chainable<JQuery<HTMLElement>>;
        clickTestElement(testId: string): void;
        interceptEndpoint(method: Method, path: string, as: string): void;
        login(login: string, password: string): void;
        loginAdmin(): void;
        loginUser(): void;
        selectOption(selectTestId: string, optionText: string): void;
        notificationShouldContain(text: string): void;
        submitForm(): void;
        errorShouldExist(errorText: string): void;
        inputShouldHaveValue(inputTestId: string, value: string): void;
    }
  }
}
