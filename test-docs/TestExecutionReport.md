# Test Summary Report – Login Functionality

## 1. Overview
Manual testing was performed on the login functionality to check how the system behaves with both valid and invalid inputs. The focus was on verifying core functionality, form behavior, error messages, and basic security handling.

## 2. Test Environment
- **OS:** macOS 
- **Browser:** Chrome v125  
- **Screen resolution:** 1440x900  
- **Tested on:** `https://st.storabble.etondigital.com/en/login`  
- **Tester:** Borisa Vuckovic

---

## 3. Test Case Results

| TC ID   | Description                                   | Type         | Status | Notes / Bug ID                              |
|---------|-----------------------------------------------|--------------|--------|----------------------------------------------|
| TC01    | Login with valid credentials                  | Positive     |  PASS |                                              |
| TC02    | Login with incorrect password                 | Negative     |  PASS |                                              |
| TC03    | Email format validation                       | Negative     |  PASS |                                              |
| TC04    | Submit with both fields empty                 | Negative     |   PASS |                                              |
| TC05    | Toggle password visibility                    | UI/UX        |  PASS |                                              |
| TC06    | Forgot password link redirects correctly      | Functional   |  PASS |                                              |
| TC06a   | Missing '@' in email                          | Negative     |  PASS |                                              |
| TC06b   | Missing domain in email                       | Negative     |  PASS |                                              |
| TC06c   | Special characters in email                   | Negative     |  PASS |                                              |
| TC07    | Only one field filled                         | Negative     |  PASS |                                              |
| TC08    | SQL injection attempt                         | Security     |  PASS |                                              |
| TC09    | Forgot password flow                          | Functional   |  PASS |                                              |
| TC10    | Only email entered                            | Negative     |  PASS |                                              |
| TC11    | Only password entered                         | Negative     |  PASS |                                              |
| TC12    | Re-check password visibility toggle           | UI/UX        |  PASS |                                              |
| TC15    | Password case sensitivity                     | Functional   |  PASS |                                              |
| TC16    | Email field case insensitivity                | Functional   |  PASS |                                              |
| TC17    | Brute-force protection                        | Security     |  N/A  | Not implemented – suggested as improvement   |
| TC19    | Login button disabled when fields are empty   | Usability    |  N/A  | Not implemented – UX suggestion              |

---

## 4. Automated Test Case Results (Cypress)

| Test Script ID  | Description                          | Type         | Status  | Notes                       |
|-----------------|------------------------------------|--------------|---------|-----------------------------|
| AUTO_TC01       | Valid login flow                   | Positive     |  PASS | Runs on every PR build       |
| AUTO_TC02       | Invalid password attempt           | Negative     |  PASS |                             |
| AUTO_TC03       | Email format validation            | Negative     |  PASS |                             |
| AUTO_TC08       | SQL injection protection check    | Security     |  PASS |                             |

---

## 5. Overall Test Execution Summary

| Status       | Manual Count | Auto Count | Total Count | Percentage  |
|--------------|--------------|------------|-------------|-------------|
|  PASS      | 17           | 4          | 21          | 91.3%       |
|  N/A       | 2            | 0          | 2           | 8.7%        |
|  FAIL      | 0            | 0          | 0           | 0.0%        |

 Automated tests currently cover key positive and negative flows, helping speed up regression cycles. Manual testing covers exploratory, UI, and edge cases.

 **Note:** Two test cases were marked as *Not Applicable* because related features (brute-force protection and disabled button behavior) haven't been implemented yet. Both are logged as improvement suggestions.

---

## 6. Bugs Found During Testing

| Bug ID   | Title                                                | Severity | Priority | Status | Found During         |
|----------|------------------------------------------------------|----------|----------|--------|-----------------------|
| UI-001   | Password briefly visible before masking              | Low      | Low      | Open   | Exploratory testing   |

This issue was found during unscripted, manual exploratory testing, outside of predefined test cases.

## Bug Report: UI-001 – Password briefly visible before masking

**Summary:**  
When typing a password into the input field, the last typed character is briefly visible before it gets masked by the dot (●) symbol.

**Steps to Reproduce:**  
1. Navigate to the login page: `https://example-staging-login.com`  
2. Focus on the password input field.  
3. Type a password character by character.  
4. Observe how each new character is briefly shown before being hidden.

**Expected Result:**  
Password characters should be hidden (masked) instantly as they are typed, without any visual delay.

**Actual Result:**  
Each character is visible for a fraction of a second before being masked.

**Severity:** Low (UI-related)

**Priority:** Low

**Environment:**  
- macOS 
- Chrome v125  
- Resolution: 1440x900

**Attachments:**  
- `screenshot_UI001.png` (attached in the report folder)
- (Optional: screen recording or Cypress repro if available)

---

## 7. Conclusion

The login feature is stable across both manual and automated tests. Automated tests improve reliability and save time on regression, while manual tests ensure thorough coverage of UX and edge scenarios.
All main login scenarios work as expected. Input validation behaves correctly, error messages are clear, and common edge cases are handled well. Basic security checks (like SQL injection protection) are in place.

One minor UI issue was found and logged, and two missing features (brute-force protection and login button behavior) were noted as usability/security recommendations.

---

## 7. Recommendations

- **Security:** Add brute-force protection mechanisms (e.g. account lockout, CAPTCHA, or delay after failed attempts).
- **UX:** Disable the "Login" button if both fields are empty to guide the user more clearly (TC19).
- **UI Polish:** Fix the brief delay in password masking (Bug UI-001).
- **Optional:** Consider showing password complexity requirements on login/registration pages.

---

**Prepared by:** Borisa Vuckovic  
**Date:** 17.06.2025


