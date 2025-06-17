describe('Login tests', () => {
     it('TC09: Toggle password visibility using "eye" icon', () => {
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

    cy.get('input[name="password"]').type('Test1234'); 
    cy.get('.eye-icon-closed').click(); 
    cy.get('#password').should('have.attr', 'type', 'text');
    cy.get('.eye-icon').click();
    cy.get('#password').should('have.attr', 'type', 'password');

     });
  });
