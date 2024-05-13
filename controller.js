class Controller {
    /*
     * The controller act as a intermediary between the model and the view.
     * It responds to user's actions and update the model accordingly.
     * Then, the view re-render itself.
     */
    constructor(view) {
        const model = AdvancedTasks.getInstance();
        this.model = model;
        this.view = view;
        this.view.bindAddTodo(this.handleAddTodo.bind(this));
        this.view.bindDeleteTodo(this.handleDeleteTodo.bind(this));
        this.view.bindToogleTodo(this.handleToggleTodo.bind(this));
        this.view.bindDeleteAll(this.handleDeleteAll.bind(this));
        this.view.bindFormSubmit(this.handleFormSubmit.bind(this));
    }

    handleAddTodo(text) {
        this.model.addTodo(text);
        this.onUpdate();
    }

    handleFormSubmit(event) {
        event.preventDefault();s
        const taskText = document.getElementById('task-input');
        const category = document.getElementById('category');
        this.handleAddTodo(taskText, category);
    }

    handleEditTodo(id, updatedText, category) {
        this.model.editTodo(id, updatedText, category);
        this.onUpdate();
    }

    handleDeleteAll() {
        this.model.deleteAllTodo();
        this.onUpdate();
    }

    handleToggleTodo(id) {
        this.model.toogleTodo(id);
        this.onUpdate();
    }

    handleDeleteTodo(id) {
        this.model.deleteTodo(id);
        this.onUpdate();
    }

    onUpdate() {
        this.view.render(this.model.getTodos());
    }
}