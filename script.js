document.addEventListener("DOMContentLoaded", function () {
  let contactForm = document.getElementById("contact-form");

  contactForm.addEventListener("submit", function (event) {
    let isValid = true;

    // Validate First Name
    let firstName = document.getElementById("first-name").value;

    if (!firstName) {
      alert("First Name field is required.");
      isValid = false;
    }

    // Validate Last Name
    let lastName = document.getElementById("last-name").value;

    if (!lastName) {
      alert("Last Name field is required.");
      isValid = false;
    }

    // Validate Email
    function validateEmail(email) {
      let re = /\S+@\S+\.\S+/;
      return re.test(email);
    }

    let email = document.getElementById("email").value;

    if (!email) {
      alert("Email field is required");
      isValid = false;
    } else if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      isValid = false;
    }

    // Validate Message
    let message = document.getElementById("message").value;

    if (!message) {
      alert("Message field is required");
      isValid = false;
    }

    // Validate Consent
    let consent = document.getElementById("consent").checked;

    if (!consent) {
      alert("To submit this form, please consent to being contacted.");
      isValid = false;
    }

    //Final validation -> NAO TA FUNCIONANDO
    if (!isValid) {
      event.preventDefault();
    } else {
      document.querySelector(".success-message").style.display = "block";
    }
  });
});
