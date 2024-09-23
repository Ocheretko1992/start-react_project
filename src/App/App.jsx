import Header from "../Header/Header";
import Permissions from "../Permissions/Permissions";
import Section from "./../Section/Section";
import TodoList from "../TodoList/TodoList";
import colors from "../Color.json";
import User from "../User/User";
import Users from "../Users.json";
import "../index.css";
import Count from "./../Count/Count";
import { useState } from "react";
import FilterTodoList from "../FilterTodoList/FilterTodoList";
import Modal from "./../Modal/Modal";

const App = () => {
  const [count, setCount] = useState(
    JSON.parse(window.localStorage.getItem("count")) ?? 0
  );
  const [step, setStep] = useState(0);
  const [carrentColor, setCarrentColor] = useState("wite");
  const [modal, setModal] = useState(false);

  const age = 18;

  const openeModal = () => setModal(true);
  const closeModal = () => setModal(false);

  const handlePlus = () => {
    setCount((prev) => prev + step);
  };

  const handleMinus = () => {
    setCount((prev) => prev - step);
  };
  const handleReset = () => {
    setCount(0);
    setStep(1);
  };

  const handleColor = (color) => {
    setCarrentColor(color);
  };

  return (
    <div>
      <Header />
      {age >= 18 ? (
        <Permissions>
          <h1>Hello Oleh</h1>
          <button type="button" style={{ color: "red", background: "green" }}>
            nice
          </button>
        </Permissions>
      ) : (
        <Section />
      )}
      <TodoList
        colors={colors}
        handleColor={handleColor}
        carrentColor={carrentColor}
      />
      <User users={Users} />
      <Count
        handlePlus={handlePlus}
        handleMinus={handleMinus}
        handleReset={handleReset}
        count={count}
        step={step}
        setStep={setStep}
      />
      <FilterTodoList />

      <button onClick={openeModal}>Open Modal</button>

      {modal && (
        <Modal closeModal={closeModal}>
          <p>Продам Теслу</p>
        </Modal>
      )}
    </div>
  );
};

export default App;
