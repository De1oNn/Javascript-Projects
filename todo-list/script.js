    document.querySelectorAll(".read-card").forEach(card => {
        card.addEventListener("click", function() {
            document.querySelector(".popup-outside").style.display = "flex";
        });
    });

    document.querySelector(".close").addEventListener("click", function() {
        document.querySelector(".popup-outside").style.display = "none";
    });


    document.querySelector(".button").addEventListener("click", function() {
        const newDiv = document.createElement("div");    

        newDiv.textContent = "This is a new div!";
        document.body.appendChild(newDiv);
    });









    // document.querySelectorAll(".read-card").forEach(card => {
    //     card.addEventListener("click", function() {
    //         document.querySelector(".popup-outside").style.display = "flex";
    //     });
    // });
    
    // // Close popup when clicking the 'close' button
    // document.querySelector(".close").addEventListener("click", function() {
    //     document.querySelector(".popup-outside").style.display = "none";
    // });
    
    // Add new task when clicking the 'Add Task' button
    document.querySelector(".button").addEventListener("click", function() {
        // Get values from input fields
        const title = document.querySelector("#taskTitle").value;
        const description = document.querySelector("#taskDescription").value;
        const status = document.querySelector("#taskStatus").value;
        const priority = document.querySelector("#taskPriority").value;
    
        // Check if all inputs are filled (optional)
        if (title && description && status && priority) {
            // Create a new task div
            const newTaskDiv = document.createElement("div");
            newTaskDiv.classList.add("task-card");
    
            // Add task details to the div
            newTaskDiv.innerHTML = `
                <h3>${title}</h3>
                <p><strong>Description:</strong> ${description}</p>
                <p><strong>Status:</strong> ${status}</p>
                <p><strong>Priority:</strong> ${priority}</p>
            `;             
    
            // Style the new task card (optional)
            newTaskDiv.style.backgroundColor = "#f3f3f3";
            newTaskDiv.style.padding = "10px";
            newTaskDiv.style.margin = "10px 0";
            newTaskDiv.style.borderRadius = "5px";
    
            // Determine where to add the new task (based on status)
            if (status.toLowerCase() === "to read") {
                document.querySelector(".read").appendChild(newTaskDiv);
            } else if (status.toLowerCase() === "to watch") {
                document.querySelector(".watch").appendChild(newTaskDiv);
            } else if (status.toLowerCase() === "to buy") {
                document.querySelector(".buy").appendChild(newTaskDiv);
            } else if (status.toLowerCase() === "done") {
                document.querySelector(".done").appendChild(newTaskDiv);
            } else {
                alert("Invalid status. Please use 'To Read', 'To Watch', 'To Buy', or 'Done'.");
                return;
            }
    
            // Close the popup after adding the task
            document.querySelector(".popup-outside").style.display = "none";
    
            // Clear the input fields
            document.querySelector("#taskTitle").value = "";
            document.querySelector("#taskDescription").value = "";
            document.querySelector("#taskStatus").value = "";
            document.querySelector("#taskPriority").value = "";
        } else {
            alert("Please fill in all fields.");
        }
    });
