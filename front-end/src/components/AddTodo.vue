<template>
    <div class="container mx-auto mt-20 w-3/5">
      <div class="add-todo bg-white shadow-md rounded-lg p-4  items-center ">
        <input  
          type="text" 
          v-model="newTodoText" 
          placeholder="Nova Tarefa" 
          class="todo-input px-4 py-2 border border-gray-300 rounded-md w-3/5"
          @keyup.enter="addTodo"
        />
        <button @click="addTodo" class="add-button bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition w-1/5 ml-4">Adicionar</button>
      </div>
    </div>
  </template>
  
  <script>
  
  export default {
    data() {
      return {
        newTodoText: ''
      }
    },
    methods: {
      addTodo() {
        // Lógica para adicionar tarefa
      }
    }
  }
  </script>
  
  <style scoped>
  /* Estilos adicionais se necessário */
  </style>
  