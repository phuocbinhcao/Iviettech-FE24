var $ = function (id) {
  return document.getElementById(id);
};

var listTask1 = [];

 listTask1 = localStorage.getItem("listTasks1")
  ? JSON.parse(localStorage.getItem("listTasks1"))
  : [];

//Show list Task
function showListTask() {
  let tasks = "";
  listTask1.map((item,index) => {
    tasks += `
              <div class="listItem">
                <p class="taskItem"><span>${item.time} - </span> ${item.name}</p>
                <div>
                <span><i class="fa-solid fa-pen-to-square"></i></span>
                <span class="deleteTask" onclick="deleteTask(${index})"><i class="fa-solid fa-trash-can"></i></span>
              </div>
              </div>
                `;
        });
  $("listTask").innerHTML = tasks;
}
showListTask();

//Add new list Task
function addTask() {
  let name = $("name").value;
  let  time = new Date($("date").value);
  let newItem = {
      id: Math.random().toString(36).substr(2, 5),
      time: time.toLocaleDateString(),
      name: name,
  };
  if(!name) return alert("please enter you task name");
  listTask1.push(newItem);
  //Luu vao localStorage
  localStorage.setItem("listTasks1", JSON.stringify(listTask1));

  showListTask();
  reset();
}

//reset input
function reset() {
  $("name").value = "";
  $("date").value = "";
}

//Delete Task
function deleteTask(index){
    listTask1.splice(index,1);
    localStorage.setItem("listTasks1", JSON.stringify(listTask1));
    showListTask()
}
