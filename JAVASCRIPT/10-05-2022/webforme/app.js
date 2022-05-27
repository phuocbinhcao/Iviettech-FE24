var modalRegister = document.querySelector("#main-form-sigUp");
var modalLogin = document.querySelector("#main-form-login");
var btnLogin = document.querySelector("#btn-Login");
var btnRegister = document.querySelector("#btn-Register");
var iconCloseRegister = document.querySelector(".close-register i");
var iconCloseLogin = document.querySelector(".close-login i");

//Register toggle
function toggleModalRegister() {
  modalRegister.classList.toggle("hide-register");
}
btnRegister.addEventListener("click", toggleModalRegister);
iconCloseRegister.addEventListener("click", toggleModalRegister);
modalRegister.addEventListener("click", function (e) {
  if (e.target == e.currentTarget) {
    toggleModalRegister();
  }
});

//Login toggle
function toggleModalLogin() {
  modalLogin.classList.toggle("hide-login");
}
btnLogin.addEventListener("click", toggleModalLogin);
iconCloseLogin.addEventListener("click", toggleModalLogin);
modalLogin.addEventListener("click", function (e) {
  if (e.target == e.currentTarget) {
    toggleModalLogin();
  }
});
//Check localStorage
var listUsersRegister = localStorage.getItem("listUsersRegister")
  ? JSON.parse(localStorage.getItem("listUsersRegister"))
  : [];
var listUsersLogin = localStorage.getItem("listUsersLogin")
  ? JSON.parse(localStorage.getItem("listUsersLogin"))
  : [];

var formRegister = document.querySelector("#form-sigup");
var formLogin = document.querySelector("#form-logIn");
var inputName = document.querySelector("#fname");
var inputEmail = document.querySelector("#email");
var inputPassword = document.querySelector("#password");
var inputAddress = document.querySelector("#address");
var inputPhone = document.querySelector("#phoneNumber");

//form add Register
formRegister.addEventListener("submit", function onFormRegister(e) {
  e.preventDefault();
  let isEmptyError = checkEmptyError([
    fname,
    email,
    password,
    address,
    phoneNumber,
  ]);
  let isEmailError = checkEmailError(email);
  let isNameError = checkLengthError(fname, 3, 20);
  let isPasswordError = checkLengthError(password, 8, 20);
  if (isEmptyError || isEmailError || isNameError || isPasswordError) {
    return false;
  } else {
    addInfoRegister();
    clearInput();
    localStorage.setItem(
      "listUsersRegister",
      JSON.stringify(listUsersRegister)
    );
    alert("Dang ky thanh cong");
    toggleModalRegister();
  }
});

//Check Login & add user login
function checkItemLogin() {
  var newItem = JSON.parse(localStorage.getItem("listUsersRegister"));
  var emailLogin = document.querySelector("#email_login").value;
  var passwordLogin = document.querySelector("#password_login").value;
  var index = newItem.findIndex(
    (item) => item.email === emailLogin && item.password === passwordLogin
  );

  if (index >= 0) {
    alert("dang nhap thanh cong");
    addInfoLogin();
    clearInput();
    localStorage.setItem("listUsersLogin", JSON.stringify(listUsersLogin));
    toggleModalLogin();
  } else {
    alert("Dang nhap that bai, Vui long dang ky tai khoan");
  }
}

// form check Login
formLogin.addEventListener("submit", function formCheckLogin(e) {
  e.preventDefault();
  let isEmptyError = checkEmptyError([email_login, password_login]);

  if (isEmptyError) {
    return false;
  } else {
    checkItemLogin();
  }
});

//clear input value
function clearInput() {
  inputName.value = "";
  inputEmail.value = "";
  inputPassword.value = "";
  inputAddress.value = "";
  inputPhone.value = "";
  document.querySelector("#email_login").value = "";
  document.querySelector("#password_login").value = "";
}

// add information user register
function addInfoRegister() {
  var name = inputName.value;
  var email = inputEmail.value;
  var phoneNumber = inputPhone.value;
  var address = inputAddress.value;
  var password = inputPassword.value;
  var newList = {
    name: name,
    email: email,
    phoneNumber: phoneNumber,
    address: address,
    password: password,
  };
  listUsersRegister.push(newList);
}

// add information user login
function addInfoLogin() {
  var passwordLogin = document.querySelector("#password_login").value;
  var emailLogin = document.querySelector("#email_login").value;
  var newListLogin = {
    email: emailLogin,
    password: passwordLogin,
  };
  listUsersLogin.push(newListLogin);
}

// check Error
function setError(input, message) {
  var formControl = input.parentElement; //.form-outline
  var span = formControl.querySelector("span");
  formControl.className = "form-outline error";
  span.innerText = message;
}

// check success
function setSuccess(input) {
  var formControl = input.parentElement;
  formControl.className = "form-outline success";
}

//check mail error
function checkEmailError(input) {
  var regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  input.value = input.value.trim();

  let isEmailError = !regexEmail.test(input.value);

  if (regexEmail.test(input.value)) {
    setSuccess(input);
  } else {
    setError(input, "Email invalid");
  }
  return isEmailError;
}

// check empty error input
function checkEmptyError(listInput) {
  let isEmptyError = false;
  listInput.forEach((input) => {
    input.value = input.value.trim();
    if (!input.value) {
      isEmptyError = true;
      setError(input, "khong duoc de trong");
    } else {
      setSuccess(input);
    }
  });
  return isEmptyError;
}

// check length input
function checkLengthError(input, min, max) {
  input.value = input.value.trim();

  if (input.value.length < min) {
    setError(input, `phai co it nha ${min} ky tu`);
    return true;
  }

  if (input.value.length > max) {
    setError(input, `khong duoc qua ${max} ky tu`);
    return true;
  }
  setSuccess(input);
  return false;
}
