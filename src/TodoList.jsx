import { TodoItem } from "./TodoItem";

export function TodoList({ todos, toggleTodo, deleteTodo, onEdit }) {
  return (
    <>
      {todos.length === 0 && (
        <label className="tmp-text">No Todo's yet...</label>
      )}
      <ul className="list">
        {todos.map((todo) => {
          return (
            <TodoItem
              {...todo}
              key={todo.id}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
              onEdit={onEdit}
            />
          );
        })}
      </ul>
    </>
  );
}
