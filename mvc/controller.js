import { Model } from "./model.js";
import { View } from "./view.js";

export const Controller = ((model, view) => {
  const state = new model.State();
  const init = () => {
    model.getTodos().then((todoList) => {
      state.todolist = todoList;
    });
  };
  const deleteTodo = () => {
    view.elements.todoListContainer.addEventListener("click", (e) => {
      model.removeEle(e.target);
    });
  };

  const addTodo = () => {
    document.querySelector("#book-form").addEventListener("submit", (e) => {
      e.preventDefault();
      const title = document.querySelector("#title").value;
      const userId = document.querySelector("#userid").value;
      const completed = document.querySelector("#completed").value;
      if (title === "" || userId === "" || completed === "") {
        view.showAlert("please fill all fields", "danger");
      } else {
        const newTodo = new model.Todo(title, userId, completed);
        model.addTodo(newTodo).then((data) => {
          state.todolist = [data, ...state.todolist];
        });
        view.showAlert("Add todo list successfully", "success");
      }
    });
  };

  const bootStrap = () => {
    init();
    deleteTodo();
    addTodo();
  };

  return { bootStrap };
})(Model, View);
