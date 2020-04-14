//getting libraries
import React from "react";
import { render } from "react-dom";
import DevTools from "mobx-react-devtools";

//components
import TodoList from "./components/TodoList";
import ComputerCheckout from "./components/ComputerCheckout";
import ComputerPartSelect from "./components/ComputerPartSelect";

//mobx models
import TodoListModel from "./models/TodoListModel";
import TodoModel from "./models/TodoModel";
import ComputerBuildModel from "./models/ComputerBuildModel";

import css from './css/style.css'

//creating instances of the models to use as stores for everything
const toDoStore = new TodoListModel();
const computerPartsStore = new ComputerBuildModel();

//Rending the root, notice we are passing in stores as props, so that we have access to them in those components
render(
  <div>
    <DevTools />
    <TodoList toDoStore={toDoStore} />
    <div className="computerParts">
	    <ComputerPartSelect computerPartsStore={computerPartsStore} />
	    <ComputerCheckout computerPartsStore={computerPartsStore} />
    </div>
  </div>,
  document.getElementById("root")
);

//This is pre-populating the todo list
toDoStore.addTodo("Get Coffee");
toDoStore.addTodo("Write simpler code");
toDoStore.todos[0].finished = true;

//getting fancy with a timeout to add to todo list
setTimeout(() => {
  toDoStore.addTodo("Get a cookie as well");
}, 2000);

// playing around in the console (so you can see them in console)
window.toDoStore = toDoStore;
window.computerPartsStore = computerPartsStore;
