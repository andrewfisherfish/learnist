function getId(todos) {
    return todos.reduce((maxId, todo) => {
        return Math.max(todo.id, maxId);
    }, -1) + 1;
}

export default (todos = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [{
                text: action.text,
                completed: false,
                id: getId(todos)
            }, ...todos];
        case 'COMPLETE_TODO':
            return todos.map((todo) => {
                return Object.assign({}, todo, {
                    completed: (todo.id === action.id) || todo.completed
                });
            });
        case 'DELETE_TODO':
            return todos.filter((todo) => {
                return todo.id !== action.id;
            });
        default:
            return todos;
    }
}
