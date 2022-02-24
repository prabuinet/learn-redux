import './style.css'


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

function render() {
  document.getElementById('currentState').innerHTML = store.getState().toString();
}

store.subscribe(render);
render();

document.getElementById('incrButton').addEventListener('click', function() {
  store.dispatch({type: 'INCREMENT'})    
})

document.getElementById('decrButton').addEventListener('click', function() {
  store.dispatch({type: 'DECREMENT'})    
})

