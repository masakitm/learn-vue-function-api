import { value, computed } from 'vue-function-api'

export default function useTodo() {
  const todoList = value([])
  const itemCount = computed(() => todoList.value.length)
  const tempTodoName = value('')
  const taskId = value(0)

  const updateTaskName = name => tempTodoName.value = name

  const incrementTaskId = () => taskId.value = taskId.value + 1
  
  const addTodoItem = () => {
    todoList.value = [ 
      ...todoList.value, 
      {
        id: taskId.value,
        name: tempTodoName.value,
        done: false
      }
    ]
    updateTaskName('')
    incrementTaskId()
  }

  const removeTodoItem = id => {
    todoList.value = todoList.value.filter(item => item.id !== id)
  }

  return {
    todoList,
    itemCount,
    tempTodoName,
    addTodoItem,
    removeTodoItem,
    updateTaskName
  }
}