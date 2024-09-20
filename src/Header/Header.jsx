import css from "./Header.module.css";

const Header = () => {
  return (
    <header className={css.header}>
      <img
        src="https://img.freepik.com/free-vector/detailed-welder-logo-template_23-2149040500.jpg?t=st=1726710083~exp=1726713683~hmac=a26986b5ebdeb5bd4b350d7117f3d6834573bfbc4b47eb837edd42a70508b722&"
        width={40}
        height={40}
        alt="welders"
      />
      <ul className={css.style}>
        <li>Home</li>
        <li>Registration</li>
        <li>Logaut</li>
      </ul>
    </header>
  );
};

export default Header;
