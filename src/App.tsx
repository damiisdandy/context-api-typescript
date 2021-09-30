import { useState } from "react";
import { useGlobalContext } from "./context";
import logo from "./logo.svg";
import { FiSun } from "react-icons/fi";
import { FaMoon } from "react-icons/fa";

function App() {
  const { state, dispatch } = useGlobalContext();
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const toggleMode = () => {
    dispatch({
      type: "TOGGLE_MODE",
    });
  };

  const addItem = () => {
    if (value.length > 0) {
      dispatch({
        type: "ADD_TODO",
        payload: value,
      });
      setValue("");
    }
  };

  const removeTodo = (idx: number) => {
    dispatch({
      type: "REMOVE_TODO",
      payload: idx,
    });
  };

  const markDone = (idx: number) => {
    dispatch({
      type: "MARK_AS_DONE",
      payload: idx,
    });
  };
  return (
    <div className={`App ${state.isDark ? "dark" : ""}`}>
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="react logo" />
          <h1>Todo App</h1>
        </div>
        <button onClick={toggleMode} className="toggler">
          {state.isDark ? <FiSun /> : <FaMoon />}
        </button>
      </nav>
      <main className="main">
        <h1 className="heading">Create Todo Item</h1>
        <input
          value={value}
          onChange={handleChange}
          placeholder="e.g Write a blog post about ReactJs"
        />
        <button onClick={addItem} className="submit">
          Add Item
        </button>
        <div className="todos">
          {state.todos
            .sort((a, b) => b.id - a.id)
            .map((todo) => (
              <div
                key={todo.id}
                className={`todo ${todo.isCompleted ? "done" : ""}`}
              >
                <p className="title">{todo.title}</p>
                <div>
                  <p>Created on {todo.createdAt.toLocaleDateString("en-US")}</p>
                  <button
                    onClick={
                      todo.isCompleted
                        ? () => removeTodo(todo.id)
                        : () => markDone(todo.id)
                    }
                    className={todo.isCompleted ? "complete" : ""}
                  >
                    {todo.isCompleted ? "delete" : "mark as done"}
                  </button>
                </div>
              </div>
            ))}
        </div>
      </main>
    </div>
  );
}

export default App;
