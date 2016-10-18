import {
    createStore
} from 'redux'

let store = createStore(function(state = {}, action) {
    switch (action.type) {
        case 'some':
            return action.data
    }
    return state;
});

let dispose = store.subscribe(function() {
    console.log(store.getState());
})

store.dispatch({
    type: 'some1',
    data: [1, 2]
})


dispose();


store.dispatch({
    type: 'some',
    data: [1, 2]
})
