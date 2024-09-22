import css from "./FilterTodoList.module.css";

const LiTodo = ({ title, id, handleDeleteTodo }) => {
  return (
    <li className={css.liTodo}>
      <input type="checkbox" />
      <span className={css.span}>{title}</span>
      <button onClick={() => handleDeleteTodo(id)} className={css.btnDelete}>
        Delete
      </button>
    </li>
  );
};

export default LiTodo;
