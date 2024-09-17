import Header from "../Header/Header";
import Permissions from "../Permissions/Permissions";
import Section from "./../Section/Section";

const App = () => {
  return (
    <div>
      <Header />
      <Section />
      <Permissions>
        <h1>Hello Oleh</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
          iusto, laudantium, et provident perspiciatis nesciunt inventore, odit
          placeat praesentium autem natus animi id doloribus minus eos. Deleniti
          ab corrupti sunt.
        </p>
        <button type="button">nice</button>
      </Permissions>
    </div>
  );
};

export default App;
