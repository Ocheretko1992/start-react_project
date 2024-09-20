const TodoList = ({ colors }) => {
  return (
    <div>
      <ul>
        {colors.map(({ color, id }) => (
          <li key={id}>{color}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
