import React from 'react'
import Todo from './Todo'
import { List } from '@material-ui/core/';
function Todolist( { todos, removeTodo, doneTodo }){
    console.log(todos);

    return ( 
        <List>
            {
                todos.map((todo,key) => (
                    <Todo key={key} todo={todo} removeTodo={() => removeTodo(key)} doneTodo={doneTodo}/>
                ))
            }
        </List>
    )
}

export default Todolist;