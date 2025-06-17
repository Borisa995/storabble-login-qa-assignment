describe('Login tests', () => {
  it('TC02 Login attempt with incorrect password', () => {
    cy.visit('https://st.storabble.etondigital.com/en/login', {
      auth: {
        username: Cypress.env('BASIC_AUTH_USER'),
        password: Cypress.env('BASIC_AUTH_PASS')
      }
    });
    // click on the Ok in the cookie modal
  cy.get('body').then(($body) => {
  if ($body.find('button[type="button"]').length > 0 && $body.text().includes('Ok')) {
    cy.contains('button', 'Ok').click();
  }
});
    cy.get('input[name="email"]').type('vodav76919@ihnpo.com');
    cy.get('input[name="password"]').type('Test1234');
    cy.get('button[type="submit"]').click();

    cy.contains('Please enter a valid email address').should('be.visible');
    cy.contains('Your password is incorrect').should('be.visible');
  });
});

beforeEach('Login tests', () => {
     it('TC03: Login attempt with invalid email format ', () => {
  cy.visit('https://st.storabble.etondigital.com/en/login', {
    auth: {
      username: Cypress.env('BASIC_AUTH_USER'),
      password: Cypress.env('BASIC_AUTH_PASS')
    }
  });
    // click on the Ok in the cookie modal
   cy.contains('button.btn--big-red', /^ok$/i)
    .should('be.visible')
    .click();

    cy.get('input[name="email"]').type('test@test');
    cy.get('input[name="password"]').type('Test1234');
    cy.get('button[type="submit"]').click();

    cy.contains('Please enter a valid email').should('be.visible');
     });
  });


beforeEach('Login tests', () => {
     it('TC07: Login atempt with empty email and password input fields', () => {
  cy.visit('https://st.storabble.etondigital.com/en/login', {
    auth: {
      username: Cypress.env('BASIC_AUTH_USER'),
      password: Cypress.env('BASIC_AUTH_PASS')
    }
  });
    // click on the Ok in the cookie modal
  cy.contains('button.btn--big-red', /^ok$/i)
    .should('be.visible')
    .click();
    
     cy.get('button[type="submit"]').click();

    cy.contains('This field is required').should('be.visible');~
    cy.contains('This field is required').should('be.visible');
    });
  });