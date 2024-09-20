import Header from "../Header/Header";
import Permissions from "../Permissions/Permissions";
import Section from "./../Section/Section";
import TodoList from "../TodoList/TodoList";
import colors from "../Color.json";
import User from "../User/User";
import Users from "../Users.json";
import "../index.css";

const App = () => {
  const age = 18;
  return (
    <div>
      <Header />
      {age >= 18 ? (
        <Permissions>
          <h1>Hello Oleh</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
            iusto, laudantium, et provident perspiciatis nesciunt inventore,
            odit placeat praesentium autem natus animi id doloribus minus eos.
            Deleniti ab corrupti sunt.
          </p>
          <button type="button" style={{ color: "red", background: "green" }}>
            nice
          </button>
        </Permissions>
      ) : (
        <Section />
      )}
      <TodoList colors={colors} />
      <User users={Users} />
    </div>
  );
};

export default App;
