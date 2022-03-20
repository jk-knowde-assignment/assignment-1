import { User } from 'data';
import Resolution from 'data/Resolution';
import { InventoryPage, MainPage } from 'pages';

Resolution.All.forEach((resolution) => {
  describe(`authentication (resolution: ${resolution})`, () => {
    before(() => resolution.switch());
    it('should validate login form', () =>
      cy.goTo(MainPage, (page) => {
        page.clickLoginButton();
        page.isValidationErrorVisible();
      }));

    it('should allow to log in', () =>
      cy
        .goTo(MainPage, (page) => {
          page.loginAs(User.Standard);
        })
        .thenOn(InventoryPage, (page) => {
          page.isUserLoggedIn();
        }));
  });
});
