var username = document.querySelector("#name");
var email = document.querySelector("#email");
var birthday = document.querySelector("#birthday");
var address = document.querySelector("#address");
var className = document.querySelector("#class");
var form = document.querySelector("#form-submit")

//validate form
function showError(input, message){
  let parent = input.parentElement;
  let small = parent.querySelector("small")
  small.innerText = message;
}

function showSuccess(input){
  let parent = input.parentElement;
  let small = parent.querySelector("small")
  small.innerText = "";
}

function checkEmptyError(listInput){
  let isEmptyError = false;
  listInput.forEach(input => {
    input.value = input.value.trim()

    if(!input.value){
      isEmptyError = true;
      showError(input, "Không được để trống");
    } else {
      showSuccess(input);
    }
  });
  return isEmptyError;
}

function checkEmailError(input){
  const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  input.value = input.value.trim();
  
  let isEmailError = !regexEmail.test(input.value);
  if(regexEmail.test(input.value)){
    showSuccess(input)
  } else {
    showError(input, "Email Invalid")
  }
  return isEmailError;
}

function checkLengthError(input, min, max){
  input.value = input.value.trim();
  if(input.value.length < min ){
    showError(input, `Phải có it nhất ${min} ký tự.`);
  }
  if(input.value.length > max ){
    showError(input, `Không được quá ${max} ký tự.`);
  }
  return false;
}

// form.addEventListener("submit", function(e){
  form.addEventListener("click", function (e) {
  e.preventDefault();
 
    let isEmptyError = checkEmptyError([username, birthday, email, address,className]);
    let isEmailError = checkEmailError(email);
    let isUsernameLengthError = checkLengthError(username, 3, );
  // let isPasswordLengthError = checkLengthError(password, 8, );
  if(isEmptyError){
    return;
  } else{
      alert("hello")
  }
  
})