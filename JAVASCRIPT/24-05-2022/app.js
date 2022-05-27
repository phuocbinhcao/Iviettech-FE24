var students = localStorage.getItem("list-students")
  ? JSON.parse(localStorage.getItem("list-students"))
  : [];

var perPage = 5; //number student display per page
var currentPage = 1;
var start = 0;
var end = perPage;
const totalPage = Math.ceil(students.length / perPage);

// show list student
function showStudents(array) {
  var student = "";
  $("#table tbody").empty();
  array.map((item, index) => {
    if (index >= start && index < end) {
      student += `
        <tr>
            <td>${index + 1}</td>
            <td>${item.name}</td>
            <td>${item.class}</td>
            <td>${item.email}</td>
            <td>${item.birthday}</td>
            <td>${item.age}</td>
            <td>${item.address}</td>
            <td>
                <button class="btn-sm btn-danger" id="delete_handle" onclick="DeleteItem(${index})">Delete</button>
                <button class="btn-sm btn-info" id="edit_handle" onclick="EditItem(${index})" >Edit</button>
                <button class="btn-sm btn-info" id="showDetail_handle" onclick="ShowDetailItem(${index})">Detail</button>
            </td>
        </tr>
        `;
    }
  });
  $("#table tbody").append(student);
}
showStudents(students);
renderListPage();

//calculator age
var age = $("#birthday").blur(function () {
  $("#age").val(function () {
    var birthday = $("#birthday").val();
    var current = new Date().getFullYear();
    var date = new Date(birthday).getFullYear();
    return (age = current - date);
  });
});

// //Add new student
$("#btn_add").click(function (e) {
  e.preventDefault();
  var name = $("#name").val().trim();
  var email = $("#email").val().trim();
  var birthday = $("#birthday").val().trim();
  var className = $("#class").val().trim();
  var address = $("#address").val().trim();

  var newItem = {
    Id: Math.floor(Math.random() * 1000) + 1,
    name: name,
    email: email,
    class: className,
    age: age,
    birthday: birthday,
    address: address,
  };
  students.push(newItem);
  localStorage.setItem("list-students", JSON.stringify(students));
  showStudents(students);
  // clear();
});

//CONTROL PAGINATION

function getCurrentPage(currentPage) {
  start = (currentPage - 1) * perPage;
  end = currentPage * perPage;
}
// event button next
$(".btn-next").click(function () {
  currentPage++;
  if (currentPage > totalPage) {
    currentPage = totalPage;
  }
  if (currentPage === totalPage) {
    $(".btn-next").addClass("btn-active");
  }
  $(".btn-prev").removeClass("btn-active");
  $(`.number-page p:eq(${currentPage - 1})`).addClass("active");
  $(`.number-page p:eq(${currentPage - 2})`).removeClass("active");
  getCurrentPage(currentPage);
  showStudents(students);
});
// event button prev
$(".btn-prev").click(function () {
  currentPage--;
  if (currentPage <= 1) {
    currentPage = 1;
  }
  if (currentPage === 1) {
    $(".btn-prev").addClass("btn-active");
  }
  $(".btn-next").removeClass("btn-active");
  $(`.number-page p:eq(${currentPage - 1})`).addClass("active");
  $(`.number-page p:eq(${currentPage})`).removeClass("active");
  getCurrentPage(currentPage);
  showStudents(students);
});
// display page number
function renderListPage() {
  let html = "";
  $(".number-page").empty();
  html += `
  <p class="active">${1}</p>
  `;
  for (let i = 2; i <= totalPage; i++) {
    html += `<p>${i}</p>`;
  }
  $(".number-page").append(html);
}
// change page
function changePage() {
  var currentPages = $("#number-page *");
  for (let i = 0; i <= currentPages.length; i++) {
    currentPages[i].addEventListener("click", () => {
      // $(`currentPages${i}`).click(function(){
      var value = i + 1;
      currentPage = value;
      $("#number-page p").removeClass("active");
      $(`.number-page p:eq(${currentPage - 1})`).addClass("active");
      // currentPages[i].classList.add("active");
      getCurrentPage(currentPage);
      showStudents(students);
    });
  }
}
changePage();

// END CONTROL PAGINATION

//reset input name and class
function clear() {
  $("#name").val("");
  $("#age").val("");
  $("#class").val("");
  $("#email").val("");
  $("#birthday").val("");
  $("#address").val("");
}
$("#reset").click(function () {
  clear();
});
// Delete student
function DeleteItem(index) {
  if (confirm("Are you sure?")) {
    students.splice(index, 1);
  }
  localStorage.setItem("list-students", JSON.stringify(students));
  showStudents(students);
}
//edit students
function EditItem(index) {
  $("#index").val(function () {
    return index;
  });
  $("#name").val(function () {
    return students[index].name;
  });
  $("#class").val(function () {
    return students[index].class;
  });
  $("#email").val(function () {
    return students[index].email;
  });
  $("#age").val(function () {
    return students[index].age;
  });
  $("#address").val(function () {
    return students[index].address;
  });
  $("#birthday").val(function () {
    return students[index].birthday;
  });
  $("#btn_update").show();
  $("#btn_add").hide();
}
//update students
$("#btn_update").click(function () {
  let index = $("#index").val();
  students[index] = {
    Id: Math.floor(Math.random() * 1000) + 1,
    name: $("#name").val(),
    class: $("#class").val(),
    email: $("#email").val(),
    age: $("#age").val(),
    address: $("#address").val(),
    birthday: $("#birthday").val(),
  };
  localStorage.setItem("list-students", JSON.stringify(students));
  showStudents(students);
  clear();

  $("#btn_update").hide();
  $("#btn_add").show();
});
//Show detail student
function ShowDetailItem(index) {
  $(".detail").show();
  $(".detail__body").empty();
  var detail = `
        <h2>${students[index].name}</h2>
        <p>Id: ${students[index].Id}</p>
        <p>Class: ${students[index].class}</p>
        <p>Email: ${students[index].email}</p>
        <p>Age: ${students[index].age}</p>
        <p>Address: ${students[index].address}</p>
        <p>Birthday: ${students[index].birthday}</p>
      `;
  $(".detail__body").append(detail);
}
$("#closeDetail").click(function () {
  $(".detail").hide();
});
//search student with name
$("#searchInput").on("input", function () {
  let valueInput = $("#searchInput").val();
  let studentSearch = students.filter((student) => {
    return student.name.toUpperCase().includes(valueInput.toUpperCase());
  });
  showStudents(studentSearch);
});
