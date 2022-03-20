import config from "../../cypress.json";
import IPage from "../pages/IPage"

/* eslint-disable @typescript-eslint/no-namespace */
declare global {
  namespace Cypress {
    interface Chainable {
      goTo<TPage extends IPage>(type: {new(): TPage; }, action: (page: TPage) => void): Chainable
      thenOn<TPage extends IPage>(type: {new(): TPage; }, action: (page: TPage) => void): Chainable
      getByTestId(testId: string): Chainable
    }
  }
}

Cypress.Commands.add('goTo', (pageType, action) => {
  const page = new pageType();
  cy.visit(page.path);
  cy.url().should('eq', new URL(page.path, config.baseUrl).href);
  action(page);
});

Cypress.Commands.add('thenOn', (pageType, action) => {
  const page = new pageType();
  cy.url().should('eq', new URL(page.path, config.baseUrl).href);
  action(page);
});


Cypress.Commands.add('getByTestId', (testId) => cy.get(`[data-test=${testId}]`));