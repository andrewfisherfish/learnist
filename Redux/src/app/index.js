import {
    createStore
} from 'redux';

import {
    addTask,
    getTasks
} from './actions';

import RootReducer from './reducers';

let store = createStore(RootReducer);

let unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(addTask('my task', 'todo'));
store.dispatch(addTask('blahblagh', 'todo'));
store.dispatch(addTask('blahblagh', 'todo'));

unsubscribe();

// Data Flow - http://redux.js.org/docs/basics/DataFlow.html




// FAKE REDUX STORE IMPLEMENTATION
// class storeService {
//     constructor(reducers) {
//         this.reducers = reducers;
//         this.subscribers = [];
//     }
//
//     subscribe(cb) {
//         this.subscribers.push(cb);
//     }
//
//     dispatch(action) {
//         this.state = this.reducers(this.state, action);
//         this.subscripers.forEach((sub) => {
//             sub();
//         })
//     }
//
//     getState() {
//         return Object.assign({}, this.state);
//     }
// }
