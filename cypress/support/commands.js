Cypress.Commands.add('getUserNameAndInsert', (value) => {
    cy.get('#user-name').clear().type(value, { force: true });
  });

Cypress.Commands.add('typePassword', (password) => {
    cy.get('#password').clear().type(password, { force: true });
  });