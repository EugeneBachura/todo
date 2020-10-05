import React, {useContext} from "react"
import Context from "../Context"

export default function TodoItem(props) {
const {removeTodoItem} = useContext(Context)
  const clases = []

  if (props.todo.completed) clases.push('done')

  return (
    <li className="TodoItem">
      <span className={clases.join(';')}>
        <input type="checkbox" onChange={() => props.changeTodoItem(props.todo.id)} checked={props.todo.completed}/>
        <b>{props.index}</b>
        {props.todo.title}
      </span>
      <button className="TodoBtn" onClick={() => removeTodoItem(props.todo.id)}>&times;</button>
    </li>
  );
}
