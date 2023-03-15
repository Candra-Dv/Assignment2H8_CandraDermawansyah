function showForm() {
  const formElement = document.getElementById("form");
  if (formElement.style.display === "none") {
    formElement.style.display = "block";
  } else {
    formElement.style.display = "none";
  }
}

function saveForm() {
  const nameInput = document.getElementById("name-input");
  const nameValue = nameInput.value;

  if (nameValue.trim() !== "") {
    const outputName = document.getElementById("name");
    outputName.innerHTML = nameValue;

    // clear input value
    nameInput.value = "";
  }

  const roleInput = document.getElementById("role-input");
  const roleValue = roleInput.value;

  if (roleValue.trim() !== "") {
    const outputRole = document.getElementById("role");
    outputRole.innerHTML = roleValue;

    // clear input value
    roleInput.value = "";
  }

  const availabiltyInput = document.getElementById("avail-input");
  const availabiltyValue = availabiltyInput.value;

  if (availabiltyValue.trim() !== "") {
    const outputAvaibilty = document.getElementById("avail");
    outputAvaibilty.innerHTML = ": " + availabiltyValue;

    // clear input value
    availabiltyInput.value = "";
  }

  const ageInput = document.getElementById("age-input");
  const ageValue = ageInput.value;

  if (ageInput.value.trim() !== "") {
    const outputAge = document.getElementById("age");
    outputAge.innerHTML = ": " + ageValue;

    // clear input value
    ageInput.value = "";
  }

  const locationInput = document.getElementById("location-input");
  const locationValue = locationInput.value;

  if (locationValue.trim() !== "") {
    const outputLocation = document.getElementById("location");
    outputLocation.innerHTML = ": " + locationValue;

    // clear input value
    locationInput.value = "";
  }

  const yearInput = document.getElementById("year-input");
  const yearValue = yearInput.value;

  if (yearValue.trim() !== "") {
    const outputYear = document.getElementById("year");
    outputYear.innerHTML = ": " + yearValue;

    // clear input value
    yearInput.value = "";
  }

  const emailInput = document.getElementById("email-input");
  const emailValue = emailInput.value;

  if (emailValue.trim() !== "") {
    const outputEmail = document.getElementById("email");
    outputEmail.innerHTML = ": " + emailValue;

    // clear input value
    emailInput.value = "";
  }
}