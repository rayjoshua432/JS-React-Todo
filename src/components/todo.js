import React, { useState } from 'react'

const Todo = () => {
   // State functions
   const [state, setState] = useState({
      todo: '',
      todolist: []
   })
   const { todo, todolist } = state

   // Onchange handler
   const changeHandler = (e) => {
      const { name, value } = e.target

      setState({...state, [name]: value})
   }
   //onClick handler
   const addTodo = () => {
      const list = todolist
      list.push(todo)
      
      setState({...state, todolist: list})
   }
   const deleteTodo = () => {
      const list = todolist
  
   }

   return (
      <div className='todo-container'>
         <div className='todo-desc'>
            <h2>Todo List</h2>
            <p>Do you have something to do?</p>
            <input type="text" placeholder='Make a coffee...' defaultValue={todo} onChange={changeHandler}></input>
            <button onClick={addTodo}>Add</button>
         </div>
         <div className='todo-list'>
            <div className='todo-header'>
               <span>Task</span>
               <span>Options</span>
            </div>
            {
               todolist.length ?
                  todolist.map((value, index) => {
                     return (
                        <div key={index} className='todos'>
                           <span>{value}</span>
                           <button>Edit</button>
                        <button onClick={deleteTodo}>Delete</button>
                        </div>
                     )
                  }) : <span className='err'>Nothing to show here.</span>
            }
         </div>
      </div>
   )
}

export default Todo