import React from 'react'

const Todo = () => {
   return (
      <div className='todo-container'>
         <div className='todo-desc'>
            <h2>Todo List</h2>
            <p>Do you have something to do?</p>
            <input type='text' placeholder='Make a coffee...'></input>
            <button>Add</button>
         </div>
         <div className='todo-list'>
            <div className='todo-header'>
               <span>Task</span>
               <span>Options</span>
            </div>
            <div className='todos'>
               <span>Do Laundry</span>
               <button>Edit</button>
               <button>Delete</button>
               <span>Exercise - Walking</span>
               <button>Edit</button>
               <button>Delete</button>
            </div>
         </div>
      </div>
   )
}

export default Todo