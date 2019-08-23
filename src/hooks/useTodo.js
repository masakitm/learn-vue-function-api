import { value, computed } from 'vue-function-api'

export default function useTodo() {
  const todoList = value([])

  const tempTodoName = value('')
  
  const taskId = value(0)

  const itemCount = computed(() => todoList.value.length)

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

  const toggleDoneStatus = id => {
    todoList.value = todoList.value.map(item => 
      (item.id === id ? { ...item, done: !item.done } : item)
    )
  }

  return {
    todoList,
    itemCount,
    tempTodoName,
    addTodoItem,
    removeTodoItem,
    updateTaskName,
    toggleDoneStatus
  }
}