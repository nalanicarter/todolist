document.addEventListener("DOMContentLoaded", function() {
    const inputBox = document.getElementById("input-box");
    const listContainer = document.getElementById("list-container");

    // Define addTask globally
    window.addTask = function() {
        const taskText = inputBox.value.trim();
        if (taskText === '') {
            alert("You must write something!");
        } else {
            const li = document.createElement("li");
            li.textContent = taskText;
            listContainer.appendChild(li);

            const span = document.createElement("span");
            span.innerHTML = "\u00d7"; // Unicode character for multiplication sign (×)
            li.appendChild(span);
        }
        inputBox.value = "";
        saveData();
    };

    inputBox.addEventListener("keypress", function(e) {
        if (e.key === "Enter") {
            addTask();
        }
    });

    listContainer.addEventListener("click", function(e) {
        if (e.target.tagName === "LI") {
            e.target.classList.toggle("checked");
            saveData();
        } else if (e.target.tagName === "SPAN") {
            e.target.parentElement.remove();
            saveData();
        }
    }, false);

    function saveData() {
        localStorage.setItem("data", listContainer.innerHTML);
    }

    function showTask() {
        const data = localStorage.getItem("data");
        if (data) {
            listContainer.innerHTML = data;
        }
    }

    showTask();
});

