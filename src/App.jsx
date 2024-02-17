import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo, toggleTodo, editTodo } from './store/slices/todoSlice';
import Container from './component/Container';

  const App = () => {
  const todos = useSelector(state => state.todo.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    const newTodo = {
      id: Math.random() * 2,
      text: '',
      completed: false,
    };
    dispatch(addTodo(newTodo));
  };

  const handleDeleteTodo = id => {
    dispatch(removeTodo(id));
  };

  const handleToggleTodo = id => {
    dispatch(toggleTodo(id));
  };

  const handleEditTodo = (id, newText) => {
    dispatch(editTodo({ id, text: newText }));
  };

  return (
    <>
   
      <Container>
      <h1>Todo App</h1>
      <button className='border border-blue-500 hover:border-indigo-900 rounded-sm ' onClick={handleAddTodo}>Add Todo</button>
      
      <ul>

        {todos.map(todo => (

          <li key={todo.id} className="list-none md:list-disc hover:list-disc mb-1 rounded">
            
            <input className='mx-1'
              type="checkbox"
              onChange={() => handleToggleTodo(todo.id)}
            />

            <input className='input p-1 m-1 outline-none'
              type="text"
              value={todo.text}
              onChange={e => handleEditTodo(todo.id, e.target.value)}
            />

            <button className='btn-li' onClick={e => handleEditTodo(todo.id, e.target.value)}>Edit</button>

            <button className='btn-li' onClick={() => handleDeleteTodo(todo.id)}>Delete</button>

          </li>
        ))}

      </ul>

      </Container>

      </>
  );
};

export default App;