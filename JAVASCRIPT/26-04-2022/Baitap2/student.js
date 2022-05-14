const students = [
    {Id:1,name:"binh",class:'FE',email: 'binhcao@gmail.com',phone:432111},
    {Id:2,name:"hung",class:'BA',email: 'binhcao@gmail.com',phone:323423}
];

// show list student
function showStudents(array) {
  var tableAll = '';
      array.map((item, index) => {
          tableAll += `
                  <tr>
                      <td>${index + 1}</td>
                      <td>${item.name}</td>
                      <td>${item.class}</td>
                      <td>${item.email}</td>
                      <td>${item.phone}</td>
                      <td>
                          <button class="btn-sm btn-danger" onclick="handleDelete(${item.Id})">Xoa</button>
                          <button class="btn-sm btn-info" onclick="handleEdit(${item.Id})">Sua</button>
                          <button class="btn-sm btn-info" onclick="showStudent(${item.Id})">Detail</button>
                      </td>
                  </tr>
                  `;
          })
  
  document.getElementById("tbody").innerHTML = tableAll;
}
showStudents(students);

//reset input name and class
function clear() {
  document.getElementById("name").value = "";
  document.getElementById("class").value = "";
  // document.getElementById("id").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("email").value = "";
}

function refress(){
  clear();
}

//Add new student
function addNew() {
  var name = document.getElementById("name").value;
  var lop = document.getElementById("class").value;
  // var id = document.getElementById("id").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;

  if(!name) return;
  if(!lop) return;
  // if(!id) return;
  if(!phone) return;
  if(!email) return;
  var newItem = {
    // Id: index+1,
    name: name,
    class: lop,
    email: email,
    phone: phone
  };

  let index = students.findIndex((student) => student.Id == newItem.Id);
  console.log(index);
  if (index >= 0) {
    update();
    document.getElementById("btn_register").innerHTML = "Add New";
  } else {
    students.push(newItem);
  }
  showStudents(students);
  clear();
}

//Delete student
function handleDelete(Id) {
  for (let i = 0; i < students.length; i++) {
    if (students[i].Id == Id) {
      students.splice(i, 1)
      showStudents();
    }
  }
}

//Edit student
function handleEdit(Id) {
  console.log(Id);
  for (let i = 0; i < students.length; i++) {
    if (students[i].Id == Id) {
      document.getElementById("name").value = students[i].name;
      document.getElementById("class").value = students[i].class;
      // document.getElementById("id").value = students[i].Id;
      document.getElementById("email").value = students[i].email;
      document.getElementById("phone").value = students[i].phone;
      document.getElementById("btn_register").innerHTML = "Update";
    }
  }
}

function update(){
  students[Id] = {
    name: document.getElementById("name").value,
    class: document.getElementById("class").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
  }
  showStudents(students);
  clear()
}

//Show student
function showStudent(){

}

