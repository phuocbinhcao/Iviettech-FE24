var students = localStorage.getItem("list-students")
  ? JSON.parse(localStorage.getItem("list-students"))
  : [];

function validateForm() {
  var formValidate = document.querySelector(".main__body");
  var inputElement = formValidate.querySelectorAll(".form-input");

  for (let i = 0; i < inputElement.length; i++) {
    if (inputElement[i].value === "") {
      inputElement[i].parentElement.querySelector(
        ".error-message"
      ).innerHTML = `Please enter your ${inputElement[i].id}`;
    } else {
      inputElement[i].parentElement.querySelector(".error-message").innerHTML =
        "";
    }
  }
}

// show list student
function showStudents(array) {
  var student = `<thead>
                    <tr>
                        <th>STT</th>
                        <th>Name</th>
                        <th>Class</th>
                        <th>Email Address</th>
                        <th>Phone Number</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    `;
    array.map((item, index) => {
    student += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${item.name}</td>
                    <td>${item.class}</td>
                    <td>${item.email}</td>
                    <td>${item.phone}</td>
                    <td>
                        <button class="btn-sm btn-danger" onclick="handleDelete(${index})">Delete</button>
                        <button class="btn-sm btn-info" onclick="handleEdit(${index})">Edit</button>
                        <button class="btn-sm btn-info" onclick="showDetailStudent(${index})">Detail</button>
                    </td>
                </tr>
                `;
  });

  document.getElementById("table").innerHTML = student;
}
showStudents(students);

//reset input name and class
function clear() {
  document.getElementById("name").value = "";
  document.getElementById("class").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("email").value = "";
}

function refress() {
  clear();
}

//Add new student
function addNew() {
  validateForm();
  var name = document.getElementById("name").value;
  var lop = document.getElementById("class").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;

  if (!name) return;
  if (!lop) return;
  if (!phone) return;
  if (!email) return;

  var newItem = {
    Id: Math.floor(Math.random() * 1000) + 1,
    name: name,
    class: lop,
    email: email,
    phone: phone,
  };

  students.push(newItem);
  localStorage.setItem("list-students", JSON.stringify(students));
  showStudents(students);
  clear();
}

//Delete student
function handleDelete(index) {
  if (confirm("Are you sure?")) {
    students.splice(index, 1);
  }
  localStorage.setItem("list-students", JSON.stringify(students));
  showStudents(students);
}

//Edit student
function handleEdit(index) {
  document.getElementById("index").value = index;
  document.getElementById("name").value = students[index].name;
  document.getElementById("class").value = students[index].class;
  document.getElementById("email").value = students[index].email;
  document.getElementById("phone").value = students[index].phone;
  document.getElementById("btn_update").style = "display: inline-block";
  document.getElementById("btn_register").style = "display: none";
}
function update() {
  let index = document.getElementById("index").value;
  students[index] = {
    Id: Math.floor(Math.random() * 1000) + 1,
    name: document.getElementById("name").value,
    class: document.getElementById("class").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
  };
  localStorage.setItem("list-students", JSON.stringify(students));
  showStudents(students);
  clear();

  document.getElementById("btn_update").style = "display: none";
  document.getElementById("btn_register").style = "display: inline-block";
}

//Show student
function showDetailStudent(index) {
  document.querySelector(".detail").style = "display: block";
  var detail = `
        <h2>${students[index].name}</h2>
        <p>Id: ${students[index].Id}</p>
        <p>Class: ${students[index].class}</p>
        <p>Email: ${students[index].email}</p>
        <p>Phone Number: ${students[index].phone}</p>
              `;
  document.querySelector(".detail__body").innerHTML = detail;
}

function closeDetail() {
  document.querySelector(".detail").style = "display: none";
}

//search student with name
function searchStudent() {
  let valueInput = document.getElementById("searchInput").value;
  let studentSearch = students.filter((student) => {
    return student.name.toUpperCase().includes(valueInput.toUpperCase());
  });
  showStudents(studentSearch);
}
