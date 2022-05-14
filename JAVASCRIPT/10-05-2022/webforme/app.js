function Register() {
  document.querySelector("#main-form-sigUp").style = "display: block";
}
function closeRegister() {
  document.querySelector("#main-form-sigUp").style = "display: none";
  clearInput()
}

function logIn() {
  document.querySelector("#main-form-login").style = "display: block";
}
function closeLogIn() {
  document.querySelector("#main-form-login").style = "display: none";
  clearInput();
}

// function toggleModal(){
    // modal.classList.toggle('hide')
// }

// var modal = document.querySelector(".main-form");
// var btnLogin = document.querySelector("#btn-Login");
// var btnRegister = document.querySelector("#btn-Register");

// btnLogin.addEventListener("click", toggleModal)
// btnRegister.addEventListener("click", toggleModal)
// modal.addEventListener("click", toggleModal)

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

//form check Register
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

    document.querySelector("#main-form-sigUp").style = "display: none";
    document.querySelector("body").style = "background-color: unset";
    alert("Dang ky thanh cong")
  }
});
function checkItemLogin(){
    var newItem = JSON.parse(localStorage.getItem("listUsersRegister"));

  var emailLogin = document.querySelector("#email_login").value;
  var passwordLogin = document.querySelector("#password_login").value;

  var index = newItem.findIndex(
    (item) => item.email === emailLogin && item.password === passwordLogin
  );
  if(index >=0){
    alert("dang nhap thanh cong")
    addInfoLogin();
      clearInput();
      localStorage.setItem("listUsersLogin", JSON.stringify(listUsersLogin));
      document.querySelector("#main-form-login").style = "display: none";
      document.querySelector("body").style = "background-color: unset";
  } 
  if(index < 0) {
    if(index.email !== emailLogin || index.password === passwordLogin){
        alert("vui long nhap lai email")
    } else if(index.email === emailLogin || index.password !== passwordLogin){
        alert("vui long nhap lai mat khau")
    } else if(index.email !== emailLogin || index.password !== passwordLogin){
        alert("Ban chua co tai khoan")
    }
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
    // if (index >= 0) {
    //   alert("dang nhap thanh cong");
    //   addInfoLogin();
    //   clearInput();
    //   localStorage.setItem("listUsersLogin", JSON.stringify(listUsersLogin));
    //   document.querySelector("#main-form-login").style = "display: none";
    //   document.querySelector("body").style = "background-color: unset";
    // } else {
    //   alert("dang nhap that bai, vui long dang ky");
    // }
  }
});
function clearInput() {
  inputName.value = "";
  inputEmail.value = "";
  inputPassword.value = "";
  inputAddress.value = "";
  inputPhone.value = "";
  document.querySelector("#email_login").value ="";
  document.querySelector("#password_login").value="";
}

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

function addInfoLogin() {
    var passwordLogin = document.querySelector("#password_login").value;
    var emailLogin = document.querySelector("#email_login").value;
  
  var newListLogin = {
    email: emailLogin,
    password: passwordLogin,
  };
  listUsersLogin.push(newListLogin);
}

function setError(input, message) {
  var formControl = input.parentElement; //.form-outline
  var span = formControl.querySelector("span");
  formControl.className = "form-outline error";
  span.innerText = message;
}
function setSuccess(input) {
  var formControl = input.parentElement;
  formControl.className = "form-outline success";
}
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
