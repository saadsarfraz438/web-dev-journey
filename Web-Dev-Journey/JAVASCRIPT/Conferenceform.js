const conferenceForm = document.querySelector('form');

conferenceForm.addEventListener('submit', function(event) {
  // Prevent form from submitting the traditional way (page reload)
  event.preventDefault();

  // Create an object to hold the form data
  const formData = new FormData(conferenceForm);
  const formValues = Object.fromEntries(formData.entries());

  // Output the collected data to the console
  console.log('Conference Form Submitted:', formValues);
  
  // Optional: Reset the form after submission
  conferenceForm.reset();
  alert('Form submitted successfully!');
});
