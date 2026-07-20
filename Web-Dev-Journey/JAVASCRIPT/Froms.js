document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    form.addEventListener('submit', (event) => {
        // 1. Prevent the default browser page reload
        event.preventDefault();

        // 2. Extract text, number, and dropdown values using FormData
        const formData = new FormData(form);
        
        // 3. Handle checkboxes (multiple values for "choice")
        const choices = [];
        document.querySelectorAll('input[name="choice"]:checked').forEach(checkbox => {
            choices.push(checkbox.value);
        });

        // 4. Combine all answers into a structured data object
        const feedbackData = {
            fullName: formData.get('name'),
            email: formData.get('email'),
            age: formData.get('age') || 'Not provided',
            firstTimeGuest: formData.get('hotel-stay') || 'Not answered',
            reasonsForChoosing: choices,
            serviceRating: formData.get('service'),
            foodRating: formData.get('food'),
            comments: formData.get('comments')
        };

        // 5. Output or process your data
        console.log('Hotel Feedback Submitted:', feedbackData);
        alert('Thank you for your feedback!');
        
        // Optional: Reset the form fields after successful submission
        // form.reset();
    });
});
