<script setup>
import { ref } from 'vue';
import NavBar from '@/components/NavBar.vue';
import AddTodo from '@/components/AddTodo.vue';
import TodoList from '@/components/TodoList.vue';

// Estado das tarefas
const todos = ref([]);

// Define a função addTodo dentro do setup
function addTodo(newTodo) {
  console.log('Adicionando tarefa:', newTodo);
  todos.value.push({ text: newTodo, completed: false });
}

// Define a função removeTodo dentro do setup
function removeTodo(index) {
  todos.value.splice(index, 1);
}
</script>

<template>
  <NavBar />
  <AddTodo @add-todo="addTodo" /> 
  <TodoList :todos="todos" @remove-todo="removeTodo" /> 
</template>