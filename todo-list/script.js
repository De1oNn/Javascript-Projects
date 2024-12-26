document.querySelectorAll(".read-card").forEach(card => {
    card.addEventListener("click", function() {
        document.querySelector(".popup-outside").style.display = "flex";
    });
});

document.querySelector(".close").addEventListener("click", function() {
    document.querySelector(".popup-outside").style.display = "none";
});


document.querySelector(".button").addEventListener("click", function() {
    // Create a new div element
    const newDiv = document.createElement("div");    

    // Add some text content to the div
    newDiv.textContent = "This is a new div!";
    document.body.appendChild(newDiv);
});

