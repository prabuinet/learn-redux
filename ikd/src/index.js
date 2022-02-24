import { createStore } from "redux";

export default function counter(state = 0, action) {
    if(action.type === 'INCREMENT')
        return state + 1;
    else if(action.type === 'DECREMENT')
        return state - 1;
    else
        return state;
}

const store = createStore(counter);

console.log(store);
console.log(store.getState());
store.dispatch({type: "INCREMENT"});
store.dispatch({type: "INCREMENT"});
store.dispatch({type: "INCREMENT"});
console.log(store.getState());
