import IPage from "./IPage";

export default class CheckoutCompletePage implements IPage {
  path = "/checkout-complete.html";

  private completeHeader = () => cy.get('.complete-header');

  public isThankYouMessageVisible() {
    this.completeHeader()
      .should('be.visible')
      .should('have.text', 'THANK YOU FOR YOUR ORDER');
  }
}