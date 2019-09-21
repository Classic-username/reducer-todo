import React, { useReducer, useState } from 'react';

import { todoReducer , initialTodoState } from '../reducers/reducers';

const TodoList = () => {
    const [newTodo, setNewTodo] = useState();

    const [state, dispatch] = useReducer(todoReducer, initialTodoState);

    const handleChanges = e => {
        setNewTodo(e.target.value);
    }
    console.log(state)

    return (
        <div>
            <h3>Welcome to your to-do list.</h3>
            <div>
                <input 
                    className='todo-input'
                    type='text'
                    name={newTodo}
                    onChange={handleChanges}
                />
                <button
                    onClick={ () => 
                        dispatch({
                            type: 'UPDATE_TODO', 
                            payload: newTodo
                        })
                    }
                >
                    Update list
                </button>
            </div>
            <div>
                <p>{state.map(todo => {
                    if(todo.completed === false){
                        return <p id={todo.id}>{todo.item}</p>
                    }
                })}</p>
            </div>
        </div>
    )
}

export default TodoList;