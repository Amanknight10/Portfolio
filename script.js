document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from actually submitting
  
    // Display success message
    document.getElementById("success-message").classList.remove("hidden");
  
    // Clear the form fields
    document.getElementById("contact-form").reset();
  });
  