# Test Plan – Login Functionality

## 1. Overview
This plan describes the approach to manually test the login functionality of the web application, focusing on functionality, validation, security, usability, and accessibility.


## 2. Objective
- Ensure that users can log in using valid credentials
- Validate input fields (email, password) for required, formatting, and case-sensitivity
- Confirm appropriate error handling and generic messaging
- Validate usability features (disabled login, toggle visibility, navigation)
- Assess basic security and accessibility aspects of the login page

## 3. Scope

### In Scope:
- Login with valid and invalid credentials
- Input field behavior: required fields, validation, case-sensitivity
- Password visibility toggle ("eye" icon)
- Navigation to "Forgot password" flow
- Login button enabled/disabled logic
- Incorrect email/password handling
- SQL Injection is not possible in login form
- Accessibility features: keyboard focus, screen reader compatibility

### Out of Scope:
- Registration and account creation
- Password reset flow

## 4. Test Approach
- Manual testing
- Black-box methodology
- Test cases based on UI elements, ACs, and UX
- Functional, UX, security, and accessibility categories

## 5. Test Environment
- **Browser:** Google Chrome v125
- **OS:** macOS Ventura 13.5
- **Screen resolution:** 1440x900
- **App URL:** `https://st.storabble.etondigital.com/en/login`

## 6. Test Scenarios

1. Login with valid credentials (positive flow)
2. Login with incorrect password
3. Login with invalid email format (special characters)
4. Login with email missing username
5. Login with email missing domain
6. Login with email missing "@"
7. Login with both fields empty
8. Login with unregistered email
9. Login attempt with only email field filled
10. Login attempt with only password field filled
11. Login button remains disabled until required fields are filled (if applicable)
12. Forgot password link redirects correctly
13. Password field is case-sensitive
14. Email field is case-insensitive
15. SQL Injection is not possible in login form
16. Accessibility – keyboard and screen reader navigation
17. Toggle password visibility using “eye” icon
18. Visual Feedback on Invalid Login
19. Login attempt with short password - generic error message displayed

## 7. Entry Criteria
- Login page is accessible
- UI elements are in place
- Test data (valid credentials) is available
- Functional specifications and AC are available

## 8. Exit Criteria
- All planned test cases executed
- Critical bugs are reported
- Test report is delivered

## 9. Tools
- VS Code (for documentation)
- Chrome DevTools (DOM inspection, console errors)
- https://temp-mail.org/en/ - for test email 
- Cypress (planned for automation phase)

## 10. Deliverables
- `test-cases.md` with detailed cases
- `test-report.md` summarizing results
-  Screenshots of defects (if any)
