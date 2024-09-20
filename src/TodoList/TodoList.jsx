import s from "./TodoList.module.css";

const TodoList = ({ colors }) => {
  return (
    <div>
      <ul className={s.list}>
        {colors.map(({ color, id }) => (
          <li key={id} className={s.liList}>
            {color},
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
