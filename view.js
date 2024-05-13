class View extends TaskRenderer {
    constructor() {
        super();
        this.todoList = document.getElementById('todo-list');
        this.inputField = document.getElementById('task-input');
    }

    /**
     * Fetch all elements of todos array and display it.
     * @param {Array} todos array of the todolist
     */
    render(todos) {
        todos.forEach(todo => {
            let item = document.getElementById(todo.id);
            if (!item) {
                item = document.createElement('li');
                item.id = todo.id;

                // Create a checkbox
                let checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.id = `checkbox-${todo.id}`;

                // Create a label for the checkbox
                let label = document.createElement('label');
                label.htmlFor = `checkbox-${todo.id}`;
                label.appendChild(document.createTextNode(todo.text));

                // Append the checkbox and label to the li
                label.appendChild(checkbox);
                item.appendChild(label);

                // Set the color of the task text based on its category
                item.style.color = todo.color;
                this.todoList.appendChild(item);
            }
        });
    }

    /**
     * Handle the add task interaction
     * @param {*} handler 
     */
    bindAddTodo(handler) {
        const addButton = document.getElementById('add-task-button');
        addButton.addEventListener('click', () => {
            const taskText = this.inputField.value.trim();
            if (taskText) {
                handler(taskText);
                this.inputField.value = '';
            }
        });
    }

    /**
     * Handle the delete all tasks interaction
     * @param {*} handler 
     */
    bindDeleteAll(handler) {
        const deleteAllButton = document.getElementById('delete-all-task-button');
        deleteAllButton.addEventListener('click', () => {
            handler();
        })
    }

    /**
     * Handle the toggle status of tasks interaction
     * @param {*} handler
     */
    bindToogleTodo(handler) {
        const checkboxes = document.querySelectorAll('#todo-list input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', function() {
                const todoId = parseInt(this.id.split('-')[1]);
                handler(todoId);
            });                
        });
    }

    /**
     * Handle the delete task interaction
     * @param {*} handler 
     */
    bindDeleteTodo(handler) {
        this.todoList.addEventListener('click', event => {
            if (event.target.matches('.delete')) {
                const id = parseInt(event.target.parentNode.id);
                handler(id);
            }
        });
    }

    bindFormSubmit(handler) {
        const form = document.getElementById('task-form');
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            handler();
        });
    }
}