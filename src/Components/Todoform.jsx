import React, { useState} from 'react';
import uuid from "uuid";
import { Button, TextField } from '@material-ui/core/';
function Todoform({ addTodo, uniqueId }) {

    const [ todo, setTodos ] = useState({
        id: "",
        label: "",
        done: false
    });

    function handleInputChange(e) {
        setTodos({ ...todo, label: e.target.value })
        console.log(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (todo.label.trim()) {
            
            
            addTodo( { ...todo, id: uniqueId });
            //reset
            setTodos({ ...todo, label: ""});
        }
    }

   

    return ( 
        <form className="todo-form" onSubmit={handleSubmit} style={{ marginBottom: '25px' }}>
            <TextField 
                label="texto"
                type="text"
                value={todo.label}    
                onChange={handleInputChange}
                placeholder="escribe aquí"
                style={{ color: 'white' }}
            /> 
            <Button type="submit" style={{ color: 'white' }} >Enviar</Button>
        </form>
    )
}

export default Todoform;