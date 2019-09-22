import React, { useReducer, useState } from 'react';

import { todoReducer , initialTodoState } from '../reducers/reducers';

const TodoList = () => {
    const [newTodo, setNewTodo] = useState();

    const [state, dispatch] = useReducer(todoReducer, initialTodoState);

    const handleChanges = e => {
        setNewTodo(e.target.value);
    }

    const submitChanges = (e) => {
        e.preventDefault();
        dispatch({type: 'UPDATE_TODO',
        payload: newTodo})
    }

    const toggleComplete = (e) => {
        dispatch()
    }

    
    console.log(state.item)

    return (
        <div>
            <h3>Welcome to your to-do list.</h3>
            <form onSubmit={submitChanges}>
                <div>
                    <input 
                        className='todo-input'
                        type='text'
                        value={newTodo}
                        onChange={handleChanges}
                    />
                    <button type='submit'>Update list</button>
                    <button onClick={toggleComplete}>Clear</button>
                </div>
            </form>
            <div>
                <p>{state.list.map(todo => {
                        return <p id={todo.id}>{todo.item}</p>
                })}</p>
            </div>
        </div>
    )
}

export default TodoList;