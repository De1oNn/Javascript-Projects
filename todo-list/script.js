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
        const newTaskDiv = document.createElement("div");
        newTaskDiv.classList.add("task-card");

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
    } else {
        alert("Please fill in all fields.");
    }     
});
// document.querySelector(".task-card").addEventListener("click", function() {
       
// })   
// const move = document.querySelector("task-card");
// move.addEventListener("mousedown", mousedown);
// function mousedown(){
//     move.addEventListener("mousemove", mousemove);
//     move.addEventListener("mouseup", mouseup);
//         this.style.background = "black";
//     function mousemove(e) {
//         const x = e.clientX - 100 + "px"
//         const y = e.clientY - 100 + "px"
//         this.style.left = x;
//         this.style.left = y;
//     }
//     function mouseup () {
//         move.removeEventListener("mousemove", mousemove)
//         this.style.background = "orange"
//     }
// }
// function createTaskCard() {
//     const taskCard = document.createElement("div");
//     taskCard.classList.add("task-card");
//     taskCard.textContent = "Drag Me!";
//     taskCard.style.width = "100px";
//     taskCard.style.height = "100px";
//     taskCard.style.position = "absolute";
//     taskCard.style.backgroundColor = "gray";
//     taskCard.style.cursor = "pointer";

//     // Append the task card to the body or a container
//     document.body.appendChild(taskCard);

//     // Add the mousedown event to initiate drag
//     taskCard.addEventListener("mousedown", mousedown);

//     function mousedown(e) {
//         const offsetX = e.clientX - taskCard.offsetLeft;
//         const offsetY = e.clientY - taskCard.offsetTop;

//         document.addEventListener("mousemove", mousemove);
//         document.addEventListener("mouseup", mouseup);

//         taskCard.style.backgroundColor = "black";

//         function mousemove(e) {
//             const x = e.clientX - offsetX;
//             const y = e.clientY - offsetY;
//             taskCard.style.left = `${x}px`;
//             taskCard.style.top = `${y}px`;
//         }

//         function mouseup() {
//             document.removeEventListener("mousemove", mousemove);
//             document.removeEventListener("mouseup", mouseup);
//             taskCard.style.backgroundColor = "orange";
//         }
//     }
// }

// // Create 3 task cards dynamically
// createTaskCard();
// createTaskCard();
// createTaskCard();