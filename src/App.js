import React from 'react';

import Todo from './components/Todo';
import NewTodo from './components/NewTodo';


const App = () =>{

const handleNewTodo = (newTodo) => {
    console.log(newTodo);
}

  return (
    <div className='parent'>
           <h1 className="headerStyle">more on state lifting</h1>
        
        <Todo title="learn React.js"/>
        <NewTodo onHandleNewTodo={handleNewTodo}/>
    </div>
  )
}
export default App;


