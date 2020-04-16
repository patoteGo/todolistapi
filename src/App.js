import React, { useState, useEffect }  from 'react';
import './App.css';
import Todolist from './Components/Todolist.jsx'
import Todoform from './Components/Todoform.jsx'
import Typography from '@material-ui/core/Typography';


function App() {

  


  const [ todos, setTodos ] = useState([]);

  const APIurl = 'https://assets.breatheco.de/apis/fake/todos/user/patote';

  function addTodo(todo) {
    setTodos([...todos, todo]);
        // setTodos(
        // todos.map((todo, key) => {
        //   return  todo.done = key;
        //  })
        // )
    
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
      setTodos( responseJSON )
  
      
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
        // console.log(resp.ok); // will be true if the response is successfull
        // console.log(resp.status); // the status code = 200 or code = 400 etc.
        // console.log(resp.text()); // will try return the exact result as string
        // return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
    })
    .then(data => {
        //here is were your code should start after the fetch finishes
        // console.log(data); //this will print on the console the exact object received from the server
    })
    .catch(error => {
        //error handling
        // console.log(error);
    });
  }, [todos]);





  function removeTodo(key){
    console.log('removetodo',key);
    let newTodo = [ ...todos];
    
    newTodo = newTodo
              .filter( (todo) => { if ( todo.id !== key) return todo })
              .map( (todo, index) => { return { ...todo, id: index}}) 
      
    console.log(newTodo);
    // updateAPI(newTodo);
    setTodos(newTodo);
    

  }

  function doneTodo(key){
      const newTodo = [...todos];
      newTodo.map( (todo) => {
        if( todo.id === key) { todo.done = !todo.done; return todo }
        else return todo
      })
      
      setTodos(newTodo);
      // console.log(todos[key], todos[key].done);
        // setTodos ( { todos[key].done : true })
        // setTodos( todos[key].done = !todos[key].done );
  }


  return (
    <div className="container">
      <div className="App">
        <Typography variant="h5" style={{ padding: 16, color: 'white' }}>QUE HACERES</Typography>
        <Todoform addTodo={addTodo} uniqueId={ todos.length } />
        <Todolist todos={todos} removeTodo={removeTodo} doneTodo={doneTodo}/>
        <p>Te quedan <strong>{ todos.length }</strong> tareas</p>
      </div>
    </div>
  );
}

export default App;
