import css from "./Header.module.css";
import { FcGlobe } from "react-icons/fc";

const Header = () => {
  return (
    <header className={css.header}>
      <FcGlobe className={css.earth} />
      <ul className={css.style}>
        <li>Home</li>
        <li>Registration</li>
        <li>Logaut</li>
      </ul>
    </header>
  );
};

export default Header;
