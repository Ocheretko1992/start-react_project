import css from "./Permissions.module.css";

const Permissions = (props) => {
  return (
    <div className={css.fix}>
      <div className={css.max}>
        {props.children}
        <p>&copy; Всі права захищені 2024</p>
      </div>
    </div>
  );
};

export default Permissions;
