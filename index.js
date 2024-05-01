const writeTodo = document.querySelector(".writeToDo"),
  input = writeTodo.querySelector("input");
todoList = document.querySelector(".TodoList");

writeTodo.addEventListener("click", function inputValueOnChange(e) {
  //   const TodoList = input.value;
  //   Todolist.innerText = TodoList;
  //   console.log(TodoList);

  e.preventDefault();
  const inputValue = input.value;
  inputValue.map((todo) => {
    return console.log(todo);
  });
  console.log(inputValue);
});
