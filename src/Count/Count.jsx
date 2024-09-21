import s from "./Count.module.css";
import { clsx } from "clsx";

const Count = ({ handlePlus, handleMinus, handleReset, count }) => {
  return (
    <div className={clsx}>
      <div className={s.litleCorob}>
        <p className={s.numeric}>{count}</p>
        <div className={s.proList}>
          <button onClick={handleMinus} type="button" className={s.list}>
            Minus
          </button>
          <button onClick={handleReset} type="button" className={s.list}>
            Reset
          </button>
          <button onClick={handlePlus} type="button" className={s.list}>
            Plus
          </button>
        </div>
      </div>
    </div>
  );
};

export default Count;
