var form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Welcome to Facebook");
});


var email = document.querySelector("input[name=email]");
var confirm_email = document.querySelector(
  "input[name=confirm_email]"
);
function onchange() {
  if (confirm_email.value === email.value) {
    confirm_email.setCustomValidity("");
  } else {
    confirm_email.setCustomValidity("Email not match");
  }
}
