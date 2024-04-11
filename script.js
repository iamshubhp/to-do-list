document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('form');
    const input = document.getElementById('input');
    const todosUL = document.getElementById('todos');

    // Function to create a new todo item
    function addTodo() {
        const todoText = input.value.trim();

        if (todoText !== '') {
            const todoLI = document.createElement('li');
            todoLI.innerText = todoText;
            todoLI.addEventListener('click', toggleTodo); // Toggle completed on click
            todoLI.addEventListener('contextmenu', deleteTodo); // Delete on right click
            todosUL.appendChild(todoLI);
            input.value = ''; // Clear input after adding todo
        }
    }

    // Function to toggle completed status of todo
    function toggleTodo() {
        this.classList.toggle('completed');
    }

    // Function to delete todo
    function deleteTodo(e) {
        e.preventDefault(); // Prevent context menu from appearing
        this.remove();
    }

    // Event listener for form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        addTodo();
    });
});
