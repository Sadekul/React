import React from 'react';

import Todo from './Todo';

const Todos = (props) => {

  return (
    <div>
        {props.todosData.map((todo, index) => 
      <Todo key={index}  todo={todo}/>
        )}
    </div>
  )
}

export default Todos
