var arr = new Array();
arr.length = 3;
// var num = new Number();
console.log(arr);
// console.log(num);
// // Array and Number ... is a function that create a new object

// // coercion
// console.log(typeof (1 + "1"));
// console.log(1 - "1");
// console.log(typeof Array);
// // if there is a + method, reference to the proirity of type, if it is - method ,means change to number tpye,even string can't be convert to number ,type is NaN

// //               var       let      const       function
// hoisting         y         y         y             y
// scope         function    block     block        block

// function foo() {
//   console.log(bar);

//   function bar() {
//     return 2;
//   }
// }

// console.log(foo());

// const obj = {
//   name: "Jojo",
// };
// function foo(obj) {
//   obj.name = "Dio";
// }
// foo(obj);
// console.log(obj.name);

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   get fname() {
//     return this.name;
//   }
//   set fname(newName) {
//     this.name = newName;
//   }
//   foo() {
//     console.log(this.name + " is " + this.age);
//   }
// }
// const person = new Person("jojo", 28);
// console.log(person.name);
// person.fname = "Dio";
// console.log(person.fname);
// person.foo();
// person.__proto__.bar = function () {
//   console.log("helloword");
// };
// console.log(person);
// person.bar();

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// const person = new Person("cici", 26);

// Person.prototype.foo = function () {
//   console.log(this.name + " is " + this.age);
// };
// console.log(person.foo);

// const obj = {};
// obj.name = "Dio";
// console.log(obj);

// function foo(a, b) {
//   return 5;
// }
// const a = foo("abc", 3);
// const b = foo("456", 5);
// console.log(a, b);

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   get fname() {
//     return this.name;
//   }
//   set fname(newName) {
//     this.name = newName;
//   }
//   foo() {
//     console.log(this.name + " is " + this.age);
//   }
// }
// class Employee extends Person {
//   constructor(name, age, company) {
//     super(name, age);
//     this.company = company;
//   }
//   foo() {
//     console.log(this.name + " works in" + this.company);
//   }
// }
// const employee = new Employee("jojo", 44, "antra");
// console.log(employee.name);
// employee.foo();

// const obj = {
//   name: "Jojo",
//   age: 12,
//   id: 2,
// };

// console.log(JSON.stringify(obj));
// const arr = [1, 2, 3];
// Array.prototype.myMap = function (callback) {
//   const array = [];
//   for (let i = 0; i < this.length; i++) {
//     array.push(callback(this[i], i, this));
//   }
//   return array;
// };
// console.log(
//   arr.myMap(function (cur, i, array) {
//     return cur + 4;
//   })
// );

// Array.prototype.myFilter = function (callback) {
//   const array = [];
//   for (let i = 0; i < this.length; i++) {
//     if (callback(this[i], i, this)) {
//       array.push(this[i]);
//     }
//   }
//   return array;
// };
// console.log(
//   arr.myFilter(function (cur, i, array) {
//     return cur > 2;
//   })
// );

// Array.prototype.myReduce = function (...args) {
//   let [acc, index] = args.length > 1 ? [args[1], 0] : [this[0], 1];

//   for (let i = index; i < this.length; i++) {
//     acc = args[0](acc, this[i], i, this);
//   }
//   return acc;
// };
// const arr = [
//   { name: "AA", age: 12 },
//   { name: "BB", age: 2 },
//   { name: "CC", age: 16 },
//   { name: "DD", age: 22 },
// ];
// const test = arr.myReduce(function (acc, cur) {
//   acc[cur.name] = cur.age;
//   return acc;
// }, {});
// console.log(test);

// function foo(arr) {
//   return arr.reduce((acc,cur)=>
//   {acc[cur.name]=cur.age
//     return acc
//   }
//   ,{})
//   let obj = {};
//   for (let i = 0; i < arr.length; i++) {
//     // obj = { ...obj, [arr[i].name]: arr[i].age };
//     obj[arr[i].name] = arr[i].age;
//   }
//   return obj;
// }
// const arr = [
//   { name: "AA", age: 12 },
//   { name: "BB", age: 2 },
//   { name: "CC", age: 16 },
//   { name: "DD", age: 22 },
// ];
// console.log(foo(arr));

// // const copyobj = JSON.parse(JSON.stringify(obj));

// const obj = {
//   // name: "Jojo",
//   // date: new Date(),
//   // links: {
//   // 	name: "abc",
//   // 	link: "abc.com",
//   // },
//   foo() {
//     console.log(1111);
//   },
// };
// obj.foo();
// console.log(obj.foo);
//iife
// const api = (function (age) {
//   const obj = { name: "jojo", age };
//   return obj;
// })(12);
// console.log(api);

// function target(a, b) {
//   console.log(a, b);
// }
// function limitedFunction(num, cb) {
//   let counter = 0;
//   return function (...args) {
//     if (counter === num) {
//       console.log("over limited");
//     } else {
//       cb(...args);
//       counter++;
//     }
//   };
// }
// const fn = limitedFunction(3, target);
// fn(3, 4);
// fn(3, 4);
// fn(3, 4);
// fn(3, 4);
// const newFn = limitedFunction(1, target);
// newFn(4, 5);
// newFn(9, 8);

// function runAll(...args) {
//   return function (pre) {
//     let preValue = pre;
//     for (let i = 0; i < args.length; i++) {
//       preValue = args[i](preValue);
//     }
//     return preValue;
//   };
// }
// const callback1 = (a) => a + 2; // 6
// const callback2 = (b) => b * 2; // 12
// const callback3 = (c) => c - 2; // 10

// console.log(runAll(callback1, callback2, callback3)(4)); // 10

// const arr = [..."abc"];
// const arr1 = [3, ...arr, 4, 5]; // drop
// console.log(arr1);
// const res = [...new Set([...arr])].join("");
// console.log(res);

// call, apply, bind
// const obj = { hello: "jojo" };
// function printname(a) {
//   console.log("printname: ", this.hello, a);
// }
// const newprint = printname.bind(obj);
// newprint("cici");
// printname.call(obj, "fei");
// printname.apply(obj, ["didi"]);

// for (let i = 0; i < 5; i++) {
//   setTimeout(() => console.log(i), (5 - i) * 1000);
// }
// const STATE = {
//   FULFILLED: "fulfilled",
//   REJECTED: "rejected",
//   PENDING: "pending",
// };

// class MyPromise {
//   #thenCbs = [];
//   #catchCbs = [];
//   #value = undefined;
//   #state = STATE.PENDING;

//   constructor(cb) {
//     try {
//       cb(this.#onSuccess.bind(this), this.#onFail.bind(this));
//     } catch (error) {
//       this.#onFail(error);
//     }
//   }

//   #runCallbacks() {
//     if (this.#state === STATE.FULFILLED) {
//       this.#thenCbs.forEach((callback) => {
//         callback(this.#value);
//       });
//       this.#thenCbs = [];
//     } else if (this.#state === STATE.REJECTED) {
//       this.#catchCbs.forEach((callback) => {
//         callback(this.#value);
//       });
//       this.#catchCbs = [];
//     }
//   }

//   #onSuccess(value) {
//     if (this.#state !== STATE.PENDING) return;
//     this.#value = value;
//     this.#state = STATE.FULFILLED;
//     this.#runCallbacks();
//   }
//   #onFail(value) {
//     if (this.#state !== STATE.PENDING) return;
//     this.#value = value;
//     this.#state = STATE.REJECTED;
//     this.#runCallbacks();
//   }
//   then(cb) {
//     return new MyPromise((resolve, reject) => {

//       this.#thenCbs.push(cb);
//       this.#runCallbacks();
//     });
//   }
//   catch(cb) {
//     this.#catchCbs.push(cb);
//     this.#runCallbacks();
//   }
// }

// const promise = new MyPromise((resolve, reject) => {
//   resolve("success value");
//   //   reject("fail value");
//   //   resolve("resolve again");
// })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const bookData = [
//   { title: "book1", author: "smith", bookid: "123" },
//   { title: "book2", author: "john", bookid: "456" },
//   { title: "book3", author: "tyson", bookid: "789" },
//   { title: "book3", author: "tyson", bookid: "789" },
//   { title: "book3", author: "tyson", bookid: "789" },
//   { title: "book3", author: "tyson", bookid: "789" },
//   { title: "book3", author: "tyson", bookid: "789" },
// ];

// class Book {
//   constructor(title, author, bookid) {
//     this.title = title;
//     this.author = author;
//     this.bookid = bookid;
//   }
// }
// class UI {
//   displayUI() {
//     const books = bookData;
//     books.forEach((book) => {
//       this.addBookToList(book);
//     });
//   }
//   addBookToList(book) {
//     const row = document.createElement("tr");
//     row.innerHTML = `
//     <td>${book.title}</td>
//     <td>${book.author}</td>
//     <td>${book.bookid}</td>
//     <td id=${book.bookid}><i class="fa fa-trash"></i></td>
//     `;
//     const list = document.querySelector("#book-list");
//     list.appendChild(row);
//   }
//   removeEle(el) {
//     if (el.classList.contains("fa-trash")) {
//       console.log(el.parentElement.id);
//       el.parentElement.parentElement.remove();
//     }
//   }
//   clearField() {
//     document.querySelector("#title").value = "";
//     document.querySelector("#author").value = "";
//     document.querySelector("#bookid").value = "";
//   }
//   showAlert(message, alertType) {
//     const div = document.createElement("div");

//     div.className = `alert alert-${alertType}`;
//     div.innerHTML = `<p>${message}</p>`;
//     const container = document.querySelector(".forms-container");
//     const form = document.querySelector("#book-form");
//     container.insertBefore(div, form);
//     setTimeout(() => {
//       document.querySelector(".alert").remove();
//     }, 3000);
//   }
// }

// //display books
// const ui = new UI();
// document.addEventListener("DOMContentLoaded", ui.displayUI());

// //add a book
// document.querySelector("#book-form").addEventListener("submit", (e) => {
//   e.preventDefault();
//   const title = document.getElementById("title").value;
//   const author = document.getElementById("author").value;
//   const bookid = document.getElementById("bookid").value;

//   //valid
//   if (title == "" || author == "" || bookid == "") {
//     ui.showAlert("Please fill all fields", "danger");
//   } else {
//     const newBook = new Book(title, author, bookid);
//     ui.addBookToList(newBook);
//     ui.clearField();
//     ui.showAlert("Add book successfully", "success");
//   }
// });

// //remove a book from list
// document.querySelector("#book-list").addEventListener("click", (e) => {
//   ui.removeEle(e.target);
// });

//~~~~~~~~~~~~~api~~~~~~~~~~~~~`
// const Api = (() => {
//   const baseUrl = "https://jsonplaceholder.typicode.com";
//   const path = "todos";

//   const getTodos = () =>
//     fetch([baseUrl, path].join("/")).then((response) => response.json());

//   const deleteTodo = (id) =>
//     fetch([baseUrl, path, id].join("/"), { method: "DELETE" }).then(
//       (response) => response.json()
//     );

//   const addTodo = (todo) =>
//     fetch([baseUrl, path].join("/"), {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(todo),
//     }).then((response) => response.json());

//   return {
//     getTodos,
//     deleteTodo,
//     addTodo,
//   };
// })();

// console.log(Api.getTodos());
//~~~~~~~~~~~~~~~~~~View~~~~~~~~~~~~~~

// const View = (() => {
//   const elements = {
//     todoListContainer: document.querySelector("#book-list"),
//   };
//   const createTmp = (arr) => {
//     let tmp = "";
//     arr.forEach((todo) => {
//       tmp += `
//       <tr>
//       <td>${todo.title}</td>
//       <td>${todo.completed}</td>
//       <td id=${todo.id}><i class="fa fa-trash"></i></td>
//       </tr>
//       `;
//     });
//     return tmp;
//   };
//   const render = (ele, tmp) => {
//     ele.innerHTML = tmp;
//   };

//   return {
//     createTmp,
//     render,
//     elements,
//   };
// })();

//~~~~~~~~~~~~~Model~~~~~~~~~~~~~~~~

// const Model = ((api, view) => {
//   const { getTodos, deleteTodo, addTodo } = api;
//   class Todo {
//     constructor(title, userId, completed) {
//       this.title = title;
//       this.userId = userId;
//       this.completed = completed;
//     }
//   }
//   class State {
//     #todolist = [];
//     get todolist() {
//       return this.#todolist;
//     }
//     set todolist(newtodolist) {
//       this.#todolist = newtodolist;
//       const tmp = view.createTmp(this.todolist);
//       view.render(view.elements.todoListContainer, tmp);

//       // const deletebtns = document.querySelectorAll(".fa-trash");

//       // deletebtns.forEach((btn) => {
//       //   btn.addEventListener("click", (el) => {
//       //     this.todolist = this.todolist.filter(
//       //       (todo) => +todo.id !== +el.target.parentElement.id
//       //     );
//       //   });
//       // });
//     }
//   }
//   const removeEle = (el) => {
//     if (el.classList.contains("fa-trash")) {
//       console.log(el.parentElement.id);
//       // api.deleteTodo(el.parentElement.id)
//       el.parentElement.parentElement.remove();
//     }
//   };

//   return {
//     getTodos,
//     deleteTodo,
//     addTodo,
//     removeEle,
//     State,
//     Todo,
//   };
// })(Api, View);

//~~~~~~~~~~~~~~Controller~~~~~~~~~~~
// const Controller = ((model, view) => {
//   const state = new model.State();
//   const init = () => {
//     model.getTodos().then((todoList) => {
//       state.todolist = todoList;
//     });
//   };
//   view.elements.todoListContainer.addEventListener("click", (e) => {
//     model.removeEle(e.target);
//   });
//   document.querySelector("#book-form").addEventListener("submit", (e) => {
//     e.preventDefault();
//     const title = document.querySelector("#title").value;
//     const userId = document.querySelector("#userid").value;
//     const completed = document.querySelector("#completed").value;
//     const newTodo = new model.Todo(title, userId, completed);
//     model.addTodo(newTodo).then((data) => {
//       state.todolist = [data, ...state.todolist];
//     });
//   });

//   return { init };
// })(Model, View);

import { Controller } from "./mvc/controller.js";

Controller.bootStrap();
