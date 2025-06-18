# Test Summary Report – Login Functionality

## 1. Overview
Manual testing was carried out on the login feature to see how the system responds to different types of input — both correct and incorrect. The main focus was to make sure that logging in works as expected, error messages show up where they should, and the overall user experience is smooth. Some basic security checks were also included, like input validation and handling of potentially unsafe entries.

Test coverage included:

Successful login with valid credentials.
Handling of incorrect passwords and invalid email formats.
Input validation for empty fields and character length boundaries.
Functionality of the password visibility toggle.
Security input handling, such as SQL injection attempts and Brute-force protection.
In total, 19 test cases were executed. Most of the test cases passed successfully. Two test cases were marked as Not Applicable and logged as a recommendation for UX and security improvement. 
Additionally, a UI-related bug was discovered during exploratory testing, outside of scripted test cases.

## 2. Test Environment
- **OS:** macOS 
- **Browser:** Chrome v125  
- **Screen resolution:** 1440x900  
- **Tested on:** `https://st.storabble.etondigital.com/en/login`  
- **Tester:** Borisa Vuckovic

---

## 3. Test Case Results

| TC ID   | Description                                                         | Type                 | Status | Notes / Bug ID                              |
|---------|---------------------------------------------------------------------|----------------------|--------|---------------------------------------------|
| TC01    | Valid login with registered user                                    | Functional/Positive  |  PASS |                                              |
| TC02    | Login attempt with incorrect password                               | Functional/Negative  |  PASS |                                              |
| TC03    | Login attempt with invalid email format - without "@" Symbol        | Functional/Negative  |  PASS |                                              |
| TC04    | Login attempt with invalid email format - without domain Name       | Functional/Negative  |  PASS |                                              |
| TC05    | Login attempt with invalid email format - without username          | Functional/Negative  |  PASS |                                              |
| TC06    | Login attempt with invalid email format - with invalid characters   | Functional/Negative  |  PASS |                                              |
| TC07    | Login atempt with empty email and password input fields             | Functional/Negative  |  PASS |                                              |
| TC08    | Login attempt with unregistered email adress                        | Functional/Negative  |  PASS |                                              |
| TC09    | Toggle password visibility using "eye" icon                         | UI/UX/Functional     |  PASS |                                              |
| TC10    | Forgot password link                                                | Functional/Navigation|  PASS |                                              |
| TC11    | Login atempt with only email input field filled                     | Functional/Negative  |  PASS |                                              |
| TC12    | Login atempt with only password input field filled                  | Functional/Negative  |  PASS |                                              |
| TC13    | Login button remains disabled until required fields are filled      | Functional/Usability |  N/A  | Not implemented – UX suggestion             |
| TC14    | Verify SQL Injection is not possible in login form                  | Security/Negative    |  PASS |                                              |
| TC15    | Case sensitivity of email input field                               | Functional/Usability |  PASS |                                              |
| TC16    | Verify that password is case-sensitive during login validation      | Functional/Security  |  PASS |                                              |
| TC17    | Visual Feedback on Invalid Login                                    | UI/UX                |  PASS |                                              |
| TC18    | Login attempt with short password (no character length validation)  | Security/Negative    |  PASS |                                              |
| TC19    | Brute-force protection                                              | Security/Negative    |  N/A  | Not implemented – suggested as improvement   |  
---

## 4. Automated Test Case Results (Cypress)

| Test Script ID  | Description                                              | Type                 | Status  | Notes                       |
|-----------------|----------------------------------------------------------|----------------------|---------|-----------------------------|
| AUTO_TC01       | Valid login with registered user                         | Functional/Positive  |  PASS |                               |
| AUTO_TC02       | Login attempt with incorrect password                    | Functional/Negative  |  PASS |                               |
| AUTO_TC03       | Login attempt with invalid email format                  | Functional/Negative  |  PASS |                               |
| AUTO_TC07       | Login atempt with empty email and password input fields  | Functional/Negative  |  PASS |                               |
| AUTO_TC09       | Toggle password visibility using "eye" icon              | UI/UX/Functional     |  PASS |                               |
| AUTO_TC14       | SQL injection protection check                           | Security/Negative    |  PASS |                               |
---

## 5. Overall Test Execution Summary

| Status       | Manual Count | Auto Count | Total Count | Percentage  |
|--------------|--------------|------------|-------------|-------------|
|  PASS        | 17           | 6          | 23          | 92%         |
|  N/A         | 2            | 0          | 2           | 8%          |
|  FAIL        | 0            | 0          | 0           | 0.0%        |

Automated tests currently cover main positive and negative flows. Manual testing covers exploratory, UI, and edge cases.

 **Note:** Two test cases were marked as "Not Applicable" because related features (brute-force protection and disabled button behavior) haven't been implemented yet. Both are logged as improvement suggestions.

---

## 6. Bugs Found During Testing

| Bug ID   | Title                                                | Severity | Priority | Status | Found During          |
|----------|------------------------------------------------------|----------|----------|--------|-----------------------|
| UI-001   | Password text overlaps with visibility icon (eye)    | Medium   | Medium   | Open   | Exploratory testing   |

This issue was found during unscripted, manual exploratory testing, outside of predefined test cases.

## Bug Report: UI-001 – Password text overlaps with visibility icon (eye)

**Summary:**  
When a user enters a long password into the login input field, the password characters begin to overlap with the eye icon used for toggling visibility. This causes readability issues, especially when the visibility is toggled on.

**Steps to Reproduce:**  
1. Navigate to the login page: `https://st.storabble.etondigital.com/en/login`  
2. Click on the password input field.
2. Enter a long password such as `testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest`.
3. Observe the right end of the password input field near the eye icon.
4. Click on the "eye" toggle visability icon to see full overlap.

**Expected Result:**  
Password characters should not visually overlaps with the eye icon regardless of length.

**Actual Result:**  
The eye icon partially covers the password input characters when a long password is entered.

**Environment:**  
- macOS 
- Chrome v125  
- Resolution: 1440x900

**Attachments:**  
- `The text is nof fully visible in the password input field.png` (attached in the screenshots folder)

---

## 7. Conclusion

The login feature is stable across both manual and automated tests. Automated tests improve reliability and save time on regression, while manual tests ensure thorough coverage of UX and edge scenarios.
All main login scenarios work as expected. Input validation behaves correctly, error messages are clear. Basic security checks (like SQL injection protection) are in place.

One minor UI issue was found and logged, and two missing features (brute-force protection and login button behavior) were noted as usability/security recommendations.
Also as recommendation is to consider showing a single generic message for login feedback consistency when the user does not provide valid password

---

## 7. Recommendations

- **Security:** Add brute-force protection feature (e.g. account lockout, CAPTCHA, or delay after failed attempts).
- **UX:** Disable the "Login" button if both fields are empty to guide the user more clearly (TC13).
- **UX/Security** Login feedback consistency. Current behaviour shows both "Please enter a valid email address." and "Your password is incorrect.". Consider showing a single generic message like "Invalid email or password" to improve security and UX.


---

**Prepared by:** Borisa Vuckovic  
**Date:** 18.06.2025


