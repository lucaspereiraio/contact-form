document.addEventListener("DOMContentLoaded", function () {
  let contactForm = document.getElementById("contact-form");

  // Check if the form was successfully submitted in the session storage
  if (sessionStorage.getItem("formSubmitted") === "true") {
    displaySuccessMessage();
    sessionStorage.removeItem("formSubmitted"); // Remove the flag after displaying the message
  }

  contactForm.addEventListener("submit", function (event) {
    let isValid = true;

    // Validate First Name
    let firstName = document.getElementById("first-name").value;

    if (!firstName) {
      document.querySelector(".required-first-name").style.display = "block";
      document.querySelector(".required-first-name").style.color = "red";
      document.querySelector("#first-name").style.borderColor = "red";
      isValid = false;
    }

    // Validate Last Name
    let lastName = document.getElementById("last-name").value;

    if (!lastName) {
      document.querySelector(".required-last-name").style.display = "block";
      document.querySelector(".required-last-name").style.color = "red";
      document.querySelector("#last-name").style.borderColor = "red";
      isValid = false;
    }

    // Validate Email
    function validateEmail(email) {
      let re = /\S+@\S+\.\S+/;
      return re.test(email);
    }

    let email = document.getElementById("email").value;

    if (!email) {
      document.querySelector(".required-email").style.display = "block";
      document.querySelector(".required-email").style.color = "red";
      document.querySelector("#email").style.borderColor = "red";
      isValid = false;
    } else if (!validateEmail(email)) {
      document.querySelector(".required-email").style.display = "block";
      document.querySelector(".required-email").style.color = "red";
      document.querySelector("#email").style.borderColor = "red";
      isValid = false;
    }

    // Validate Query Type

    let queryTypeChecked = document.querySelector(
      'input[name="query-type"]:checked'
    );

    if (!queryTypeChecked) {
      document.querySelector(".required-query-type").style.display = "block";
      document.querySelector(".required-query-type").style.color = "red";
      isValid = false;
    }

    // Validate Message
    let message = document.getElementById("message").value;

    if (!message) {
      document.querySelector(".required-message").style.display = "block";
      document.querySelector(".required-message").style.color = "red";
      document.querySelector("#message").style.borderColor = "red";
      isValid = false;
    }

    // Validate Consent
    let consent = document.getElementById("consent").checked;

    if (!consent) {
      document.querySelector(".required-consent").style.display = "block";
      document.querySelector(".required-consent").style.color = "red";
      isValid = false;
    }

    //Final validation
    if (!isValid) {
      event.preventDefault();
    } else {
      sessionStorage.setItem("formSubmitted", "true");
      displaySuccessMessage();
    }
  });

  function displaySuccessMessage() {
    document.querySelector(".success-message").style.display = "block";
    document.querySelector(".success-message").style.color =
      "hsl(169, 82%, 27%)";
  }
});
