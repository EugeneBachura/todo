import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList(props) {
    return (
        <div className="TodoList">
            <ul>
                { props.todos.map( (todo, index) => {
                    return <TodoItem todo={todo} key={todo.id} index={index+1} changeTodoItem={props.changeTodoItem}/>
                })}
            </ul>
        </div>
    )
}