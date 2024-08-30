import React from 'react'

const NewTodo = (props) => {
    props.onHandleNewTodo({title: 'I am new todo'})



  return (
    <div>
      NewTodo
    </div>
  )
}

export default NewTodo;
