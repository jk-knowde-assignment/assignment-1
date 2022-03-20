import { User } from "data/User";
import IPage from "./IPage";

export default class MainPage implements IPage {

  public path = '/';
  private loginButton = () => cy.getByTestId('login-button');
  private errorMessage = () => cy.getByTestId('error');
  private userNameField = () => cy.getByTestId('username');
  private passwordField = () => cy.getByTestId('password');

  public loginAs(user : User) {
    this.fillInLoginForm(user);
    this.clickLoginButton();
  }
  
  public clickLoginButton() {
    this.loginButton().click();
  }

  public isValidationErrorVisible() {
    this.errorMessage()
      .should('be.visible')
      .should('contain.text', 'Username is required');
  }

  public fillInLoginForm(loginForm: User) {
    this.userNameField()
      .type(loginForm.login)
      .should('have.value', loginForm.login);

    this.passwordField()
      .type(loginForm.password)
      .should('have.value', loginForm.password);
  }
}