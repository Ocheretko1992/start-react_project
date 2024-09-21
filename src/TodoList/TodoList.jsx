import s from "./TodoList.module.css";

const TodoList = ({ colors, handleColor, carrentColor }) => {
  return (
    <div style={{ backgroundColor: carrentColor }} className={s.divList}>
      <h1 className={s.colorH1}>Color: {carrentColor}</h1>
      <ul className={s.list}>
        {colors.map(({ color, id }) => (
          <li onClick={() => handleColor(color)} key={id} className={s.liList}>
            {color}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
