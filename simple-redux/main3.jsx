import './style.css'
import React from 'react';
import ReactDOM from 'react-dom';

function counter(state = 0, action) {
  if(action.type === 'INCREMENT')
      return state + 1;
  else if(action.type === 'DECREMENT')
      return state - 1;
  else
      return state;
}

const createStore = (reducer) => {
    let state;
    let listeners = [];

    const getState = () => state;

    const dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach(listener => listener());
    }

    const subscribe = (listener) => {
        listeners.push(listener);
        return () => {
            listenrs => listeners.filter(l => l !== listener);
        }
    }

    dispatch({})
    return { getState, dispatch, subscribe }
}

const store = createStore(counter);
console.log(store);



// document.getElementById('incrButton').addEventListener('click', function() {
//   store.dispatch({type: 'INCREMENT'})    
// })

// document.getElementById('decrButton').addEventListener('click', function() {
//   store.dispatch({type: 'DECREMENT'})    
// })


function Counter({value, onIncrement, onDecrement}) {
    return (
        <>
            <div>State: {value}</div>
            <button onClick={onIncrement}>Increment</button>
            <button onClick={onDecrement}>Decrement</button>
        </>
    )
}

const render = () => {
    ReactDOM.render(
        <Counter value={store.getState()} 
            onIncrement={() => store.dispatch({type: 'INCREMENT'})} 
            onDecrement={() => store.dispatch({type: 'DECREMENT'})} />,
        document.getElementById("app3")
    )
}

store.subscribe(render);
render();

