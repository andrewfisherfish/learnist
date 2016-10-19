function getId(state) {
    return state.todos.reduce((maxId, todo) => {
        return Math.max(todo.id, maxId);
    }, -1) + 1;
}

export default (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return Object.assign({}, state, {
                todos: [{
                    text: action.text,
                    completed: false,
                    id: getId(state)
                }, ...state.todos]
            });
        case 'COMPLETE_TODO':
            return Object.assign({}, state, {
                todos: state.todos.map((todo) => {
                    return Object.assign({}, todo, {
                        completed: (todo.id === action.id) || todo.completed
                    });
                })
            });
        case 'DELETE_TODO':
            return Object.assign({}, state, {
                todos: state.todos.filter((todo) => {
                    return todo.id !== action.id;
                })
            });
        case 'CREATE_USER_ID':
            return Object.assign({}, state, {
                user: {
                    id: action.id,
                    username: state.user.username
                }
            });
        default:
            return state;
    }
}
