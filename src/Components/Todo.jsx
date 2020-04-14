import React from 'react'

import { IconButton, ListItem, Typography } from '@material-ui/core/';
import CloseIcon from '@material-ui/icons/Close';
function Todo( {todo, removeTodo}) {

    function HandleRemove() {
        removeTodo(todo.id)
    }

    return (
        <ListItem id={todo.id} className={todo.done ? 'completed' : ''}>
            <Typography variant="body1" style={{ color: 'white', textDecoration: todo.done ? 'line-through' : null}} >{todo.label}</Typography>
            <IconButton variant="contained" onClick={HandleRemove} style={{ display : 'inline', padding: '0', color: 'white' }}>
            <CloseIcon/>
        </IconButton>
       
        
        
        </ListItem>
    )
}

export default Todo;