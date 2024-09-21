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

const App = () => {
  const [count, setCount] = useState(66);

  const age = 18;

  const handlePlus = () => {
    setCount(count + 1);
  };

  const handleMinus = () => {
    setCount(count - 1);
  };
  const handleReset = () => {
    setCount(0);
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
      <TodoList colors={colors} />
      <User users={Users} />
      <Count
        handlePlus={handlePlus}
        handleMinus={handleMinus}
        handleReset={handleReset}
        count={count}
      />
    </div>
  );
};

export default App;
