class Model {
    /**
     * Try to fetch tasks in the localStorage if its not empty.
     * If it is, then initialize the todolist with an empty array.
     */
    constructor() {
        if (!Model.instance) {
            const savedData = localStorage.getItem('todos');
            this.todos = savedData ? JSON.parse(savedData) : [];
            Model.instance = this;
        } else {
            this.todos = Model.instance.todos;
        }
        
    }

    /**
     * Part of singleton pattern, method used to fetch the instance of Model./
     * @returns only instance of Model class in the application.
     */
    static getInstance() {
        if(!Model.instance) {
            new Model();
        }
        return Model.instance;
    }

    _saveToLocalStorage() {
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }

    /**
     * Delete all existing tanks in the todolist.
     */
    deleteAllTodo() {
        this.todos = [];
        document.getElementById('todo-list').innerHTML = '';
        this._saveToLocalStorage();
    }
    
    /**
     * Edit selected element of the array.
     * @param {*} id of the task
     * @param {string} updatedText new description
     */
    editTodo(id, updatedText) {
        const todo = this.todos.find(t => t.id === id);
        if (todo) {
            todo.text = updatedText;
            todo.category = category;
            this._saveToLocalStorage();
        }
    }

    /**
     * Delete selected element.
     * @param {*} id of the task
     */
    deleteTodo(id) {
        this.todos = this.todos.filter(t => t.id !== id);
        this._saveToLocalStorage();
    }

    /**
     * Allow the user to toggle (completed or not) tasks in the todo list.
     * @param {*} id of the task
     */
    toggleTodo(id) {
        const index = todos.findIndex(todo => todo.id === id);
        if (index !== -1) {
            const updatedTodo = Object.assign({}, todos[index], { completed: !todos[index].completed });
            todos[index] = updatedTodo;
            this._saveToLocalStorage();
        }
    }

    /**
     * Get all the todos array.
     * @returns the array of the todolist
     */
    getTodos() {
        return this.todos;
    }
}