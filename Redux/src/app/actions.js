export const GET_TASKS = 'GET_TASKS';
export const ADD_TASK = 'ADD_TASK';
export const COMPLETE_TASK = 'COMPLETE_TASK';

export function getTasks() {
    return {
        type: GET_TASKS,
        payload: {
            tasks: []
        }
    }
}

export function addTask(text, type) {
    let d = new Date();
    let id = d.getTime();

    return {
        type: ADD_TASK,
        payload: {
            id: id,
            text,
            type,
            completed: false
        }
    }
}

export function completeTask(id) {
    return {
        type: COMPLETE_TASK,
        payload: {
            id
        }
    }
}
