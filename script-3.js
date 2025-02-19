
        document.getElementById('contactForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission

            // Gather form data
            const name = document.getElementById('yourName').value;
            const email = document.getElementById('yourEmail').value;
            const phone = document.getElementById('yourPhone').value;
            const message = document.getElementById('yourMessage').value;

            // Send data to EmailJS
            emailjs.send("service_nurznhb", "template_kkq3g91", {
                name: name,
                email: email,
                phone: phone,
                message: message
            })
            .then(function(response) {
                alert('Successfully submitted!');
                document.getElementById('contactForm').reset(); // Reset the form
            }, function(error) {
                alert('Failed to submit: ' + JSON.stringify(error));
            });
        });