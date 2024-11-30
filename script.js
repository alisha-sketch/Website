document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    // Add a new task
    addTaskBtn.addEventListener("click", () => {
        const task = taskInput.value.trim();
        if (task) {
            const listItem = document.createElement("li");

            listItem.innerHTML = `
                <span>${task}</span>
                <button class="deleteBtn">Delete</button>
            `;

            // Add delete functionality
            listItem.querySelector(".deleteBtn").addEventListener("click", () => {
                listItem.remove();
            });

            taskList.appendChild(listItem);
            taskInput.value = ""; // Clear input
        }
    });

    // Optional: Press Enter to add a task
    taskInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            addTaskBtn.click();
        }
    });
});
