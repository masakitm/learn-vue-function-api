<template>
  <div>
    <h1 class="title">Todo App with Function API</h1>
    
    <h2>current tasks: {{ itemCount }}</h2>

    <form
      class="todoform" 
      @submit="e => {
        e.preventDefault()
        addTodoItem()
      }"
    >
      <input 
        type="text"
        placeholder="add your tasks"
        :value="tempTodoName"
        @input="e => updateTaskName(e.target.value)"
      >
      <button type="submit">ADD</button>
    </form>

    <ul 
      class="todolist" 
      v-if="todoList.length > 0"
    >
      <li 
        class="todolist-item"
        v-for="item in todoList"
        :key="item.id"
      >
        <label 
          class="todolist-label"
          :for="item.id"
        >
          <input 
            type="checkbox"
            class="todolist-checkbox"
            :id="item.id"
            @click="toggleDoneStatus(item.id)"
          >
          <span>{{ item.name }}</span>
        </label>

        <div class="todolist-buttons">
          <button 
            type="button"
            class="todolist_remove" 
            @click="removeTodoItem(item.id)"
          >
            REMOVE
          </button> 
        </div>
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

<style scoped>
.title {
  display: inline-flex;
  border-bottom: 3px solid #42b983;
}

.todoform {
  margin-bottom: 30px;
}

.todolist {
  margin: auto;
  padding: 0;
  width: 480px;
}

.todolist-item {
  list-style: none;
  padding: 0.8rem 1rem;
  text-align: left;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
}

.todolist-item:nth-child(2n+1) {
  background: #f9f9f9;
}

.todolist-task {
  flex: 9;
  padding-right: 1rem;
  word-break: break-all;
}

.todolist-checkbox {
  margin-right: 0.5rem;
}

.todolist-sbuttons {
  flex: 1;
}
</style>