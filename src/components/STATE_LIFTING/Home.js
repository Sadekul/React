import React, { useState } from 'react'

import Todos from './Todos';
import NewTodo from './NewTodo';

const dummyTodos = ["todo1", "todo2"];

const Home = () => {

    const [todos, setTodos] =  useState(dummyTodos);

    const handleNewTodo = (NewTodo) =>{
setTodos([... todos, NewTodo])
    };

  return (
    <div>
        <NewTodo onTodo={handleNewTodo}/>
    <Todos todosData={todos} />
    </div>
  )
}

export default Home;
