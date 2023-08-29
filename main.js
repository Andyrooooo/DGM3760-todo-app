let todos = [
 {
  todoName: "Go on a hike",
  todoComplete: false,
  todoCategory: "fitness",
  todoDueDate: "2023-08-30",
  todoID: 1,
 },
 {
  todoName: "Wash dishes",
  todoComplete: false,
  todoCategory: "chores",
  todoDueDate: "2023-08-28",
  todoID: 2,
 },
 {
  todoName: "Finish Lando's project",
  todoComplete: false,
  todoCategory: "school",
  todoDueDate: "2023-09-02",
  todoID: 3,
 },
]

let displayTodos = document.querySelector(".displayTodos")

// FOREACH TO DISPLAY OUR TODOS THAT EXIST----------------------------------------------
todos.forEach((todo) => {
 let todoListItem = document.createElement("li")
 let todoInputBox = document.createElement("input")
 let todoCategoryBox = document.createElement("input")
 let todoDueDateBox = document.createElement("input")
 let todoCompleteBox = document.createElement("input")

 todoInputBox.value = todo.todoName
 todoCategoryBox.value = todo.todoCategory
 todoDueDateBox.value = todo.todoDueDate
 todoCompleteBox.value = todo.todoComplete

 todoInputBox.setAttribute("readonly", "true")
 todoCategoryBox.setAttribute("readonly", "true")
 todoDueDateBox.setAttribute("readonly", "true")
 todoCompleteBox.setAttribute("type", "checkbox")

 todoListItem.appendChild(todoInputBox)
 todoListItem.appendChild(todoCategoryBox)
 todoListItem.appendChild(todoDueDateBox)
 todoListItem.appendChild(todoCompleteBox)
 displayTodos.appendChild(todoListItem)
})

let newTodoForm = document.querySelector("#newTodoForm")
let todoInputName = document.querySelector(".todoInputName")
let todoSelectCategory = document.querySelector("#todoSelectCategory")
let inputDueDate = document.querySelector(".inputDueDate")

// EVENT LISTENER TO ADD NEW TODO TO THE ARRAY-------------------------------------------
newTodoForm.addEventListener("submit", (e) => {
 e.preventDefault()

 let createNewTodo = () => {
  const newTodoName = todoInputName.value
  const newTodoCategory = todoSelectCategory.value
  const newTodoDueDate = inputDueDate.value
  const newTodoComplete = false
  const newTodoID = todos[todos.length - 1].todoID + 1

  let todoListItem = document.createElement("li")
  let todoInputBox = document.createElement("input")
  let todoInputCategory = document.createElement("input")
  let todoInputDueDate = document.createElement("input")
  let todoInputComplete = document.createElement("input")

  todoInputBox.value = newTodoName
  todoInputCategory.value = newTodoCategory
  todoInputDueDate.value = newTodoDueDate
  todoInputComplete.value = newTodoComplete

  todoInputBox.setAttribute("readonly", "true")
  todoInputCategory.setAttribute("readonly", "true")
  todoInputDueDate.setAttribute("readonly", "true")
  todoInputComplete.setAttribute("type", "checkbox")

  todoListItem.appendChild(todoInputBox)
  todoListItem.appendChild(todoInputCategory)
  todoListItem.appendChild(todoInputDueDate)
  todoListItem.appendChild(todoInputComplete)
  displayTodos.appendChild(todoListItem)

  let todo = {
   todoName: newTodoName,
   todoComplete: newTodoComplete,
   todoCategory: newTodoCategory,
   todoDueDate: newTodoDueDate,
   todoID: newTodoID,
  }

  todos = [...todos, todo]
  todoInputName.value = ""
  todoSelectCategory.value = ""
  inputDueDate.value = ""
 }
 createNewTodo()
 console.log(todos)
})
