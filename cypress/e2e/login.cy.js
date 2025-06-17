describe('Login tests', () => {
  it('TC01 Valid login with registered user', () => {
    cy.visit('/login', {
      auth: {
        username: Cypress.env('BASIC_AUTH_USER'),
        password: Cypress.env('BASIC_AUTH_PASS')
      }
    });
    // click on the Ok in the cookie modal
   cy.contains('button.btn--big-red', /^ok$/i)
    .should('be.visible')
    .click();

    cy.get('input[name="email"]').type('vodav76919@ihnpo.com');
    cy.get('input[name="password"]').type('Testiranje1');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', 'en/listings?page=1');
    cy.get('.error-message').should('not.exist');
  });
});

