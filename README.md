# Test Automation Assignment #1
In this project, you will be presented with the automation test suite based on [Cypress](https://www.cypress.io/) for end-to-end test automation and [Jest](https://jestjs.io/) for API testing. Both types of tests are written in [TypeScript](https://www.typescriptlang.org/).

## Installation
In order to execute tests, following prerequisites must be fulfilled:
- [Node.js](https://nodejs.org/en/) LTS is installed. Follow guides for [Ubuntu](https://www.geeksforgeeks.org/installation-of-node-js-on-linux/) and [Windows](https://treehouse.github.io/installation-guides/windows/node-windows.html).
- once installed, following commands must be executed within root directory of the solution:
```
npm install
```
## Execution
Following commands allow to run specific types of tests:
- `npm run e2e-tests-run` - runs Cypress end-to-end tests
- `npm run api-tests-run` - runs Jest API tests
- `npm test` - runs both types of tests in a sequence

## Contribution
### End-to-end tests
End-to-end tests rely on enhanced page-object pattern, which assumes implementing `IPage` interface, allowing to use `cy.goTo` and `cy.thenOn` extension method, which takes care of opening page pointed by the `path` property in `IPage`. Once executed, both interaction & assertion logic is encapsulated within page methods, making test code clear and business focused. 

Within a page object, the clear separation of element *selection* and *interaction* is being made for further reuse of existing element and query encapsulation.

#### How to develop new test?
1. Copy file `e2e/templates/tests.spec.ts.template` to `cypress/tests` folder
2. Remove `.template` extension and change its name to desired
3. Create page objects in `e2e/pages` folder. Add new page class to `e2e/pages/index.ts`
4. Adjust test to fulfil your pages expectations

#### General rules on end-to-end test development
- keep page methods self-explanatory
- separate element querying logic from actions and assertions against them

### API Tests
API tests are structured to detach client code from test code in `CatFactsApiClient`, making request calling easier. [Chai](https://www.chaijs.com/) is used to assertions.

#### How to develop new test?
1. Add desired endpoint to `CatFactsApiClient` class
2. Add test in `tests` folder

If you are an outside contributor, please fork the repository you would like to contribute to your account. See the GitHub documentation for forking a repo if you have any questions about this.