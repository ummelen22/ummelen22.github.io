export function TodoListActions({ setTodos }) {
  function deleteToggledTodos() {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => {
        return !todo.completed;
      });
    });
  }

  function deleteTodos() {
    setTodos((currentTodos) => {
      return [];
    });
  }

  return (
    <p>
      <button className="btn btn-action" onClick={() => deleteToggledTodos()}>
        Delete completed
      </button>
      <button className="btn btn-action" onClick={() => deleteTodos()}>
        Delete all
      </button>
    </p>
  );
}
