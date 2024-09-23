import { nanoid } from "nanoid";
import css from "./FilterTodoList.module.css";
import LiTodo from "./LiTodo";
import TodosData from "./todo.json";
import { useEffect, useState } from "react";

const FilterTodoList = () => {
  const [todos, setTodos] = useState(() => {
    const saveData = JSON.parse(window.localStorage.getItem("todos"));
    if (saveData?.length) {
      return saveData;
    }
    return TodosData;
  });

  const [newTodoValue, setNewTodoValue] = useState("");

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleDeleteTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  const handleAddTodo = () => {
    const newTodo = { title: newTodoValue, id: nanoid() };
    console.log(newTodo);
    setTodos((prev) => [...prev, newTodo]);
    setNewTodoValue("");
  };

  return (
    <>
      <div className={css.corob}>
        <input
          value={newTodoValue}
          onChange={(e) => setNewTodoValue(e.target.value)}
          className={css.input}
        />
        <button onClick={handleAddTodo} className={css.btnAdd}>
          Add
        </button>
      </div>
      <ul className={css.ulList}>
        {todos.map((item) => (
          <LiTodo key={item.id} {...item} handleDeleteTodo={handleDeleteTodo} />
        ))}
      </ul>
    </>
  );
};

export default FilterTodoList;
