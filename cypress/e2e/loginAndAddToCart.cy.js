import LoginAndCart from '../pages/loginAndCart'

const loginAndCart = new LoginAndCart();


describe('Login and Cart Item', () => {
  it('should login and cart item successfully', () => {
    loginAndCart.visit();
    loginAndCart.insertUserName();
    loginAndCart.insertPassword();
    loginAndCart.LoginToHome();
    cy.url().should('include', '/inventory.html');
    cy.contains('Swag Labs').should('be.visible');
    loginAndCart.addToCart()
    cy.wait(10000);
  });
});