const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

//input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

//Success message
function showSucces(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

//check email validation
function checkEmail(input) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //   return re.test(String(email).toLowerCase());
  if (re.test(input.value.trim())) {
    showSucces(input);
  } else {
    showError(input, "Email is not valid!");
  }
}

function checkRequired(inputArr) {
  //high order array method
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, `${input.id} is required.`);
    } else {
      showSucces(input);
    }
  });
}
//password match
function checkPasswordMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "Passwords do not match!");
  } else {
    showSucces(input);
  }
}
//check input length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} charachters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${min} charachters`
    );
  } else {
    showSucces(input);
  }
}

//get fieldname
function getfieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1); //make firstletter upercase
}

//Event listeners
form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkEmail(email);
  checkPasswordMatch(password, password2);
});

//   if (username.value === "") {
//     showError(username, "Username is required");
//   } else {
//     showSucces(username);
//   }

//   if (email.value === "") {
//     showError(email, "Email is required");
//   } else if (!isValidEmail(email.value)) {
//     showError(email, "Email not valid!");
//   } else {
//     showSucces(email);
//   }

//   if (password.value === "") {
//     showError(password, "Password is required");
//   } else {
//     showSucces(password);
//   }

//   if (password2.value === "") {
//     showError(password2, "Password should match");
//   } else {
//     showSucces(password2);
//   }
