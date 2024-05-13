class AdvancedTasks extends Model {
    constructor() {
        super();
    }

    static getInstance() {
        let instance = super.getInstance();
        if (!(instance instanceof AdvancedTasks)) {
            instance = new AdvancedTasks();
            Model.instance = instance;
        }
        return instance;
    }

    /**
     * Set the category attribute of the advanced task class.
     * @param category 
     */
    setCategory(category) {
        this.category = category;
    }

    /**
     * Add one element in the todos array.
     * @param {string} text description of the task.
     */
    addTodo(text) {
        let color;
        switch (this.category) {
            case 'Work':
                color = 'red';
                break;
            case 'Home':
                color = 'blue';
                break;
            case 'Other':
                color = 'green';
                break;
            default:
                color = 'black';
        }
        const todo = { id: Date.now(), text, completed: false, category: this.category, color}
        this.todos.push(todo);
        this._saveToLocalStorage();
    }
}