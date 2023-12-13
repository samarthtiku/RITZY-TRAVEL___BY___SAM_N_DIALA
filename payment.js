document.addEventListener('DOMContentLoaded', function () {
    var stripe = Stripe('your-publishable-key'); // Replace 'your-publishable-key' with your actual publishable key
    var elements = stripe.elements();

    var card = elements.create('card');
    card.mount('#card-element');

    card.addEventListener('change', function (event) {
        var displayError = document.getElementById('card-errors');
        if (event.error) {
            displayError.textContent = event.error.message;
        } else {
            displayError.textContent = '';
        }
    });

    var form = document.getElementById('payment-form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        stripe.createToken(card, { name: document.getElementById('card-holder-name').value })
            .then(function (result) {
                if (result.error) {
                    var errorElement = document.getElementById('card-errors');
                    errorElement.textContent = result.error.message;
                } else {
                    fetch('/charge', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ token: result.token.id }),
                    })
                        .then(response => response.json())
                        .then(data => {
                            console.log(data);
                            alert('Payment Successful!');
                        })
                        .catch(error => {
                            console.error('Error:', error);
                            alert('Payment Failed. Please try again.');
                        });
                }
            });
    });
});
