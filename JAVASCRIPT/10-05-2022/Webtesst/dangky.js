var students = localStorage.getItem("listUser")
  ? JSON.parse(localStorage.getItem("listUser"))
  : [];
var form = document.querySelector("form")

form.addEventListener("submit", function(e){
   
})

// function registerNewUser() {
//   var password = document.getElementById("password").value;
//   var address = document.getElementById("address").value;
//   var phone = document.getElementById("phone").value;
//   var zipCode = document.getElementById("zipCode").value;
//   var name = document.getElementById("name").value;
//   var email = document.getElementById("email").value;

//   var data = {
//     name: name,
//     address: address,
//     phone: phone,
//     zipCode: zipCode,
//     email: email,
//     password: password,
//   };

//   var newData = JSON.stringify(data);
//   localStorage.setItem("lisUser", newData);
//   return true;
// }
