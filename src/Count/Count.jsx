import s from "./Count.module.css";
import { clsx } from "clsx";

const Count = ({
  handlePlus,
  handleMinus,
  handleReset,
  count,
  step,
  setStep,
}) => {
  return (
    <div className={s.corob}>
      <div className={s.litleCorob}>
        <p className={clsx(count >= 0 ? s.numeric : s.red)}>{count}</p>
        <input
          className={s.input}
          type="number"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
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
