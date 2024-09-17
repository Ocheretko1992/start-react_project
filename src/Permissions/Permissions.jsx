import css from "./Permissions.module.css";

const Permissions = (props) => {
  return (
    <div className={css.fix}>
      <div className={css.max}>
        <p>&copy; Всі права захищені 2024</p>
        {props.children}
      </div>
    </div>
  );
};

export default Permissions;
