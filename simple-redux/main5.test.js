import { toggleTodoImmutable } from './main5';
import { deepFreeze } from './util'

test('toggleTodo should toggle the todo', () => {
    const todoBefore = {
        id: 0,
        text: 'learn redux',
        completed: false
    };
    const todoAfter = {
        id: 0,
        text: 'learn redux',
        completed: true
    };

    deepFreeze(todoBefore);
    expect(toggleTodoImmutable(todoBefore)).toEqual(todoAfter);
});

