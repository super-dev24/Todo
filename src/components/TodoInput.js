import React, {useState} from "react";
const TodoInput = ({createTodoItem}) => {
  const [value, setValue] = useState('');

  const hanldeSubmit = e => {
    e.preventDefault();
    if(value === "") {
      return console.log("Please add something to-do");
    }
    createTodoItem(value);
    setValue("");
  }

  return (
    <form onSubmit={hanldeSubmit}>
      <input
        type="text"
        placeholder="Add to do"
        value={value}
        onChange={e => setValue(e.target.value)}  
      />
      <button onClick={hanldeSubmit}>Create</button>
    </form>
  );
}

export default TodoInput;