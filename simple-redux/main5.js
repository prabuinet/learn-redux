export const toggleTodoMutable = (todo) => {
    todo.completed = !todo.completed;
    return todo;
}

export const toggleTodoImmutable = (todo) => {
    /*
    return Object.assign({}, todo, {
        completed: !todo.completed
    })
    */

    return {
        ...todo,
        completed: !todo.completed
    }
    

    //return todo;
}

