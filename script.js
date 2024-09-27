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

    //remove button
    let removeButton =document.createElement("button");
    removeButton.textContent='Remove'
    removeButton.className='remove-btn'
    li.appendChild(removeButton)
    removeButton.onclick=function(){
        taskList.removeChild(li);
    }

    // add click event to mark as  completed
    li.onclick=function(){
        li.classList.toggle("completed")
    }



    // append the li into  taskList 
    taskList.appendChild(li)

}


