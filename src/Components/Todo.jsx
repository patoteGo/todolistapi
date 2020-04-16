import React from 'react'

import { IconButton, ListItem, Typography, Checkbox } from '@material-ui/core/';
import CloseIcon from '@material-ui/icons/Close';
function Todo( {todo, removeTodo, doneTodo}) {



    return (
        <ListItem id={todo.id} className={todo.done ? 'completed' : ''}>
            <Checkbox onChange={()=>doneTodo(todo.id)} defaultChecked={ todo.done ? true : false } ></Checkbox>
            <Typography variant="body1" style={{ color: 'white', textDecoration: todo.done ? 'line-through' : null}} >{todo.label}</Typography>
            <IconButton variant="contained" onClick={()=>removeTodo(todo.id)} style={{ display : 'inline', padding: '0', color: 'white' }}>
            <CloseIcon/>
        </IconButton>
       
        
        
        </ListItem>
    )
}

export default Todo;