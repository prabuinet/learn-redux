const todo = (state, action) => {
    switch(action.type) {
        case "ADD_TODO":
            return {
                id: action.id,
                text: action.text,
                completed: false
            };
        case 'TOGGLE_TODO':
            if(state.id !== action.id)
                return state;
            return {
                ...state,
                completed: !state.completed
            };
        default:
            return state;
    }
}

export const todos = (state = [], action) => {
    switch(action.type) {
        case "ADD_TODO":
            return [
                ...state,
                todo(state, action)
            ];
        case 'TOGGLE_TODO':
            return state.map((todo) => todo(todo, action));
        default:
            return state;
    }
}
