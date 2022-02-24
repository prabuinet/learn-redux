import { todos } from './reducer'
import { deepFreeze } from './util'

test('todo with action ADD_TODO should add', () => {
    const stateBefore = [];
    const action = {
        id: 0,
        text: 'Learn Redux',
        type: 'ADD_TODO'
    };
    const stateAfter = [
        {
            id: 0,
            text: 'Learn Redux',
            completed: false
        }
    ];

    deepFreeze(stateBefore);
    deepFreeze(action);  

    expect(todos(stateBefore, action)).toEqual(stateAfter);
})

test("test toggleTodo", () => {
    const stateBefore = [
        {
            id: 0,
            text: 'Learn Redux',
            completed: false
        },
        {
            id: 1,
            text: 'Learn React',
            completed: false
        },
    ];
    const action = {
        id: 0,
        type: 'TOGGLE_TODO'
    };
    const stateAfter = [
        {
            id: 0,
            text: 'Learn Redux',
            completed: true
        },
        {
            id: 1,
            text: 'Learn React',
            completed: false
        },
    ];

    deepFreeze(stateBefore);
    deepFreeze(action);  

    expect(todos(stateBefore, action)).toEqual(stateAfter);
})