const students = [
    {id:Math.random().toString(36).substr(2, 5),name:"binh",class:'FE'},
    {id:Math.random().toString(36).substr(2, 5),name:"hung",class:'BA'}
];
// show list student
function showStudents() {
  var tableAll = `
                      <tr>
                          <th>Id</th>
                          <th>Name</th>
                          <th>Class</th>
                          <th>Action</th>
                      </tr>
                      `;
  for (let i = 0; i < students.length; i++) {
    tableAll += `
                  <tr>
                      <td>${students[i].id}</td>
                      <td>${students[i].name}</td>
                      <td>${students[i].class}</td>
                      <td>
                          <button class="btn btn-danger" onclick="Delete(${students[i].id})">Xoa</button>
                          <button class="btn btn-info" onclick="handleEdit(${students[i].id})">Sua</button>
                      </td>
                  </tr>
                  `;
  }
  document.getElementById("table").innerHTML = tableAll;
}
showStudents();

//reset input name and class
function clear() {
  document.getElementById("name").value = "";
  document.getElementById("class").value = "";
}

//search student
// function search() {
//     document.getElementById('table').style = "display:none"
//     document.getElementById('searchTable').style = "display:block"
//     document.getElementById('dong').style = "display:block"

//   var name = document.getElementById("name").value;
//   if (name) {
//     var listStudent = students.map((item) => {
//       if (item.name.includes(name)) {
//         return item;
//       }
//     });
//     var table = `
//                 <tr>
//                     <th>Id</th>
//                     <th>Name</th>
//                     <th>Class</th>
//                     <th>Action</th>
//                 </tr>
//             `;
//     for (let i = 0; i < listStudent.length; i++) {
//       if (listStudent[i]) {
//         table += `
//                   <tr>
//                       <td>${listStudent[i].Id}</td>
//                       <td>${listStudent[i].name}</td>
//                       <td>${listStudent[i].class}</td>
//                       <td>
//                         <button class="btn btn-danger" onclick="handelDelete(${listStudent[i].Id})">Xoa</button>
//                         <button class="btn btn-info" onclick="handleEdit(${listStudent[i].Id})">Sua</button>
//                     </td>
//                   </tr>
//                   `;
//       }
//     }
//     document.getElementById("searchTable").innerHTML = table;
//   }
//   clear();
// }

// function dongSearch(){
//     document.getElementById('searchTable').style = "display:none"
//     document.getElementById('dong').style = "display:none"
//     document.getElementById('table').style = "display:block"

// }

//Add new student

function addNew() {
  var name = document.getElementById("name").value;
  var lop = document.getElementById("class").value;

  if(!name) return;
  if(!lop) return;

  var newItem = {
    id: Math.random().toString(36).substr(2, 5),
    name: name,
    class: lop,
  };

  // let index = students.findIndex((student) => student.Id == newItem.Id);
  // console.log(index);
  // if (index >= 0) {
  //   students.splice(index, 1, newItem);
  //   document.getElementById("btn_register").innerHTML = "Add New";
  // } else {
  //   students.push(newItem);
  // }
  students.push(newItem);
  showStudents();
  // dongSearch()
  clear();
}

//Delete student
function Delete(id) {
  console.log(id);
  // for (let i = 0; i < students.length; i++) {
  //   if (students[i].item == item) {
  //     students.splice(i, 1);
  //     showStudents();
  //   }
  // }
}

//Edit student

function handleEdit(id) {
  
  // for (let i = 0; i < students.length; i++) {
  //   if (students[i].Id == Id) {
  //     document.getElementById("name").value = students[i].name;
  //     document.getElementById("class").value = students[i].class;
  //     document.getElementById("btn_register").innerHTML = "Update";
  //   }
  // }
}

