# Test Plan – Login Functionality

## 1. Overview
This test plan defines the approach and scope for testing the login functionality of the application. The main goal is to ensure that the login process behaves as expected under various input scenarios, covering form validation, UI behavior and basic security aspects.


## 2. Objective
- Ensure that users can log in using valid credentials
- Validate required input fields (email, password), formatting, and case sensitivity
- Confirm appropriate error handling and generic messaging
- Validate usability features (disabled login, toggle visibility)
- Assess basic security and accessibility aspects of the login page

### 3. Scope:
The focus of testing is the login page of the application. The following areas are covered:

- Login with valid and invalid credentials
- Input field behavior: required fields, validations, case-sensitivity
- Password visibility toggle ("eye" icon)
- Navigation to "Forgot password" flow
- Login button enabled/disabled logic
- Incorrect email/password handling
- SQL Injection is not possible in login form
- Brute force protection - recommended

## 4. Test Approach
Testing was performed using both manual and automated methods.

Manual Testing:
19 test cases were written and executed to cover a variety of scenarios, including valid login, incorrect credentials, format validation, UI behavior, and security edge cases.
Automated Testing:
6 core test cases were automated using Cypress, focusing on high-priority scenarios like valid login, invalid input handling, toggle visibility button, and SQL injection protection. The automation scripts were developed using Visual Studio Code.

## 6. Test Data
Test data includes:

- Valid and invalid email formats
- Valid and incorrect passwords
- Inputs with special characters
- Empty input fields
- SQL injection strings (e.g. ' OR 1=1 --)


## 7. Test Environment and tools
- **Browser:** Google Chrome v125 (Chrome DevTools)
- **OS:** macOS 
- **Screen resolution:** 1440x900
- **App URL:** `https://st.storabble.etondigital.com/en/login`
- Access requires HTTP Basic Authentication:
  - Username: storabble
  - Password: ed2023
- **Code Editor** Visual Studio Code
- **Test runner** Cypress v14.4.1
- **Manual test format** .md Markdown files
- **Automation Language** JavaScript (Cypress syntax)
- **Version control** Git + GitHub

## 8. Test Types Covered

|Type	        |Description|
---------------------------------------------------------------
|Functional	  | Core login logic, field validation.           |
|Negative	    | Invalid email, wrong credentials, empty fields|
|UI/UX	      | Button behavior, password visibility toggle.  |
|Security  	  | SQL injection, brute-force protection.        |

## 9. Entry & Exit Criteria

**Entry Criteria**
The login page is deployed and accessible behind HTTP auth.
Manual and automated test environments are configured.
User credentials (valid and invalid) are available for testing.

**Exit Criteria**
All high and medium priority test cases have been executed.
All critical bugs have been reported and addressed.
Final test summary report is completed.


## 9. Deliverables

| Deliverable               | Form / Description                                                                      |
|---------------------------|-----------------------------------------------------------------------------------------|
| **Test Plan**             | `test-plan.md` – describes the test strategy, testing scope and methodology             |
| **Manual Test Cases**     | `manual-test-cases.md` – 19 manually defined test cases for the login page              |
| **Automated Tests**       |  Cypress files (`.js`) – 6 automated tests cover basic scenarios                        |
| **Test Summary Report**.  | `test-summary.md` – test results, status of each test, recommendations and bugs reports |
| **Screenshots**           | `.png` files – screenshots of relevant errors and confirmation of system behavior       |
| **Configuration Files**   | `cypress.config.js`, `.env` – test environment configuration and HTTP auth credentials  |
| **Git Repository**        | Project version with all files, commit history and Cypress tests                        |


**Tested by:** Borisa Vuckovic  
**Date:** 18.06.2025


