import { useEffect } from "react";
import css from "./Modal.module.css";

const Modal = ({ children, closeModal, title = "Default modal" }) => {
  const handleCloseBackdrop = (e) => {
    if (e.target === e.currentTarget) closeModal();
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    const exidIntervalID = setInterval(() => {
      console.log(new Date().toLocaleTimeString());
    }, 1000);

    const timeoutID = setTimeout(() => {
      console.log("Oleh 😉");
    }, 3000);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      clearInterval(exidIntervalID);
      clearTimeout(timeoutID);
    };
  }, [closeModal]);

  return (
    <div onClick={handleCloseBackdrop} className={css.corob}>
      <div className={css.corobContent}>
        <>
          <h1 className={css.h1}>{title}</h1>
          <hr className={css.hr} />
        </>
        <button onClick={closeModal} type="button" className={css.closeBtn}>
          x
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
