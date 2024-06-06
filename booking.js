document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    const formData = new FormData(this);

    // Simulate form submission (replace with actual backend logic)
    const formValues = {};
    formData.forEach((value, key) => {
        formValues[key] = value;
    });
    const confirmationMessage = `Thank you, ${formValues.name}! Your message has been received.`;

    document.getElementById('confirmation').textContent = confirmationMessage;
    this.reset(); // Reset form fields
});
