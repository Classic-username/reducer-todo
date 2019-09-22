export const initialTodoState = {
    list: [
    {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
    }]
}

export const todoReducer = (state, action) => {
    switch(action.type) {
        case "UPDATE_TODO":
            return {
                list: [
                    ...state.list, 
                    {item: action.payload,
                         completed: false, 
                         id: new Date()}
                ]
            }
            case 'CLEAR_TODO':
                return{
                    
                }
        default:
            return state;
    }
}