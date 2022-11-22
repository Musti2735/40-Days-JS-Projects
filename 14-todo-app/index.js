
var todoList = document.querySelector('.todo-list');
var input = document.getElementById("myInput");
var activeBtn = document.querySelector('.active');
var allBtn = document.querySelector('.selected');
var completedBtn = document.querySelector('.completed')

let myTodoList = []

input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        let todoInput = input.value
        const id = new Date().getTime().toString();
        let newTodo = { todo: todoInput, isCompleted: false, id: id }
        myTodoList.push(newTodo)

     
        const todo = document.createElement('li')
        let attr = document.createAttribute('data-id');
        attr.value = id
        todo.setAttributeNode(attr)

        todo.innerHTML = `
        <div class='view'>
          <input class="toggle" type="checkbox" />
          <label>${newTodo.todo}</label>
          <button type='submit' class="destroy">x</button>
        </div>
         `
        todoList.appendChild(todo)

        input.value = ''

        let removeBtn = todo.querySelector('.destroy')
        removeBtn.addEventListener('click', removeItem)

        function removeItem() {
            todoList.removeChild(todo)
            myTodoList.filter((item)=>item.id !==newTodo.id)
            console.log(myTodoList)
            console.log(myTodoList.filter((item)=>item.id !==newTodo.id))
        }

        console.log(myTodoList)

        let toggleBtn = todo.querySelector('.toggle')
        toggleBtn.addEventListener('click', checkItem)
        function checkItem() {
            todo.classList.toggle('completed')
            myTodoList.map((item) => {
                if (item.id === newTodo.id) {
                    item.isCompleted == false ? item.isCompleted = true : item.isCompleted = false
                }
                console.log(myTodoList)
            })
        }
        
    }

});






