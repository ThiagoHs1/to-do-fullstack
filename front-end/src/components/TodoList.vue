<template>
    <div class="container mx-auto mt-10 w-3/5">
      <ul class="todo-list bg-white shadow-md rounded-lg p-4">
        <li v-for="(todo, index) in todos" :key="index" class="todo-item flex justify-between items-center border-b border-gray-200 py-2">
          <span :class="{ 'line-through': todo.completed }">{{ todo.text }}</span>
          <div>
            <input type="checkbox" v-model="todo.completed" class="mr-2">
            <button @click="removeTodo(index)" class="remove-button bg-red-600 text-white px-2 py-1 rounded-md hover:bg-red-700 transition">Remover</button>
          </div>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      todos: {
        type: Array,
        required: true
      }
    },
    methods: {
      removeTodo(index) {
        this.$emit('remove-todo', index);
      }
    }
  }
  </script>
  
  <style scoped>
 </style>