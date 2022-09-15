(function () {
  function TodoApp() {
    this.input = document.querySelector(".todo-input");
    this.save = document.querySelector("#save");
    this.todoList = document.querySelector(".todo-list");
    this.events();
  }

  TodoApp.prototype.events = function () {
    this.save.addEventListener("click", this.saveTodo.bind(this));
    this.input.addEventListener("keypress", this.enter.bind(this));
  };

  TodoApp.prototype.saveTodo = function (e) {
    const value = this.input.value;
    console.log(value);
    if (value) {
      this.addTodo(value);
      this.input.value = "";
    }
  };

  TodoApp.prototype.enter = function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      this.save.click();
    }
  };

  TodoApp.prototype.deleteTodo = function (e) {
    e.target.parentElement.remove();
  };

  TodoApp.prototype.markTodo = function (e) {
    if (e.target.checked) e.target.parentElement.classList.add("strike");
    else e.target.parentElement.classList.remove("strike");
  };

  TodoApp.prototype.addTodo = function (val) {
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    const label = document.createElement("label");
    const del = document.createElement("div");
    checkbox.setAttribute("type", "checkbox");
    checkbox.id = val;
    checkbox.value = val;
    label.textContent = val;
    label.for = val;
    del.classList.add("delete");
    del.textContent = "X";
    del.addEventListener("click", this.deleteTodo);
    checkbox.addEventListener("change", this.markTodo);
    li.append(checkbox);
    li.append(label);
    li.append(del);
    console.log(li);
    this.todoList.append(li);
  };

  new TodoApp();
})();
