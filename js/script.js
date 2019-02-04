//document.addEventListener('DOMContentLoaded', () => {
// ******************************************************


// Set focus on the first text field ("name") on page load  (good)
$('#name').focus();



// Job Role Section  (good)
    // Added 'input field' text area directly into 'index.html' file with HTML per the instructions.     
    // Hide above added 'input field' on page load  
        $('#other-title').hide();

    // Function to reveal the 'input field' only when "Other" is selected in the "Job Role" dropdown  
         const $sectionJobRole = document.getElementById('title');
         $sectionJobRole.addEventListener('change', (e) => {
            let jobRoleOption = e.target.value;
                if (jobRoleOption === 'other') {
                    $('#other-title').show();
                } else {
                    $('#other-title').hide();
                }
         });

         



// T-Shirt Info Section (good)
    const $colorOption = $('#colors-js-puns');
    const $designOption = $('#design');

    // Hide the 'Color' dropdown menu on page load
         $colorOption.hide();
        
    // Reveals the 'Color' dropdown menu when the 'js puns' or 'heart js' 'Design' option is selected      
    // Changes the 'Color' dropdown menu to match the respective 'Design' option selected
    $($designOption).change(function() {
        // When the 'js puns' option is selected
        if ($designOption.val() === 'js puns') {
            $colorOption.show();
            $('#color').val('cornflowerblue');
            $('#color option[value="cornflowerblue"]').show();
            $('#color option[value="darkslategrey"]').show();
            $('#color option[value="gold"]').show();
            $('#color option[value="tomato"]').hide();
            $('#color option[value="steelblue"]').hide();
            $('#color option[value="dimgrey"]').hide();
        // When the 'heart js' option is selected    
        } else if ($designOption.val() === 'heart js') {
            $colorOption.show();
            $('#color').val('tomato');
            $('#color option[value="cornflowerblue"]').hide();
            $('#color option[value="darkslategrey"]').hide();
            $('#color option[value="gold"]').hide();
            $('#color option[value="tomato"]').show();
            $('#color option[value="steelblue"]').show();
            $('#color option[value="dimgrey"]').show();
        // Hides the 'Color' dropdown menu when the 'selectTheme' option is selected
        } else if ($designOption.val() === 'selectTheme') {
            $colorOption.hide();
        }
   });
    
    



// Registration for Activities Section

    // Selects the checkboxes for each activity (good)
    const $mainConference = $('.activities input[name="all"]');
    const $javascriptFrameworks = $('.activities input[name="js-frameworks"]');
    const $javascriptLibraries = $('.activities input[name="js-libs"]');
    const $express = $('.activities input[name="express"]');
    const $node = $('.activities input[name="node"]');
    const $buildTools = $('.activities input[name="build-tools"]');
    const $npm = $('.activities input[name="npm"]');

    // Selects the label text for each of the activity options (good)
    const activitiesLabel = $('.activities label'); 

    // For the 'if' statements, when an activity is selected, sets it so the conflicting activity's checkbox is unavailable and visually indicates the workshop is not available (good)
    // For the 'else' statements, unmarks the conflicting activites when the respective conflicting activity is unchecked (good)
    const $checkedBoxSearch = $('.activities [type=checkbox]'); 

    $checkedBoxSearch.on('click', () => {
        if ($($javascriptFrameworks).prop('checked')) {
            $express.prop('disabled', true);
            activitiesLabel[3].style.color = 'gray';
        }  else {
            $express.prop('disabled', false);
            activitiesLabel[3].style.color = 'black';   
            }
        if ($($javascriptLibraries).prop('checked'))  {
            $node.prop('disabled', true);
            activitiesLabel[4].style.color = 'gray';
        } else {
            $node.prop('disabled', false);
            activitiesLabel[4].style.color = 'black';  
            }
        if ($($express).prop('checked')) {
            $javascriptFrameworks.prop('disabled', true);
            activitiesLabel[1].style.color = 'gray';
        } else {
            $javascriptFrameworks.prop('disabled', false);
            activitiesLabel[1].style.color = 'black';
            }
        if ($($node).prop('checked')) {
            $javascriptLibraries.prop('disabled', true);
            activitiesLabel[2].style.color = 'gray';
        } else {
            $javascriptLibraries.prop('disabled', false);
            activitiesLabel[2].style.color = 'black';
            } 
    });





// Keep a running total of checked boxes so the total $ amount updates based upon selections (good)
    
    // Dynamically create and add an h3 element to display the running total cost upon checkbox click
    let activities = document.querySelector('.activities');
    let $h3 = document.createElement('h3');
    activities.appendChild($h3);
    $h3.className = 'total';

    // Select all of the checkbox input items
    const checkedInputBox = $('input:checkbox');

    // Checks to see if the first checkbox is selected (Main Conference) because it has a higher value (cost) than the other selections
    checkedInputBox.each(function(index, element) {
        if (index === 0) {
            $(element).prop('value', 200);
        } else {
            $(element).prop('value', 100);
        }   
    });

    // Sets the initial total amount to zero
    // Listens for a click on checkbox(es) and adds the corresponding value (cost) to the running total amount in the h3
    checkedInputBox.on('change', function() {
        let totalAmount = 0;
        checkedInputBox.each(function() {
            if ($(this).is(':checked')) {
                totalAmount += Number($(this).val());
            }
        });
        $('.total').text(`Total: $${totalAmount}`);
    });

    

        

// Payment Info Section (good)
    // Make payment section change to match the selected payment method option
    const $paymentOption = document.getElementById('payment');

    // Make the credit card option the default payment method
    $('#payment option[value="credit card"]').selected = true;

    // Initially hide the paypal and bitcoin payment sections 
    $('#paypal').hide();
    $('#bitcoin').hide();

    // Function to change the visible payment section to match the dropdown payment method selection
    $paymentOption.addEventListener('change', (e) => {
        let paymentSelection = e.target.value;
            if (paymentSelection === 'credit card') {
                $('#credit-card').slideDown(1000);
                $('#paypal').hide();
                $('#bitcoin').hide();
            } else if (paymentSelection === 'paypal') {
                $('#credit-card').hide();
                $('#paypal').slideDown(1000);
                $('#bitcoin').hide();
            } else if (paymentSelection === 'bitcoin') {
                $('#credit-card').hide();
                $('#paypal').hide();
                $('#bitcoin').slideDown(1000);
            }
    });

   



// Form Validation
    // Prevent the user from submitting the form in the following situations:
    let validInfo = true;
    function totalFormValidation() {

        // Name field can't be blank
        let nameInput = $('#name').val();
        if (validName(nameInput) === false) {
            $('#name').css('border-color', 'red');
            setTimeout(function() {alert('Please enter your full name.');}, 500);
            validInfo = false;
        }

        // Email field must be a properly valid format
            // The '(type="email")' attribute automatically ensures a proper email format
        let emailInput = $('#mail').val();
        if (validEmail(emailInput) === false) {
            $('#mail').css('border-color', 'red');
            validInfo = false;  
        }

        // At least one checkbox in Register for Activities must be selected
        let validActivities = $('.total');
        if (validActivities === 0) {
            setTimeout(function() {alert('Please select at least one activity.');}, 500);
            validInfo = false;
        }
    
        // For credit card option, require a credit card number, zip code, and CVV code
        // Ensure the credit card info is only validated if Credit Card is the selected payment method
        // Indicate when there is a validation error (red field borders, red text message)
        let creditCardNumber = $('#cc-num').val();
        let zipCode = $('#zip').val();
        let cvv = $('#cvv').val();

            // Credit card only accepts a number between 13-16 digits
            if ($paymentOption.value === 'credit card') {
                if (validCreditCardNumber(creditCardNumber) === false) {
                    $('#cc-num').css('border-color', 'red');
                    setTimeout(function() {alert('Please enter a valid credit card number between 13 - 16 digits.');}, 500);
                    validInfo = false;
                }
                // Zip Code only accepts a 5 digit number
                if (validZipCode(zipCode) === false) {
                    $('#zip').css('border-color', 'red');
                    setTimeout(function() {alert('Please enter a valid 5-digit zip code.');}, 500);
                    validInfo = false;
                    }
                // The CVV only acceptsa 3 digit number
                if (validCvv(cvv) === false) {
                    $('#zip').css('border-color', 'red');
                    setTimeout(function() {alert('Please enter a valid CVV.');}, 500);
                    validInfo = false;
                }
            }; 
            return validInfo;
        };        





// Form validation messages
    // Check default behavior - only display messages after user interaction/submission
    
    // Add error indication to these fields:
        // Name
        function validName(nameInput) {
            return /^[A-Za-z][A-Za-z\s]+$/i.test(nameInput);
        }
        // Email
        function validEmail(emailInput) {
            return / /.test(emailInput);
        }
        // At least one check in Register for Activities
                //validActivities **************************************************
        // Credit Card number (only if the payment method is selected)
        function validCreditCardNumber(creditCardNumber) {
            return /   /.test(creditCardNumber);
        }
        // Zip Code (only if credit card method is selected)
        function validZipCode(zipCode) {
            return /^\d{5}$/.test(zipCode);
        }
        // CVV (only if credit card method is selected)
        function validCvv(cvv) {
            return /^\d{3}$ /.test(cvv);
        }
        // Validation of complete form format and information
        totalFormValidation()


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
//}); 

