import './App.css'
import styled from 'styled-components';

import TodoHead from './Component/TodoHead';
import TodoItem from './Component/TodoItem';
import TodoCreate from './Component/TodoCreate';
import { useCallback, useRef, useState } from 'react';

const Container = styled.div`
    width: 100%;
    max-width: 800px;
    height: 60rem;
    margin: 0 auto;
    margin-top: 4rem;
    padding: 1rem;
    border: 1px solid #ddd;
    background: #fff;
    border-radius: 1rem;
    box-shadow: 3px 2px 12px rgba(0, 0, 0, 0.15);
    position: relative;
    overflow:hidden;
`
function App() {

  const [todos, setTodos] = useState([
    {
      id: 0,
      text: 'ㅎㅇㅎㅇ',
      checked: false
    }
  ])

  const nextId = useRef(1);
  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false
    }

    setTodos(todos.concat(todo));
    nextId.current++;
  }, [todos]);

  const onRemove = useCallback((id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }, [todos]);

  const onToggle = useCallback((id) => {
    setTodos(todos.map((todo) => {
      return (
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    }))
  }, [todos])

  return (
    <Container>
      <TodoHead />
      <TodoItem
        todos={todos}
        onRemove={onRemove}
        onToggle={onToggle}
      />
      <TodoCreate onInsert={onInsert} />
    </Container>
  );
}

export default App;
