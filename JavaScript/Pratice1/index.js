var task = document.getElementById("task");
var priority = document.getElementById("priority");
var tbody = document.querySelector("tbody");
var form = document.querySelector("form");

var taskArray = JSON.parse(localStorage.getItem("task")) || [];
display(taskArray);

form.addEventListener("submit", formSubmit);

function formSubmit(e) {
    e.preventDefault();
   
    var obj = {
        task: task.value,
        priority: priority.value
    };      
    taskArray.push(obj);
    localStorage.setItem("task", JSON.stringify(taskArray));
    display(taskArray); 
    console.log("hi") 
}

function display(data) {
    tbody.innerHTML = "";
    data.map((e) => {
        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        td1.textContent = e.task;
        var td2 = document.createElement("td");
        td2.textContent = e.priority;
        var td3 = document.createElement("td");
        td3.textContent = "delete";
        td3.style.backgroundColor = "red";
       
        function del() {
            let delt = taskArray.indexOf(e);
            taskArray.splice(delt, 1);
            display(taskArray);
            localStorage.setItem("task", JSON.stringify(taskArray));
        }
        
        td3.addEventListener("click", del);
        tr.append(td1, td2, td3);
        tbody.append(tr);
    });
}

document.getElementById("reset").addEventListener("click", resetEvent);

function resetEvent() {
    taskArray = []
    localStorage.removeItem("task");
    display([]);
    alert("Table Reset");
}
