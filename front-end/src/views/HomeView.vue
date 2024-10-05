<script setup>
import { ref } from 'vue';
import NavBar from '@/components/NavBar.vue';
import AddTodo from '@/components/AddTodo.vue';
import TodoList from '@/components/TodoList.vue';
import EditTodo from '@/components/EditTodo.vue';

// Estado das tarefas
const todos = ref([]);

// Define a função addTodo dentro do setup

function addTodo(newTodo) {
  todos.value.push({ text: newTodo, completed: false, editing: false });
}

function removeTodo(index) {
  todos.value.splice(index, 1);
}

function toggleEdit(index) {
  todos.value[index].editing = !todos.value[index].editing;
}

function saveTodo(updatedTodo) {
  todos.value[updatedTodo.index].text = updatedTodo.text;
  todos.value[updatedTodo.index].editing = false;
}

function cancelEdit(index) {
  todos.value[index].editing = false;
}


</script>

<template>
  <NavBar />
  <AddTodo @add-todo="addTodo" /> 
  <TodoList 
    :todos="todos" 
    @remove-todo="removeTodo" 
    @toggle-edit="toggleEdit" 
    @save-todo="saveTodo" 
    @cancel-edit="cancelEdit"
     
  />
  <EditTodo  /> 
</template>