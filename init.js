document.addEventListener('DOMContentLoaded', function() {
    const app = new Controller(new View());
    
    // Load the tasks from localStorage and update the view
    app.onUpdate();
})