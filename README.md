# Build an Interactive Form
# Nguyen Pham
 <jQuery>
 
 *** Using the popular jQuery library to complete this project.
 *** Validating user input and providing helpful error messages when the user enters invalid information into the form fields.
 
* When the page first loads, the first text field should be in focus by default.
* Section: 
  1. ”Job Role”:
    Include a text field that will be revealed when the "Other" option is selected from the "Job Role" drop down menu.

  2. "T-Shirt Info”:
    For the T-Shirt "Color" menu, only display the color options that match the design selected in the "Design" menu. When a new theme is selected from the "Design" menu, the "Color" field and drop down menu is updated.

  3. ”Register for Activities”:
    Some events are at the same day and time as others. If the user selects a workshop, don't allow selection of a workshop at the same day and time
    As a user selects activities, a running total should display below the list of checkboxes
 
  4. "Payment Info":
    The "Credit Card" payment option should be selected by default.
    When a user selects the "PayPal" payment option, the PayPal information should display.
    When a user selects the "Bitcoin" payment option, the Bitcoin information should display.
  
* Preventing the user from submitting the form: (Using Regular Expression)
  1. Name field can't be blank.
  2. Email field must be a validly formatted e-mail address.
  3. User must select at least one checkbox under the "Register for Activities" section.
  4. If "Credit Card": Credit Card field should only accept a number between 13 and 16 digits.
                       The Zip Code field should accept a 5-digit number.
                       The CVV should only accept a number that is exactly 3 digits long.
* Provide some kind of indication when there’s a validation error.
* The user should still have access to all form fields and payment information if JS isn't working for whatever reason.

