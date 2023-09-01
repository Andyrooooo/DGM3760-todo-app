let todos = []

let displayTodos = document.querySelector(".displayTodos")
let todoSelectCategory = document.querySelector("#todoSelectCategory")
let newTodoForm = document.querySelector("#newTodoForm")
let todoInputName = document.querySelector(".todoInputName")
let inputDueDate = document.querySelector(".inputDueDate")

// DISPLAY PRE-SELECTED OPTIONS FOR CATEGORY----------------------------------------------
let fitnessOption = document.createElement("option")
let choresOption = document.createElement("option")
let homeworkOption = document.createElement("option")
fitnessOption.innerText = "Fitness"
choresOption.innerText = "Chores"
homeworkOption.innerText = "Homework"

todoSelectCategory.appendChild(fitnessOption)
todoSelectCategory.appendChild(choresOption)
todoSelectCategory.appendChild(homeworkOption)

// console.log(todoSelectCategory)
let newCategoryForm = document.querySelector("#newCategoryForm")
let newCategoryInput = document.querySelector(".newCategoryInput")

let deleteCategorySection = document.querySelector("#deleteCategorySection")
let categoryList = document.querySelector(".categoryList")
const deleteCategory = document.querySelector(".deleteCategory")

// Updates the categoryList----------------------------------------------------------------
function updateCategoryList() {
 categoryList.innerText = ""

 todoSelectCategory.childNodes.forEach((option) => {
  if (option.tagName === "OPTION") {
   let newOption = document.createElement("option")
   newOption.textContent = option.textContent
   categoryList.appendChild(newOption)
  }
 })
}
updateCategoryList()

// ADD NEW CATEGORIES FUNCTION--------------------------------------------------------
newCategoryForm.addEventListener("submit", (e) => {
 e.preventDefault()

 if (newCategoryInput.value === "") {
  alert("Please Enter a valid Name")
 } else {
  let createNewCategory = () => {
   let newCategoryName = newCategoryInput.value
   let newCategoryOption = document.createElement("option")
   newCategoryOption.innerText = newCategoryName
   todoSelectCategory.appendChild(newCategoryOption)

   updateCategoryList()

   newCategoryInput.value = ""
  }
  createNewCategory()
 }
})

// DELETES CATEGORY -----------------------------------------------------------------------
deleteCategory.addEventListener("click", () => {
 let selectedOptionIndex = categoryList.selectedIndex

 if (selectedOptionIndex === 0) {
  alert("Please Select a Category")
 } else if (selectedOptionIndex !== -1) {
  categoryList.removeChild(categoryList.options[selectedOptionIndex])
  todoSelectCategory.removeChild(
   todoSelectCategory.options[selectedOptionIndex]
  )
  updateCategoryList()
 }
})

// EVENT LISTENER TO ADD NEW TODO TO THE ARRAY-------------------------------------
newTodoForm.addEventListener("submit", (e) => {
 e.preventDefault()

 let createNewTodo = () => {
  const newTodoName = todoInputName.value
  const newTodoCategory = todoSelectCategory.value
  const newTodoDueDate = inputDueDate.value
  const newTodoComplete = false

  if (todos.length === 0) {
   newTodoID = 1
  } else {
   newTodoID = todos[todos.length - 1].todoID + 1
  }

  let todoListItem = document.createElement("li")
  todoListItem.classList.add("todoListItem")
  let todoInputBox = document.createElement("input")
  todoInputBox.classList.add("todoInputBox")
  let todoInputCategory = document.createElement("input")
  todoInputCategory.classList.add("todoInputCategory")
  let todoInputDueDate = document.createElement("input")
  todoInputDueDate.classList.add("todoInputDueDate")
  let todoInputComplete = document.createElement("input")
  let todoEditNameBTN = document.createElement("button")
  let todoDeleteBTN = document.createElement("button")

  todoInputBox.value = newTodoName
  todoInputCategory.value = newTodoCategory
  todoInputDueDate.value = newTodoDueDate
  todoInputComplete.value = newTodoComplete
  todoEditNameBTN.innerText = "Edit Name"
  todoDeleteBTN.innerText = "Delete Todo"

  todoInputBox.setAttribute("readonly", "true")
  todoInputCategory.setAttribute("readonly", "true")
  todoInputDueDate.setAttribute("readonly", "true")
  todoInputComplete.setAttribute("type", "checkbox")
  todoDeleteBTN.classList.add("delete")

  todoListItem.appendChild(todoInputComplete)
  todoListItem.appendChild(todoInputBox)
  todoListItem.appendChild(todoInputCategory)
  todoListItem.appendChild(todoInputDueDate)
  todoListItem.appendChild(todoEditNameBTN)
  todoListItem.appendChild(todoDeleteBTN)
  displayTodos.appendChild(todoListItem)

  let todo = {
   todoName: newTodoName,
   todoComplete: newTodoComplete,
   todoCategory: newTodoCategory,
   todoDueDate: newTodoDueDate,
   todoID: newTodoID,
  }

  todos = [...todos, todo]
  /*  todos.push(todo) */
  todoInputName.value = ""
  todoSelectCategory.value = ""
  inputDueDate.value = ""

  // DELETES A TODO ------------------------------------------------------------------
  todoDeleteBTN.addEventListener("click", () => {
   let todoDeleteIndex = Array.from(displayTodos.children).indexOf(todoListItem)

   if (todoDeleteIndex !== -1) {
    todos.splice(todoDeleteIndex, 1)
    displayTodos.removeChild(todoListItem)
    console.log(todos)
   }
  })
  /* todoDeleteBTN.addEventListener("click", () => {
   displayTodos.removeChild(todoListItem)
   console.log(todos)
  }) 
  // its not updating the array, they are still in there
  */

  // EDITS A TODO NAME ------------------------------------------------------------------
  todoEditNameBTN.addEventListener("click", () => {
   if (todoEditNameBTN.innerText == "Edit Name") {
    todoInputBox.removeAttribute("readonly")
    todoInputBox.focus()
    todoEditNameBTN.innerText = "Save Name"
   } else {
    todo.todoName = todoInputBox.value
    todoInputBox.setAttribute("readonly", "true")
    todoEditNameBTN.innerText = "Edit Name"
   }
  })

  // Changes the todo complete property to true -------------------------------------------
  todoInputComplete.addEventListener("click", () => {
   todo.todoComplete = true
    ? todo.todoComplete !== true
    : todo.todoComplete == true
   console.log(todos)

   if (todo.todoComplete === true) {
    todoListItem.classList.add("complete")
    todoInputBox.classList.add("complete")
    todoInputCategory.classList.add("complete")
    todoInputDueDate.classList.add("complete")
   } else {
    todoListItem.classList.remove("complete")
    todoInputBox.classList.remove("complete")
    todoInputCategory.classList.remove("complete")
    todoInputDueDate.classList.remove("complete")
   }
  })
 }
 createNewTodo()
 console.log(todos)
})
console.log(todos)

/* let todos = [
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
] */

// FOREACH TO DISPLAY OUR TODOS THAT EXIST----------------------------------------------
/* todos.forEach((todo) => {
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
}) */
