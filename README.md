## OUTLINE

Build an interactive user registration form that provides clear validation feedback to prevent errors and remembers some basic user input for convience.


# RESOURCES
- MDN (https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation)
- W3Schools (https://www.w3schools.com/js/js_validation.asp)


### REFLECTIONS
1. The event.preventDefault() method stopped the default action of the form submit, which is to reload the page.

2. HTML built in validation offers limited customization and just provide the baseline for validation, whereas using javascript for validation provides better control and allows for dynamic feedback. You could use both as a backup to one another and it would add an extra layer of protection against errors in a form.

3. I used localStorage with the methods setItem() and getItem(), respectively, to store and retrieve the username. The limitation of local storage for storing sensitive data is that it causes issues with the sercurity of that data because any JavaScript code running on the page has access to all the data in the local storage.

4. I didn't really face any challenges with real-time validation.

5. I gave the input fields an event listener set to blur so that the user gets a chance to enter in the value fully before any validation pops up. 
