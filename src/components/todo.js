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
         <table className='todo-table'>
            <thead>
               <tr>
                  <th>Task</th>
                  <th>Option</th>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <td>Do laundry</td>
                  <td>
                     <button>Edit</button>
                     <button>Delete</button>
                  </td>
               </tr>
            </tbody>         
         </table>
      </div>
   )
}

export default Todo