import './style.css'
import { createStore } from 'redux'

function counter(state = 0, action) {
  if(action.type === 'INCREMENT')
      return state + 1;
  else if(action.type === 'DECREMENT')
      return state - 1;
  else
      return state;
}

const store = createStore(counter);

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

