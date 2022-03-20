import { PersonalDetails, Resolution, User } from 'data';
import {
  CartPage,
  CheckoutCompletePage,
  CheckoutStepOnePage,
  CheckoutStepTwoPage,
  InventoryPage,
  MainPage
} from 'pages';

Resolution.All.forEach((resolution) => {
  describe(`ordering process (resolution: ${resolution}`, () => {
    before(() => resolution.switch());

    it('should allow to create a successful order', () =>
      cy
        .goTo(MainPage, (page) => {
          page.loginAs(User.Standard);
        })
        .thenOn(InventoryPage, (page) => {
          page.clickAddToCartButtonFor('backpack');
          page.clickShoppingCartButton();
        })
        .thenOn(CartPage, (page) => {
          page.clickCheckoutButton();
        })
        .thenOn(CheckoutStepOnePage, (page) => {
          page.fillInPersonalDetailsForm(PersonalDetails.Default);
          page.clickContinueButton();
        })
        .thenOn(CheckoutStepTwoPage, (page) => {
          page.clickFinishButton();
        })
        .thenOn(CheckoutCompletePage, (page) => {
          page.isThankYouMessageVisible();
        }));
  });
});
