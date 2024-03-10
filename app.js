const todoBtn = document.querySelector('.input-button')
const todoInput = document.querySelector('.input-task')
const todoList = document.querySelector('.all-tasks')


todoBtn.addEventListener('click', addTask)
todoList.addEventListener('click', checkOrDelete)


function addTask(e){
    e.preventDefault()


    const todoLi = document.createElement('li')
    todoLi.classList.add('task-item')

    const todoP = document.createElement('p')
    todoP.classList.add('task-name')
    todoP.innerText = todoInput.value

    const completeBtn = document.createElement('button')
    completeBtn.classList.add('task-check')
    completeBtn.innerHTML = '<i class="fa-solid fa-check"></i>'

    const trashBtn = document.createElement('button')
    trashBtn.classList.add('task-remove')
    trashBtn.innerHTML = '<i class="fa-solid fa-trash"></i>'

    todoLi.appendChild(todoP)
    todoLi.appendChild(completeBtn)
    todoLi.appendChild(trashBtn)
    
    todoList.appendChild(todoLi)

    todoInput.value = ''
}


function checkOrDelete(e){
    const item = e.target

    if(item.classList[0] === 'task-check'){
         const todo = item.parentElement
         todo.classList.toggle('completed')
    }

    if(item.classList[0] === 'task-remove'){
         const todo = item.parentElement
         todo.classList.toggle('fall')
         todo.addEventListener('transitionend', () => {
            todo.remove()
         })
    }
}