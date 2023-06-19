import PropTypes from 'prop-types';
import { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { AiFillEdit } from 'react-icons/ai';
import styles from '../styles/TodoItem.module.css';

const TodoItem = ({ itemProp, setTodos, delTodo }) => {
  const [editing, setEditing] = useState(false);
  const [textClicked, setTextClicked] = useState(false);

  const handleChange = () => {
    setTodos((prevState) => prevState.map((todo) => {
      if (todo.id === itemProp.id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    }));
  };

  const handleEditing = () => {
    setEditing(true);
  };

  const setUpdate = (updatedTitle, id) => {
    setTodos((prevState) => prevState.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          title: updatedTitle,
        };
      }
      return todo;
    }));
  };

  const viewMode = {};
  const editMode = {};
  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setUpdate(event.target.value, itemProp.id);
      setEditing(false);
    }
  };

  const handleTextClick = () => {
    setTextClicked(true);
  };

  const handleTextKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleTextClick();
    }
  };

  return (
    <li className={styles.item}>
      <div
        className={`${styles.content} ${itemProp.completed && styles.completed}`}
        style={viewMode}
      >
        <input
          type="checkbox"
          checked={itemProp.completed}
          onChange={handleChange}
        />
        <button
          type="button"
          onClick={handleEditing}
          className={styles.editButton}
        >
          <AiFillEdit style={{ color: '#5e5e5e', fontSize: '20px' }} />
        </button>
        <button
          type="button"
          onClick={() => delTodo(itemProp.id)}
          className={styles.deleteButton}
        >
          <FaTrash style={{ color: '#5e5e5e', fontSize: '16px' }} />
        </button>
        <field
          className={`${styles.title} ${textClicked && styles.overflow}`}
          onClick={handleTextClick}
          onKeyDown={handleTextKeyDown}
          tabIndex={0} // Make the div focusable for keyboard events
        >
          {itemProp.title}
        </field>
      </div>
      <input
        type="text"
        value={itemProp.title}
        className={styles.textInput}
        style={editMode}
        onChange={(e) => setUpdate(e.target.value, itemProp.id)}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
};

TodoItem.propTypes = {
  itemProp: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  setTodos: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};

export default TodoItem;
