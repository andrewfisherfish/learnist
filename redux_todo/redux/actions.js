let actions = {
    addTodo: (text) => {
        return {
            type: 'ADD_TODO',
            text: text
        }
    },
    completeTodo: (id) => {
        return {
            type: 'COMPLETE_TODO',
            id: id
        }
    },
    deleteTodo: (id) => {
        return {
            type: 'DELETE_TODO',
            id: id
        }
    },
    createNewUserId: () => {
        // async action
        return {
            type: 'CREATE_USER_ID',
            id: Math.round(Math.random() * 100, 0)
        }
    },
    createNewUserIdIfOdd: () => {
        return (dispatch, getState) => {
            const { user } = getState()
            if (user.id % 2 === 0) {
              return
            }
            dispatch(actions.createNewUserId())
        }
    },
    createNewUserIdIfAsync: () => {
        return (dispatch) => {
            setTimeout(() =>{
              dispatch(actions.createNewUserId())
            }, 2500)
        }
    }
}

export default actions
