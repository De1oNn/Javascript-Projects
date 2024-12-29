document.querySelectorAll(".read-card").forEach(card => {
    card.addEventListener("click", function() {
        document.querySelector(".popup-outside").style.display = "flex";
    });
});

document.querySelector(".close").addEventListener("click", function() {
    document.querySelector(".popup-outside").style.display = "none";
});

document.querySelector(".button").addEventListener("click", function() {
    const title = document.querySelector("#taskTitle").value;
    const description = document.querySelector("#taskDescription").value;
    const status = document.querySelector("#status").value;  
    const priority = document.querySelector("#property").value; 
    
    if (title && description && status && priority) {
        //shine element neeh
        const newTaskDiv = document.createElement("div");
        newTaskDiv.classList.add("task-card");
        newTaskDiv.id = "task" + Date.now(); 

        newTaskDiv.innerHTML = `
            <h3>${title}</h3>
            <p><strong>Description:</strong> ${description}</p>
            <p><strong>Status:</strong> ${status}</p>
            <p><strong>Priority:</strong> ${priority}</p>
        `;


        if (status === "To Read") {
            document.querySelector(".read").appendChild(newTaskDiv);
        } else if (status === "To Watch") {
            document.querySelector(".watch").appendChild(newTaskDiv);
        } else if (status === "To Buy") {
            document.querySelector(".buy").appendChild(newTaskDiv);
        } else if (status === "Done") {
            document.querySelector(".done").appendChild(newTaskDiv);
        } else {
            alert("Invalid status. Please use 'To Read', 'To Watch', 'To Buy', or 'Done'.");
            return;
        }

        document.querySelector(".popup-outside").style.display = "none";
        document.querySelector("#taskTitle").value = "";
        document.querySelector("#taskDescription").value = "";
        document.querySelector("#status").value = "";
        document.querySelector("#property").value = "";  

        addDragFunctionality(newTaskDiv);
    } else {
        alert("Please fill in all fields.");
    }     
});
    // shine task iig busad section luu shiljuuleh function
function addDragFunctionality(taskCard) {
    taskCard.setAttribute('draggable', true);

    taskCard.addEventListener("dragstart", function(e) {
        let selected = e.target; 
        e.dataTransfer.setData('text/plain', selected.id);
    });

    let taskLists = document.querySelectorAll('.read, .watch, .buy, .done');
    
    taskLists.forEach(list => {
        list.addEventListener("dragover", function(e) {
            e.preventDefault(); 
        });

        list.addEventListener("drop", function(e) {
            e.preventDefault();
            let draggedId = e.dataTransfer.getData('text/plain');
            let draggedElement = document.getElementById(draggedId);

            if (draggedElement) {
                list.appendChild(draggedElement); 
            }
        });
    });
}
document.querySelectorAll('.task-card').forEach(addDragFunctionality);


// close button
// const newTaskDiv = document.querySelector(".task-card");
// const newdeletebutton = document.createElement("li");

// newdeletebutton.classList.add("close-button");

// newTaskDiv.append("newdeletebutton")

// newdeletebutton.innerText = "hello"
// console.log(newdeletebutton);

