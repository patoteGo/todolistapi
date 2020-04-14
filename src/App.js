import React, { useState, useEffect }  from 'react';
import './App.css';
import Todolist from './Components/Todolist.jsx'
import Todoform from './Components/Todoform.jsx'
import Typography from '@material-ui/core/Typography';


function App() {

  


  const [ todos, setTodos ] = useState([]);

  const APIurl = 'https://assets.breatheco.de/apis/fake/todos/user/patote';

  function addTodo(todo) {
    setTodos([todo, ...todos]);
    
  }

  useEffect(() => {
    fetch(APIurl, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then( response => {
      // console.log(response);
      return response.json();
    }).then ( responseJSON => {
      // console.log(responseJSON);
      // responseJSON.map((r) => console.log(r))
      setTodos( responseJSON );
    })

  }, []);

  useEffect(() => {
    //cuando se actualiza un elemento
    fetch(APIurl, {
      method: "PUT",
      body: JSON.stringify(todos),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(resp => {
        console.log(resp.ok); // will be true if the response is successfull
        console.log(resp.status); // the status code = 200 or code = 400 etc.
        // console.log(resp.text()); // will try return the exact result as string
        // return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
    })
    .then(data => {
        //here is were your code should start after the fetch finishes
        console.log(data); //this will print on the console the exact object received from the server
    })
    .catch(error => {
        //error handling
        console.log(error);
    });
  }, [todos]);



  function toggleCompleted(id) {
    setTodos(
      todos.map(todo => {
        if(todo.id === id){
          return {
            ...todo,
            done: !todo.done
          }
        }
        return todo; 
      })
    )
  }

  function removeTodo(id){
    setTodos(todos.filter((todo) => { return todo.id !== id }))
  }


  return (
    <div className="container">
      <div className="App">
        <Typography variant="h5" style={{ padding: 16, color: 'white' }}>QUE HACERES</Typography>
        
        <Todoform addTodo={addTodo} uniqueId={ todos.length } />
        <Todolist todos={todos} toggleCompleted={toggleCompleted} removeTodo={removeTodo}/>
        <p>Te quedan <strong>{ todos.length }</strong> tareas</p>
      </div>
    </div>
  );
}

export default App;
