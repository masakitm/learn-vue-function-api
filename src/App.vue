<template>
  <div id="app">
    <Todo />
  </div>
</template>

<script>
import Todo from './components/organisms/Todo'

export default {
  name: 'app',
  components: {
    Todo
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

ul {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
  padding: 0.5rem 1rem;
  text-align: left;
  display: flex;
  justify-content: space-between;
}

li:nth-child(2n+1) {
  background: #f6f6f6;
}
</style>
