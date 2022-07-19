import { Api } from "./api.js";
import { View } from "./view.js";

export const Model = ((api, view) => {
  const { getTodos, deleteTodo, addTodo } = api;
  class Todo {
    constructor(title, userId, completed) {
      this.title = title;
      this.userId = userId;
      this.completed = completed;
    }
  }
  class State {
    #todolist = [];
    get todolist() {
      return this.#todolist;
    }
    set todolist(newtodolist) {
      this.#todolist = newtodolist;
      const tmp = view.createTmp(this.todolist);
      view.render(view.elements.todoListContainer, tmp);

      // const deletebtns = document.querySelectorAll(".fa-trash");

      // deletebtns.forEach((btn) => {
      //   btn.addEventListener("click", (el) => {
      //     this.todolist = this.todolist.filter(
      //       (todo) => +todo.id !== +el.target.parentElement.id
      //     );
      //   });
      // });
    }
  }
  const removeEle = (el) => {
    if (el.classList.contains("fa-trash")) {
      console.log(el.parentElement.id);
      api.deleteTodo(el.parentElement.id);
      el.parentElement.parentElement.remove();
    }
  };

  return {
    getTodos,
    deleteTodo,
    addTodo,
    removeEle,
    State,
    Todo,
  };
})(Api, View);
