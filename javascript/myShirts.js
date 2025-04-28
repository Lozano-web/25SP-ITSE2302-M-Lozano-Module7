
//DOM

document.addEventListener('DOMContentLoaded', function() {
            var form = document.querySelector('#tshirtForm'); // Select the form by ID
            form.addEventListener('submit', handleFormSubmission); // Attach event listener to form
        });

        function handleFormSubmission(event) {
            event.preventDefault(); // Prevent the default form submission

            // Extract form values
            var firstName = document.getElementById('firstName').value;
            var lastName = document.getElementById('lastName').value;
            var email = document.getElementById('email').value;
            var phone = document.getElementById('phone').value;
            var selectedSize = document.querySelector('input[name="size"]:checked');

            // Ensure a size is selected
            if (!selectedSize) {
                alert("Please select a size.");
                return;
            }

            // Extract numeric values
            var sizePrice = parseInt(selectedSize.value);
            var color = document.getElementById('color').value;
            var addonPrices = document.querySelectorAll('input[name="addons"]:checked');
            var totalPrice = sizePrice; // Initialize total price with the size price
            var selectedAddons = []; // Store addon values

            // Loop through selected addons to calculate prices
            addonPrices.forEach(function(addon) {
                selectedAddons.push(parseInt(addon.value));
                totalPrice += parseInt(addon.value);
            });

            
            var summaryHtml = `
            <h3>Order Summary</h3>
            <p>Name: ${firstName} ${lastName}</p>
            <p>Email: ${email}</p>
            <p>Phone: ${phone}</p>
            <p>Size Price: ${sizePrice}</p>
            <p>Selected Color: ${color}</p>
            <p>Selected Add-ons: ${selectedAddons.join(', ')}</p>
            <p>Total Price: ${totalPrice}</p>
          `;
            // Displaying the summary in a specific div
            document.getElementById('orderSummary').innerHTML = summaryHtml; // Update the order summary section
        }

// Event Listener
document.addEventListener('DOMContentLoaded', setupForm); 

function setupForm() {
    var form = document.querySelector('#tshirtForm'); // Variables
    form.addEventListener('submit', handleFormSubmit); // Event Listener
}

function handleFormSubmit(event) {
    event.preventDefault(); 

    // Variables
    var firstName = document.querySelector('#firstName').value;
    var lastName = document.querySelector('#lastName').value;
    var email = document.querySelector('#email').value;
    var phone = document.querySelector('#phone').value;

    // String Methods and If and Else
    if (firstName.trim() === "") {
        alert("First name is required.");
        return;
    } else if (lastName.trim() === "") {
        alert("Last name is required.");
        return;
    } else if (email.trim() === "") {
        alert("Email is required.");
        return;
    } else if (phone.trim() === "") {
        alert("Phone number is required.");
        return;
    }

    console.log("First Name: ", firstName);
    console.log("Last Name: ", lastName);
    console.log("Email: ", email);
    console.log("Phone: ", phone);

    var sizeRadio = document.querySelector('input[name="size"]:checked');
    var size = sizeRadio ? parseFloat(sizeRadio.value) : 0;

    console.log("T-shirt cost: ", size);

    var addons = []; // Arrays
    var checkboxes = document.querySelectorAll('input[name="addons"]:checked');
    
    var total = size;

    // Loops
    for (var i = 0; i < checkboxes.length; i++) {
        total += parseFloat(checkboxes[i].value);
        addons.push(checkboxes[i].nextSibling.nodeValue.trim());
        console.log("Addon: ", checkboxes[i].nextSibling.nodeValue.trim());
    }

    console.log("Total: ", total);

    var color = document.querySelector('#color').value;
    var description = document.querySelector('#description').value;

    console.log("Color Selected: ", color);
    console.log("Description: ", description);

    // Switch
    switch (color) {
        case "Black":
            console.log("You picked a bold color.");
            break;
        case "White":
            console.log("You picked a classic color.");
            break;
        case "Red":
            console.log("You picked a bright color.");
            break;
        case "Green":
            console.log("You picked a fresh, natural color.");
            break;
        case "Gray":
            console.log("You picked a neutral, balanced color.");
            break;
        case "Blue":
            console.log("You picked a calming color.");
            break;
        case "Purple":
            console.log("You picked a royal and creative color.");
            break;
        case "Pink":
            console.log("You picked a soft and playful color.");
            break;
        default:
            console.log("You picked: " + color);
    }

    // Try/Catch
    try {
        if (addons.includes("Mascots")) {
            throw "Mascot orders may take extra time.";
        }
    } catch (message) {
        console.log("Note: " + message);
    }

    // String Methods
    var fullName = firstName.trim() + " " + lastName.trim();
    console.log("Full Name: ", fullName);
}
