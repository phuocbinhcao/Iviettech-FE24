var $ = function (id) {
  return document.getElementById(id);
};

var listTask = [
  { id: Math.random().toString(36).substr(2, 5), name: "Công việc 1" },
  { id: Math.random().toString(36).substr(2, 5), name: "Công việc 2" },
];

 listTask = localStorage.getItem("listTasks")
  ? JSON.parse(localStorage.getItem("listTasks"))
  : [];

//Show list Task
function showListTask() {
  let tasks = "";
  listTask.map((item,index) => {
    tasks += `
                <p class="taskItem"><span onclick="deleteTask(${index})">Delete </span> ${item.name}</p>
              `;
        });
  $("listTask").innerHTML = tasks;
}

showListTask();

//Add new list Task
function addTask() {
  let name = $("name").value;
  let newItem = {
      id: Math.random().toString(36).substr(2, 5),
        name: name,
  };
  if(!name) return alert("please enter you task name");
  listTask.push(newItem);
  //Luu vao localStorage
  localStorage.setItem("listTasks", JSON.stringify(listTask));

  showListTask();
  reset();
}

//reset input
function reset() {
  $("name").value = "";
}

//Delete Task
function deleteTask(index){
    listTask.splice(index,1);
    localStorage.setItem("listTasks", JSON.stringify(listTask));
    showListTask()
}
