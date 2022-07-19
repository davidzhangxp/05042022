export const View = (() => {
  const elements = {
    todoListContainer: document.querySelector("#book-list"),
  };
  const createTmp = (arr) => {
    let tmp = "";
    arr.forEach((todo) => {
      tmp += `
        <tr>
        <td>${todo.title}</td>
        <td>${todo.completed}</td>
        <td id=${todo.id}><i class="fa fa-trash"></i></td>
        </tr>
        `;
    });
    return tmp;
  };
  const render = (ele, tmp) => {
    ele.innerHTML = tmp;
  };

  const showAlert = (message, type) => {
    const div = document.createElement("div");

    div.className = `alert alert-${type}`;
    div.innerHTML = `<p>${message}</p>`;
    const container = document.querySelector(".forms-container");
    const form = document.querySelector("#book-form");
    container.insertBefore(div, form);
    setTimeout(() => {
      document.querySelector(".alert").remove();
    }, 3000);
  };

  return {
    createTmp,
    render,
    elements,
    showAlert,
  };
})();
