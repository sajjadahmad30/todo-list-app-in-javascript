function addTask(){
    let taskInput = document.getElementById("taskInput")
    let taskList = document.getElementById("taskList")

    // create a new list item
    let li =document.createElement("li")
    li.textContent= taskInput.value;


    
    // append the li into task list 
    taskList.appendChild(li)

}


