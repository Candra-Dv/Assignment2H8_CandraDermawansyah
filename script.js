function showForm() {
    let formElement = document.getElementById("form");
    if (formElement.style.display === "none") {
      formElement.style.display = "block";
    } else {
      formElement.style.display = "none";
    }
  }

function saveForm() {
    let nameInput = document.getElementById("name-input");
    let nameValue = nameInput.value;
    
    if (nameValue.trim() !== "") {
        let outputName = document.getElementById("name");
        outputName.innerHTML = nameValue;
        
        // clear input value
        nameInput.value = "";
      }

    let roleInput = document.getElementById("role-input");
    let roleValue = roleInput.value;

    if (roleValue.trim() !== "") {
        let outputRole= document.getElementById("role"); 
        outputRole.innerHTML = roleValue;
        
        // clear input value
        roleInput.value = "";
      }

    let availabiltyInput = document.getElementById("avail-input");
    let availabiltyValue = availabiltyInput.value;

    if (availabiltyValue.trim() !== "") {
        let outputAvaibilty = document.getElementById("avail");
        outputAvaibilty.innerHTML = ": " + availabiltyValue;
        
        // clear input value
        availabiltyInput.value = "";
      }

    let ageInput = document.getElementById("age-input");
    let ageValue = ageInput.value;

    if (ageInput.value.trim() !== "") {
        let outputAge = document.getElementById("age");
        outputAge.innerHTML = ": " + ageValue;

        // clear input value
        ageInput.value = "";
      }

    let locationInput = document.getElementById("location-input");
    let locationValue = locationInput.value;

    if (locationValue.trim() !== "") {
        let outputLocation = document.getElementById("location"); 
        outputLocation.innerHTML = ": " + locationValue;

        // clear input value
        locationInput.value = "";
      }

    let yearInput = document.getElementById("year-input");
    let yearValue = yearInput.value;

    if (yearValue.trim() !== "") {
        let outputYear = document.getElementById("year"); 
        outputYear.innerHTML = ": " + yearValue;

        // clear input value
        yearInput.value = "";
      }

    let emailInput = document.getElementById("email-input");
    let emailValue = emailInput.value;

    if (emailValue.trim() !== "") {
        let outputEmail = document.getElementById("email"); 
        outputEmail.innerHTML = ": " + emailValue;

        // clear input value
        emailInput.value = "";
      }
  }