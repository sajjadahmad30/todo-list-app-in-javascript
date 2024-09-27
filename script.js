function addTask(){
    let taskInput = document.getElementById("taskInput")
    let taskList = document.getElementById("taskList")

    // handle the empty task 
    if(!taskInput.value.trim()){
        return alert("Todo can't be empty. Try again")
    }

    // create a new list item
    let li =document.createElement("li")
    li.textContent= taskInput.value;



    // append the li into  taskList 
    taskList.appendChild(li)

}


