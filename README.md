## README

**Project** Login Page Testing

This repository contains a complete test suite for the login functionality, including manual test documentation and automated tests implemented using Cypress.

**Project Structure**

```
Storabble-login-qa-assignment/
│
├── cypress/
│   ├── e2e/                   # Contains 6 Cypress test files for login scenarios
│   ├── fixtures/              # Includes example test data (example.json)
│   ├── screenshots/           # (Empty or used for Cypress screenshot captures)
│   └── support/               # Cypress support files (commands.js, e2e.js)
│
├── node/
│ 
│── test-docs/
│       ├
│       ├── screenshots/              # One image (e.g. for documentation/reporting)
│       ├── test_cases.md             # 19 manually written test cases
│       ├── test_plan.md              # Detailed test plan
│       └── test_execution_report.md  # Summary of manual and automated test results
│
├── cypress.config.js          # Cypress configuration file
├── package.json               # Node project dependencies and scripts
├── package-lock.json          # Lock file for consistent dependency versions
└── README.md
```
---

## Manual Test Cases (Login Page)
- Total test cases: 19
 - Login with valid and invalid credentials
 - Input field behavior: required fields, validations, case-sensitivity
 - Password visibility toggle ("eye" icon)
 - Navigation to "Forgot password" flow
 - Login button enabled/disabled logic
 - Incorrect email/password handling
 - SQL Injection is not possible in login form
 - Brute force protection - recommended

All manual test cases are located in the `test-docs` folder as individual `test-cases.md` file.
The Test plan is located in the `test-docs` folder as individual `test-plan.md` file.
The Test execution report is located in the `test-docs` folder as individual `test-summary.md` file.

---

## Automated Tests (Cypress)

- Total tests: 6
- Tests cover core login page functionalities:
  - Valid login with registered user 
  - Login attempt with incorrect password  
  - Login attempt with invalid email format 
  - Login atempt with empty email and password input fields 
  - Toggle password visibility using "eye" icon 
  - SQL injection protection check   

Tests are implemented in `cypress/e2e/login.cy.js`, `cypress/e2e/security.cy.js`, `cypress/e2e/ui-ux.cy.js`, `cypress/e2e/validations.cy.js`

---

## Test Plan

The detailed test plan is available in `test-plan.md` and includes:

- Testing objectives
- Scope of testing
- Testing methods (manual, automated)
- Resources and tools (Cypress, browsers, devices)
- Entry and exit criteria 
- Deliverables
- Test types

---

## Test Summary

Test summary is in the `test-summary.md` file and includes:

- Results of all manual and automated tests
- Overview of bugs and issues found
- Conclusion
- Recommendations for further testing and improvements
- Test success statistics

---

## Running Automated Tests

- To try out the automated tests written for the login page, follow these steps to get everything up and running.

- Before you start, make sure you have: Node.js installed and npm
- To check, you can run:
 - node -v
 - npm -v

1. Install dependencies:
 - npm install

2. Run Cypress tests:
Open Cypress Test Runner (interactive mode)
 - npx cypress open

This will open the Cypress UI. When you select the e2e test and redirects to the browser you will se the test files:

`cypress/e2e/login.cy.js`,
`cypress/e2e/security.cy.js`, 
`cypress/e2e/ui-ux.cy.js`,
`cypress/e2e/validations.cy.js`

Click on any of them to start the tests.

For example:
Click on `login.cy.js` to run test that cover a successful login flow with valid credentials.

---

**Author:** Borisa Vuckovic 
**Date:** 18.06.2025.
