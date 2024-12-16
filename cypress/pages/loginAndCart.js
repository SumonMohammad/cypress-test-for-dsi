class LoginAndCart {
    visit() {
      cy.visit('/'); // Adjust the URL path as needed
    }

    insertUserName(userName) {
        cy.getUserNameAndInsert('standard_user');

    }

    insertPassword(password) {
        cy.typePassword('secret_sauce');
    }

    LoginToHome() {
      cy.get('#login-button').click();
    }


    addToCart() {
          cy.get('#add-to-cart-sauce-labs-bike-light').click();
        }

  }

  export default LoginAndCart;