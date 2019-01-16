document.addEventListener('DOMContentLoaded', () => {
// ******************************************************


// Set focus on the first text field ("name") on page load  (good)
document.getElementById('name').focus();

// Job Role Section  (good)
    // Added 'input field' text area directly into 'index.html' file with HTML per the instructions.  
        
    // Hid above added 'input field' on page load  
        $('#other-title').hide();

    // Function to reveal the 'input field' only when "Other" is selected in the "Job Role" dropdown  
         const sectionJobRole = document.getElementById('title');
         sectionJobRole.addEventListener('change', (e) => {
            let jobRoleOption = e.target.value;
                if (jobRoleOption === 'other') {
                    $('#other-title').show();
                } else {
                    $('#other-title').hide();
                }
         });
        




// T-Shirt Info Section
    // If the "Theme-JS Puns" design is selected, make only the connected colors appear
    // If the "This-I love JS" design is selected, make only the connected colors appear
    
    // Capture the 'design' div with the ID of 'design' in a const
    const sectionDesign = document.getElementById('design');
    
    // Hide color option div on page load
         $('#colors-js-puns').hide();
    
    // Change the 'Color' dropdown menu to match the 'Design' option selected
    sectionDesign.addEventListener('change', (e) => {  
        let designOption = e.target.value;
        $('#colors-js-puns').show();
            if (designOption === 'heart js') {
                $('[value=cornflowerblue]').hide();
                $('[value=darkslategrey]').hide();
                $('[value=gold]').hide();
                $('[value=tomato]').show();
                $('[value=steelblue]').show();
                $('[value=dimgrey]').show();
            }  else if (designOption === 'js puns') {
                $('[value=tomato]').hide();
                $('[value=steelblue]').hide();
                $('[value=dimgrey]').hide();
                $('[value=cornflowerblue]').show();
                $('[value=darkslategrey]').show();
                $('[value=gold]').show();
            } 
    });

    
    
    

            






// Register for Activities Section
    // When activities are selected, set it so the conflicting activites are disable checkbox and visually indicate the workshop is not available


    // Remove conflicting designation (if any) when a checkbox is unchecked


    // Keep a running total of checked boxes so the total $ amount updates based upon selections





// Payment Info Section
    // Make payment section change to match the selected payment method option


    // Make credit card option the default
    // Display the #credit-card div, and hide the PayPal and Bitcoin info.


    // Make PayPal info display when selected, hide others


    // Make Bitcoin info display when selected, hide others


    // Ensure a payment method is selected.  Set so if "Select Payment Method" is chosen, the form won't submit
    // Ensure there is an error message for this




// Form Validation
    // Prevent the user from submitting the form in the following situations:
        // Name field can't be blank
        
        // Email field must be a properly vaild format

        // At least one checkbox in Register for Activities must be selected

        // For credit card option, require a credit card number, zip code, and CVV code
            // Credit card only accepts a number between 13-16 digits

            // Zip Code only accepts a 5 digit number

            // The CVV only acceptsa 3 digit number


    // Ensure the each area is validated (or checked) for proper format.  Throw error if not.
    // Ensure the credit card info is only validated if Credit Card is the selected payment method





// Form validation messages
    // Indicate when there is a validation error (red field borders, red text message)
    // Check default behavior - only display messages after user interaction/submission
    
    // Add error indication to these fields:
        // Name

        // Email

        // At least one check in Register for Activities

        // Credit Card number (only if the payment method is selected)

        // Zip Code (only if credit card method is selected)

        // CVV (only if credit card method is selected)





// Progressive Enhancement - ensure form works without JavaScript
    // Ensure the Other text field under Job Role is visible

    // Ensure all payment option information is visible

    // Ensure all color options are always available





// (Optional) Change CSS styles
// Ensure good comments are added    





// EXCEEDS EXPECTATIONS ITEMS ***********************************************************
    
    // T-Shirt Section
        // Hide Color label and section unless a design is selected





    // Conditional Error Message
        // Create an error message for at least one input indicating what is wrong (after sumbitted)





    // Real-Time Error Messages
        // Provide real-time validation error for at least one input field

        // Ensure submission notes say which fields have the conditional error message and which has a real-time error message




// Ending (delete)
}); 