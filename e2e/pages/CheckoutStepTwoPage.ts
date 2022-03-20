import IPage from "./IPage";

export default class CheckoutStepTwoPage implements IPage {

  private finishButton = () => cy.getByTestId('finish');

  path = '/checkout-step-two.html';
  public clickFinishButton() {
    this.finishButton().click();
  }
}