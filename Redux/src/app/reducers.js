import {
    GET_TASKS,
    ADD_TASK,
    COMPLETE_TASK
} from './actions'

export default rootReducer;

const initialState = {
    tasks: []
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_TASKS:
            return Object.assign({}, state);
        case ADD_TASK:
            return addTaskReducer(state, action)
        case COMPLETE_TASK:
            return completeTaskReducer(state, action)
        default:
            return state;
    }
}

function addTaskReducer(state, action) {
    let task = action.payload;

    return Object.assign({}, state, {
        tasks: [...state.tasks, task]
    });
}

function completeTaskReducer(state, action) {
    return Object.assign({}, state, {
        tasks: state.tasks.map(function(task) {
            if (task.id === action.payload.id) {
                return Object.assign({}, task, {
                    completed: true
                })
            }

            return task;
        })
    })
}
