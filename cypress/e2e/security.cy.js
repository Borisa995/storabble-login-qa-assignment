describe('Login tests', () => {
  const payload = "' OR '1'='1";

  it(`TC14 Verify SQL Injection is not possible in login form`, () => {
    cy.visit('/login', {
      auth: {
        username: Cypress.env('BASIC_AUTH_USER'),
        password: Cypress.env('BASIC_AUTH_PASS'),
      },
    });
    // click on the Ok in the cookie modal
   cy.contains('button.btn--big-red', /^ok$/i)
    .should('be.visible')
    .click();

    cy.get('input[name="email"]').clear().type(payload);
    cy.get('input[name="password"]').clear().type(payload);
    cy.get('button[type="submit"]').click();
    cy.contains('Please enter a valid email address').should('be.visible');
  });
});
