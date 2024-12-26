
// Get references to DOM elements
const readSection = document.querySelector('.read');
const watchSection = document.querySelector('.watch');
const buySection = document.querySelector('.buy');
const doneSection = document.querySelector('.done');
const popupOutside = document.querySelector('.popup-outside');
const popup = document.querySelector('.popup');
const addTaskButton = document.querySelector('.button');
const inputTitle = document.querySelector('.box1');
const inputDescription = document.querySelector('.box2');
const inputStatus = document.querySelector('.box3');
const inputPriority = document.querySelector('.box4');

// Function to close the popup
const closePopup = () => {
    popupOutside.style.display = 'none';
    inputTitle.value = '';
    inputDescription.value = '';
    inputStatus.value = '';
    inputPriority.value = '';
};

// Function to show the popup
const showPopup = () => {
    popupOutside.style.display = 'flex';
};

// Function to create a new task card
const createTaskCard = (taskData, section) => {
    const taskCard = document.createElement('div');
    taskCard.classList.add('task-card');
    taskCard.innerHTML = `
        <h2>${taskData.title}</h2>
        <p>${taskData.description}</p>
        <p>Status: ${taskData.status}</p>
        <p>Priority: ${taskData.priority}</p>
        <button class="mark-done">Mark as Done</button>
    `;
    // Handle task completion (move task to the 'Done' section)
    taskCard.querySelector('.mark-done').addEventListener('click', () => {
        doneSection.querySelector('.task-list').appendChild(taskCard);
        taskCard.querySelector('.mark-done').remove();
    });

    // Append the task card to the appropriate section
    section.querySelector('.task-list').appendChild(taskCard);
};

// Event listener for the 'Add Card' buttons (to open the popup)
readSection.querySelector('#add').addEventListener('click', showPopup);
watchSection.querySelector('#add').addEventListener('click', showPopup);
buySection.querySelector('#add').addEventListener('click', showPopup);

// Event listener for the 'Add Task' button in the popup
addTaskButton.addEventListener('click', () => {
    const taskData = {
        title: inputTitle.value,
        description: inputDescription.value,
        status: inputStatus.value,
        priority: inputPriority.value,
    };

    if (taskData.title && taskData.description && taskData.status && taskData.priority) {
        // Choose which section to add the task to
        const activeSection = readSection.querySelector('#read').style.backgroundColor === 'aqua'
            ? readSection
            : watchSection.querySelector('#watch').style.backgroundColor === 'burlywood'
            ? watchSection
            : buySection;

        createTaskCard(taskData, activeSection);
        closePopup();
    } else {
        alert('Please fill in all the fields!');
    }
});

// Event listener for closing the popup when clicking outside of it
popupOutside.addEventListener('click', (e) => {
    if (e.target === popupOutside) {
        closePopup();
    }
});