import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import TodoApp from './components/Todoapp';

const domContainer = document.getElementById('root');
const root = ReactDOM.createRoot(domContainer);
root.render(
  <React.StrictMode>
    <TodoApp />
  </React.StrictMode>,
);
