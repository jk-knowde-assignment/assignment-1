import { PersonalDetails } from "data";
import IPage from "./IPage";

export default class CheckoutStepOnePage implements IPage {

  public path = "/checkout-step-one.html";

  private firstNameField = () => cy.getByTestId('firstName');
  private lastNameField = () => cy.getByTestId('lastName');
  private postalCodeField = () => cy.getByTestId('postalCode');
  private continueButton = () => cy.getByTestId('continue');

  public fillInPersonalDetailsForm(personalDetails: PersonalDetails) {
    this.firstNameField().type(personalDetails.firstName);
    this.lastNameField().type(personalDetails.lastName);
    this.postalCodeField().type(personalDetails.postalCode);
  }  
  public clickContinueButton() {
    this.continueButton().click();
  }
}