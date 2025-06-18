describe('Login tests', () => {

  beforeEach(() => {
    cy.visit('/login', {
      auth: {
        username: Cypress.env('BASIC_AUTH_USER'),
        password: Cypress.env('BASIC_AUTH_PASS')
      }
    });
    cy.contains('button.btn--big-red', /^ok$/i)
    .should('be.visible')
    .click();

  });

  it('TC02 Login attempt with incorrect password', () => {
   
    cy.get('input[name="email"]').type('vodav76919@ihnpo.com');
    cy.get('input[name="password"]').type('Test1234');
    cy.get('button[type="submit"]').click();
    cy.contains('Please enter a valid email address').should('be.visible');
    cy.contains('Your password is incorrect').should('be.visible');

    Cypress.on('uncaught:exception', (err, runnable) => {
      if (err.message.includes('401') || err.message.includes('Unauthorized')) {
        return false;
      }
    });
  });

  it('TC03 Login attempt with invalid email format', () => {
    cy.get('input[name="email"]').type('test@test');
    cy.get('input[name="password"]').type('Test1234');
    cy.get('button[type="submit"]').click();

    cy.contains('Please enter a valid email').should('be.visible');
  });

it('TC07: Login atempt with empty email and password input fields', () => {
    cy.get('button[type="submit"]').click();
    cy.contains('This field is required').should('be.visible');~
    cy.contains('This field is required').should('be.visible');

});
 });
