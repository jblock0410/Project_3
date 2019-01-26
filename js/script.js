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
        } else {
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



    // Keep a running total of checked boxes so the total $ amount updates based upon selections
    // Select the dynamically added h3 element to display the running total cost
    
    
    const activities = document.querySelector('.activities');
    const $h3 = document.createElement('h3');
    activities.appendChild($h3);
    let $runningTotal = [];
    const mainConferenceCost = 200;
    const workshopCost = 100;
    
    $checkedBoxSearch.on('click', () => {
        
        if ($($mainConference).prop('checked')) {
            $runningTotal.push(mainConferenceCost);
            $h3.innerHTML = 'Total: $' + $runningTotal;
        } else {
            $runningTotal.pop(mainConferenceCost);
            $h3.innerHTML = 'Total: $' + $runningTotal; 
        }

        if ($($javascriptFrameworks).prop('checked')) {
            $runningTotal.push(workshopCost);
            $h3.innerHTML = 'Total: $' + $runningTotal;
        } else {
            $runningTotal.pop(workshopCost);
            $h3.innerHTML = 'Total: $' + $runningTotal; 
        }
        
    });
    
    function sumTotal (total, num) {
        return total + num;
    }

    function finalTotal() {
        $h3.innerHTML = $runningTotal.reduce(sumTotal);
    }
    
    
  
    
    
    
   



    


// Payment Info Section
    // Make payment section change to match the selected payment method option


    // Make credit card option the default
    // Display the #credit-card div, and hide the PayPal and Bitcoin info


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
//}); 

