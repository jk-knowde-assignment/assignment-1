import { Product } from "data";
import IPage from "pages/IPage";

export default class InventoryPage implements IPage {

  public path = "/inventory.html";

  private openSidebarButton = () => cy.get('#react-burger-menu-btn');
  private closeSidebarButton = () => cy.get('#react-burger-cross-btn');
  private logoutMenuButton = () => cy.get('#react-burger-cross-btn');
  private addToCartButtonFor = (productType: string) => cy.getByTestId(`add-to-cart-sauce-labs-${productType}`);
  private shoppingCartButton = () => cy.get(".shopping_cart_link");

  public isLogoutButtonVisible() : void {
    this.logoutMenuButton().should('be.visible');
  }

  public isUserLoggedIn() {
    this.inSidebar(() => {
      this.isLogoutButtonVisible();
    });
    this.isUserNameIsSessionStorageSet();
  }

  public inSidebar(action: () => void) : void {
    this.openSidebarButton().click();
    action();
    this.closeSidebarButton().click();
  }

  public isUserNameIsSessionStorageSet() : void {
    cy.window().then((window) => {
      cy.wrap(window.sessionStorage.getItem('session-username'))
        .should('not.be.null')
        .should('have.text', ' standard_user');
    });
  }

  public clickAddToCartButtonFor(productType: Product) {
    this.addToCartButtonFor(productType).click();
  }

  public clickShoppingCartButton() {
    this.shoppingCartButton().click();
  }
}