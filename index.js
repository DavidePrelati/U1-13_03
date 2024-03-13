const taskInput = document.getElementById("task")
const taskList = document.getElementById("list-task")

const inviaTask = () => {
    if (taskInput.value === "") {
        alert("Devi inserire una task prima di inviare!!")
    } else {
        let li = document.createElement("li")
        li.innerHTML = taskInput.value
        taskList.appendChild(li)
    }
    taskInput.value = ""
}

//taskInput.addEventListener("click", function (e) {
//if (e.target.tagName === "li") {
//    e.target.parentElement.remove()
//}

//})

