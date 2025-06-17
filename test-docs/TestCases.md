# Test Cases – Login Page

## TC01: Valid login with registered user

**Type:** Functional / Positive  
**Severity:** Critical  
**Priority:** High  
**Status:** Pass

**Description:**  
Verify that the user can successfully log in using a valid email and password.

**Preconditions:**  
- User is registered and has valid credentials:
  email: `vodav76919@ihnpo.com`
  password: `Testiranje1`
- The login page is accessible at: `https://st.storabble.etondigital.com/en/login`

**Test Data:**  
- Email: `vodav76919@ihnpo.com`  
- Password: `Testiranje1`

**Test Steps:**
1. Open Chrome and navigate to the login page `https://st.storabble.etondigital.com/en/login`.
2. Enter a valid email addres in the email input field.
3. Enter a valid password in the password input field.
4. Click the "Login" button.

**Expected Result:**  
- The user is successfully redirected to the "My storage listings" page. 
- No error messages are displayed.

---

## TC02: Login attempt with incorrect password

**Type:** Functional / Negative / Security  
**Severity:** High  
**Priority:** High  
**Status:** Pass

**Description:**  
Verify that the system displays the correct error message when a valid email is used with an incorrect password.

**Preconditions:**  
- User is registered and has valid credentials:
  email: `vodav76919@ihnpo.com`
  password: `Testiranje1`
- The login page is accessible at: `https://st.storabble.etondigital.com/en/login`

**Test Data:**  
- Email: `vodav76919@ihnpo.com`  
- Password: `Test1234` (invalid)

**Test Steps:**
1. Open Chrome and navigate to the login page `https://st.storabble.etondigital.com/en/login`.
2. Enter a valid email in the email input field.
3. Enter a `Test1234` password in the password input field.
4. Click the "Login" button.

**Expected Result:**  
- The user remains on the login page.
- Below the email input field, the message "Please enter a valid email address" is displayed.
- Below the password input field the message "Your password is incorrect" is displayed. 
- No redirection occurs.  

---

## TC03 – Login attempt with invalid email format - without "@" Symbol

**Type:** Functional / Negative / Validation  
**Severity:** Medium  
**Priority:** Medium  
**Status:** Pass 

**Description:**  
Verify that the system detects and rejects an email string that does not contain the "@" symbol.

**Preconditions:**  
- No existing user account is required.  
- The login page is accessible at: `https://st.storabble.etondigital.com/en/login`

**Test Data:**  
- Email: `testtest.com` (invalid format)  
- Password: `Test1234`

**Test Steps:**
1. Open Chrome and navigate to the login page `https://st.storabble.etondigital.com/en/login`.
2. Enter `testtest.com` (missing '@') in the email input field.
3. Enter any value in the password field (e.g., `Test1234`).
4. Click the “Login” button.

**Expected Result:**  
- The user remains on the login page.  
- The following error message appears below the email input field:  
  "Please enter a valid email address."  
- No form submission or server request is triggered.

---

## TC04 – Login attempt with invalid email format - without domain Name

**Type:** Functional / Negative / Validation  
**Severity:** Medium  
**Priority:** Medium  
**Status:** Pass 

**Description:**  
Verify that the system detects and handles invalid email formats correctly by displaying an appropriate error message when email adress is without domain.

**Preconditions:**  
- No existing user account is required.  
- The login page is accessible at: `https://st.storabble.etondigital.com/en/login`

**Test Data:**  
- Email: `test@test` (invalid format)  
- Password: `Test1234`

**Test Steps:**
1. Open Chrome and navigate to the login page `https://st.storabble.etondigital.com/en/login`.
2. Enter `test@test` (missing 'domain') in the email input field.
3. Enter any value in the password field (e.g., `Test1234`).
4. Click the “Login” button.

**Expected Result:**  
- The user remains on the login page.  
- The following error message appears below the email input field:  
  "Please enter a valid email address."  
- No form submission or server request is triggered.

---

## TC05 – Login attempt with invalid email format - without username

**Type:** Functional / Negative / Validation  
**Severity:** Medium  
**Priority:** Medium  
**Status:** Pass

**Description:**  
Verify that the system detects and handles an invalid email address without username in the email address.

**Preconditions:**  
- No existing user account is required.  
- The login page is accessible at: `https://st.storabble.etondigital.com/en/login`

**Test Data:**  
- Email: `@test.com` (invalid format)  
- Password: `Test1234`

**Test Steps:**
1. Open Chrome and navigate to the login page `https://st.storabble.etondigital.com/en/login`.
2. Enter `@test.com` (missing 'username') in the email input field.
3. Enter any value in the password field (e.g., `Test1234`).
4. Click the “Login” button.

**Expected Result:**  
- The user remains on the login page.  
- The following error message appears below the email input field:  
  "Please enter a valid email address."  
- No form submission or server request is triggered.

---

## TC06 – Login attempt with invalid email format - with invalid characters

**Type:** Functional / Negative / Validation  
**Severity:** Medium  
**Priority:** Medium  
**Status:** Pass

**Description:**  
Verify that the system correctly detects and rejects invalid email formats by showing an appropriate validation error, without attempting to submit the form.

**Preconditions:**  
- No existing user account is required.  
- The login page is accessible at: `https://st.storabble.etondigital.com/en/login`

**Test Data:**  
- Email: `test<>!@test.com` (invalid format)  
- Password: `Test1234`

**Test Steps:**
1. Open Chrome and navigate to the login page `https://st.storabble.etondigital.com/en/login`.
2. Enter `test<>!@test.com` (missing 'username') in the email input field.
3. Enter any value in the password field (e.g., `Test1234`).
4. Click the “Login” button.

**Expected Result:**  
- The user remains on the login page.  
- The following error message appears below the email input field: "Please enter a valid email address."  
- No form submission or server request is triggered.

---

## TC07: Login atempt with empty email and password input fields

**Type:** Functional / Negative / Usability  
**Severity:** Medium  
**Priority:** High  
**Status:** Pass 

**Description:**  
Verify that login fails when email and password input fields are left empty.

**Preconditions:**  
- No existing user account is required.  
- The login page is accessible at: `https://st.storabble.etondigital.com/en/login`

**Test Steps:**
1. Open Chrome and navigate to the login page `https://st.storabble.etondigital.com/en/login`.
2. Leave both email and password input fields empty.
3. Click the "Login" button.

**Expected Result:**  
- The form is not submitted 
- The user remains on the login page.
- Below the email input field, the message "This field is required" is displayed,
- Below the password input field the message "This field is required" is displayed. 

---

## TC08 – Login attempt with unregistered email adress

**Type:** Functional / Security / Negative  
**Severity:** Medium  
**Priority:** High  
**Status:** Pass 

**Description:**  
Verify that the system displays an appropriate error message when a user attempts to log in using an email address that is not registered.

**Preconditions:**  
- The login page is accessible at: `https://st.storabble.etondigital.com/en/login`
- Email used in the test does not exist in the base (e.g., `randomvalidemail32@yopmail.com`)

**Test Data:**  
- Email: `randomvalidemail32@yopmail.com`  
- Password: `Test1234!`

**Test Steps:**
1. Open Chrome and navigate to the login page `https://st.storabble.etondigital.com/en/login`.
2. Enter `randomvalidemail32@yopmail.com` in the email input field.
3. Enter any password (e.g., `Test1234!`) in the password input field.
4. Click the "Login" button.

**Expected Result:**  
- The user remains on the login page.  
- Below the email input field, the message "Please enter a valid email address" is displayed.
- Below the password input field the message "Your password is incorrect" is displayed. 
- No redirection to the dashboard occurs.  
- The error message does not reveal whether the email exists or not.

---

## TC09: Toggle password visibility using "eye" icon

**Type:** Functional / Usability  
**Severity:** Low  
**Priority:** Medium  
**Status:** Pass

**Description:**  
Verify that the user can toggle the visibility of the password input using the "eye" icon next to the password field.

**Preconditions:**  
- The login page is accessible at: `https://st.storabble.etondigital.com/en/login`
- A password input field is present with an "eye" icon for visibility toggle.   

**Test Steps:**
1. Open Chrome and navigate to the login page `https://st.storabble.etondigital.com/en/login`.
2. Locate the password input field and the "eye" icon next to it.
3. Enter any password (e.g., `Test1234`) into the password input field.
4. Click the "eye" icon once.
5. Observe the type of the password input field.
6. Click the "eye" icon again.
7. Observe the type of the password input field again.

**Expected Result:**  
- On first click:
  - The password becomes visible (input field changes from `type="password"` to `type="text"`).
  - The "eye" icon updates to indicate visibility (e.g., changes to "eye-icon").
- On second click:
  - The password becomes hidden again (input type reverts to `password`).
  - The icon reverts to its original state (changes to "eye-icon-closed").

---

## TC10: Forgot password link

**Type:** Functional / Navigation  
**Severity:** Low  
**Priority:** Medium  
**Status:** Pass 

**Description:**  
Verify that "Forgot password" link redirects the user to reset password page.

**Preconditions:**  
- The login page is accessible at: `https://st.storabble.etondigital.com/en/login`
- "Forgot password?" link is visible and clickable.

**Test Steps:**
1. Open Chrome and navigate to the login page `https://st.storabble.etondigital.com/en/login`.
2. Locate the "Forgot password?" link below password input field.
3. Click on the "Forgot password?" link.

**Expected Result:**  
- The user is redirected to password reset page.
- The new page displays a form or instructions for resetting the password.

---

## TC11: Login atempt with only email input field filled

**Type:** Functional / Negative  
**Severity:** Medium  
**Priority:** High  
**Status:** Pass 

**Description:**  
Verify the system behavior when the user attempts to log in with only the email input filled, leaving the password field empty.

**Preconditions:**  
- The login page is accessible at: `https://st.storabble.etondigital.com/en/login`
- Valid email requred
- No existing user account is required. 

**Test Data:**  
- Email: `randomvalidemail32@yopmail.com` 
- Password: not provided

**Steps:**
1. Open Chrome and navigate to the login page `https://st.storabble.etondigital.com/en/login`
2. Enter only email in the email input field (e.g., `randomvalidemail32@yopmail.com`) .
3. Click the "Login" button.

**Expected Result:**  
- The message is displayed below password input field: "This field is required."
- The user remains on login page.

## TC12: Login atempt with only password input field filled

**Type:** Functional / Negative  
**Severity:** Medium  
**Priority:** High  
**Status:** Pass  

**Description:**  
Verify the system behavior when the user tries to log in with only the password input filled, leaving the email field empty.

**Preconditions:**  
- The login page is accessible at: `https://st.storabble.etondigital.com/en/login`
- No existing user account is required. 

**Test Data:**  
- Password: `Test1234!`  
- Email: not provided

**Steps:**
1. Open Chrome and navigate to the login page `https://st.storabble.etondigital.com/en/login`.
2. Enter only password in the password input field (e.g., `Test1234!`) .
3. Click the "Login" button.

**Expected Result:**  
- The message is displayed below email input field: "This field is required."
- The user remains on login page.

---

## TC13: Login button remains disabled until required fields are filled

**Type:** Functional / Usability  
**Severity:** Medium  
**Priority:** Medium  
**Status:** Not Applicable

**Description:**  
Verify that the login button is disabled if both email and password fields are empty.

**Preconditions:**  
- No existing user account is required. 
- The login page is accessible at: `https://st.storabble.etondigital.com/en/login`
- Valid email 

**Test Data:**  
- Email: `randomvalidemail32@yopmail.com` (not validated against DB)  
- Password: `Test1234!` (example password)

**Test Steps:**
1. Open Chrome and navigate to the login page `https://st.storabble.etondigital.com/en/login`.
2. Leave both fields empty — observe the state of the "Login" button.
3. Enter only email (e.g., `randomvalidemail32@yopmail.com`) — observe the "Login" button.
4. Delete the inputs from the email input field.
5. Enter only password (e.g., `Test1234!`) — observe the "Login" button.

**Expected Result:**  
- In all three scenarios (empty form, only email, only password), the "Login" button should remain disabled.  
- The button should only become active when both fields are filled with values.

**Actual Result:**  
- The "Login" button is currently enabled, allowing empty or partial form submission attempts.

**Note:**  
This is not currently implemented. Considered as a usability or UX improvement.

---

## TC14: Verify SQL Injection is not possible in login form

**Type:** Security / Negative  
**Severity:** Critical  
**Priority:** High  
**Status:** Pass

**Description:**  
Verify that SQL Injection attacks are not possible via login form fields.

**Preconditions:**  
- Login page is accessible at: `https://st.storabble.etondigital.com/en/login`

**Test Steps:**
1. Go to the login page.
2. In the email field, enter: `' OR '1'='1`  
3. In the password field, enter: `' OR '1'='1`  
4. Click "Login".

**Expected Result:**  
- The system does not log the user in.
- An error message "Please enter a valid email address. below email input field is displayed.
" is displayed.
- The system does not crash or expose any database error.

---

## TC15: Case sensitivity of email input field

**Description:**  
Verify that the email input field is case-insensitive when user provides "big" letters in the username of the email address.

**Type:** Functional / Usability  
**Severity:** Medium  
**Priority:** Medium  
**Status:** Pass

**Preconditions:**  
- User `vodav76919@ihnpo.com` is registered  
- Correct password is `Testiranje1`  
- User is logged out 
- The login page is accessible at: `https://st.storabble.etondigital.com/en/login`

**Test Data:**  
- Email: `VodaV76919@ihnpo.com`  
- Password: `Testiranje1`

**Test Steps:**
1. Open Chrome and navigate to the login page `https://st.storabble.etondigital.com/en/login`.
2. Enter `VodaV76919@ihnpo.com` in email input field.
3. Enter the correct `Testiranje1` password.
3. Click the "Login" button.

**Expected Result:**  
- The user is successfully redirected to the "My storage listings".  
- No error messages are shown.  
- Email casing has no impact on authentication.

---

## TC16: Verify that password is case-sensitive during login validation

**Type:** Functional / Security 
**Severity:** Medium  
**Priority:** Medium  
**Status:** Pass

**Description:**  
Verify that the login fails if the entered password casing does not match the originally registered password.

**Preconditions:**  
- User `vodav76919@ihnpo.com` is registered  
- Correct password is `Testiranje1`  
- User is logged out  
- The login page is accessible at: `https://st.storabble.etondigital.com/en/login`

**Test Data:**
- Email: `vodav76919@ihnpo.com`
- Password: `TestirAnjE1` (incorrect password)


**Test Steps:**
1. Open Chrome and navigate to the login page `https://st.storabble.etondigital.com/en/login`.
2. Enter `vodav76919@ihnpo.com` in the email input field.
3. Enter password `TestirAnjE1`.
4. Click the "Login" button.

**Expected Result:**  
- The user remains on the "Login" page.
- The error message "Your password is incorrect." appears below password input field.
- The error message "Please enter a valid email address." appears below email input field.

---

## TC17: Visual Feedback on Invalid Login

**Type:** UI/UX  
**Priority:** Medium  
**Severity:** Medium  
**Status:** Pass

**Description:**  
Verify that when the user enters incorrect login credentials, the system provides clear visual feedback including an error message and highlighted input field.

**Preconditions:**
- User `vodav76919@ihnpo.com` is registered with correct password `Testiranje1`
- User is logged out
- The login page is accessible at: `https://st.storabble.etondigital.com/en/login`

**Test Data:**
- Email: `vodav76919@ihnpo.com`
- Password: `Test1234!` (incorrect password)

**Test Steps:**
1. Open Chrome and navigate to the login page `https://st.storabble.etondigital.com/en/login`
2. Enter valid email `vodav76919@ihnpo.com` in the email input field
3. Enter incorrect password `Test1234!` in the password input field
4. Click the "Login" button

**Expected Result:**
- Login attempt fails
- User remains on the login page
- An error message is displayed below password input field. 
- The password field is visually highlighted (e.g., red border, warning icon)

---

## TC18: Login attempt with short password (no character length validation)

**Type:** Functional / Negative / Security  
**Severity:** Medium  
**Priority:** Medium  
**Status:** Pass

**Description:**  
Verify that when a password shorter than the required length is entered, and the system does not perform length validation, a generic error message is shown ("Your password is incorrect").

**Preconditions:**  
- User is registered and has valid credentials:  
  email: `vodav76919@ihnpo.com`  
  password: `Testiranje1`  
- The login page is accessible at: `https://st.storabble.etondigital.com/en/login`  
- The system does not perform character length validation on the password field.

**Test Data:**  
- Email: `vodav76919@ihnpo.com`  
- Password: `a` (1 character)

**Test Steps:**
1. Open Chrome and navigate to the login page `https://st.storabble.etondigital.com/en/login`.
2. Enter a valid email in the email input field.
3. Enter the password `a` in the password input field.
4. Click the "Login" button.

**Expected Result:**  
- The user remains on the login page.
- Below the password input field, the message "Your password is incorrect" is displayed.
- Below the emaik input field, the message "Please enter a valid email address." is displayed.
- No redirection occurs.




