import IPage from "./IPage";

export default class CartPage implements IPage {

  public path = "/cart.html";

  private checkoutButton = () => cy.getByTestId('checkout');

  public clickCheckoutButton() {
    this.checkoutButton().click();
  }
}