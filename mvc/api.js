export const Api = (() => {
  // const baseUrl = "https://jsonplaceholder.typicode.com";
  const baseUrl = "http://localhost:3000";
  const path = "todos";

  const getTodos = () =>
    fetch([baseUrl, path].join("/")).then((response) => response.json());

  const deleteTodo = (id) =>
    fetch([baseUrl, path, id].join("/"), { method: "DELETE" }).then(
      (response) => response.json()
    );

  const addTodo = (todo) =>
    fetch([baseUrl, path].join("/"), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todo),
    }).then((response) => response.json());

  return {
    getTodos,
    deleteTodo,
    addTodo,
  };
})();
