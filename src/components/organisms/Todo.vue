<template>
  <div>
    <form @submit="e => {
        e.preventDefault()
        addTodoItem()
      }"
    >
      <input 
        type="text"
        :value="tempTodoName"
        @input="e => updateTaskName(e.target.value)"
      >
      <button type="submit">ADD</button>
    </form>

    <p>tasks: {{ itemCount }}</p>

    <ul v-if="todoList.length > 0">
      <li 
        v-for="item in todoList"
        :key="item.id"
      >
        <span>{{ item.name }}</span>
        <button type="button" @click="removeTodoItem(item.id)">REMOVE</button> 
      </li>
    </ul>
  </div>
</template>

<script>
import useTodo from '../../hooks/useTodo'

export default {
  setup() {
    return { 
      ...useTodo()
    }
  }
}
</script>