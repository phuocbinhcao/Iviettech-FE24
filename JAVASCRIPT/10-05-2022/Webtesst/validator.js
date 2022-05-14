function validator(options) {
  function validate(inputElement, rule) {
    var errorElement = inputElement.parentElement.querySelector(options.error);
    var errorMessage = rule.test(inputElement.value);

    if (errorMessage) {
      errorElement.innerText = errorMessage;
      inputElement.parentElement.classList.add("invalid");
    } else {
      errorElement.innerText = "";
      inputElement.parentElement.classList.remove("invalid");
    }
  }
  var formElement = document.querySelector(options.form);

  if (formElement) {
    options.rules.forEach(function (rule) {
      var inputElement = formElement.querySelector(rule.selector);
      if (inputElement) {
        // Xu ly truong hop blur ra khoi input
        inputElement.onblur = function () {
          validate(inputElement, rule);
        };
        // xu ly moi khi nguoi dung nhap vao input
        inputElement.oninput = function () {
          var errorElement = inputElement.parentElement.querySelector(
            options.error
          );
          errorElement.innerText = "";
          inputElement.parentElement.classList.remove("invalid");
        };
      }
    });
  }
}

//Định nghĩa rules
validator.isRequired = function (selector) {
  return {
    selector: selector,
    test: function (value) {
      return value.trim() ? undefined : "Vui lòng nhập trường này";
    },
  };
};

validator.isEmail = function (selector) {
  return {
    selector: selector,
    test: function (value) {
      var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return regexEmail.test(value) ? undefined : "Trường này phải là email";
    },
  };
};
validator.isPassword = function (selector) {
  return {
    selector: selector,
    test: function (value) {
      var regexPassword = /^[A-Za-z]\w{8,14}$/;
      return regexPassword.test(value)
        ? undefined
        : "Vui lòng nhập đúng password";
    },
  };
};
var listUsers = localStorage.getItem("newList")
  ? JSON.parse(localStorage.getItem("newList"))
  : [];
function register() {
  var fname = document.getElementById("fname").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var newList = {
    name: fname,
    email: email,
    password: password,
  };
  listUsers.push(newList);
  localStorage.setItem("newList", JSON.stringify(listUsers));

  var myModalEl = document.getElementById("exampleModal1");
  var myModalEl1 = document.querySelector(".modal-backdrop");

  var modal = bootstrap.Modal.getInstance(myModalEl,myModalEl1);
  modal.hide();

//   var modal1 = bootstrap.Modal.getInstance(myModalEl1);
//   modal1.hide();
}

function checkLogin() {
  var newItem = JSON.parse(localStorage.getItem("newList"));
  var emailLogin = document.querySelector("#email-Login").value;
  var passLogin = document.querySelector("#pass-Login").value;

  const index = newItem.findIndex(
    (item) => item.email === emailLogin && item.password === passLogin
  );

  if(index >= 0) {
    alert("dang nhap thanh cong")
  } else {
    alert("dang nhap that bai");
  }
}

var formSubmit = document.querySelector("form");

formSubmit.addEventListener("submit", function (e) {
  e.preventDefault();
  register();
});
