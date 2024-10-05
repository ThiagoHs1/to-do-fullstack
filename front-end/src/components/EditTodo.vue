<script setup>
import { ref, onMounted } from 'vue';
import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';
import NavBar from '@/components/NavBar.vue';
import AddTodo from '@/components/AddTodo.vue';
import TodoList from '@/components/TodoList.vue';
import EditTodo from '@/components/EditTodo.vue';

// Estado das tarefas
const todos = ref([]);
const selectedTodo = ref(null);

// GraphQL query para buscar as tarefas
const GET_TODOS = gql`
  query {
    todos {
      id
      text
      completed
    }
  }
`;

// Função para buscar tarefas do banco de dados quando o componente for montado
onMounted(() => {
  const { result, loading, error } = useQuery(GET_TODOS);
  
  if (!loading.value && !error.value && result.value) {
    todos.value = result.value.todos.map(todo => ({
      id: todo.id,
      text: todo.text,
      completed: todo.completed,
      editing: false,
    }));
  }
});

// Define as funções do setup
function addTodo(newTodo) {
  todos.value.push({ text: newTodo, completed: false, editing: false });
}

function removeTodo(index) {
  todos.value.splice(index, 1);
}

function toggleEdit(todo) {
  selectedTodo.value = todo;
}

function saveTodo(updatedTodo) {
  todos.value[updatedTodo.index].text = updatedTodo.text;
  todos.value[updatedTodo.index].editing = false;
  selectedTodo.value = null;
}

function cancelEdit() {
  selectedTodo.value = null;
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
  <EditTodo v-if="selectedTodo" :todo="selectedTodo" @save="saveTodo" @cancel="cancelEdit" />
</template>
