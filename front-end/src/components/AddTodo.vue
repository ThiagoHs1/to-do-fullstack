<script>
import { ref } from 'vue';
import gql from 'graphql-tag';
import { useMutation } from '@vue/apollo-composable';

export default {
  setup(_, { emit }) { // Adiciona 'emit' como segundo argumento no 'setup'
    const newTodoText = ref('');

    const ADD_TODO = gql`
      mutation AddTodo($title: String!) {
        addTodo(title: $title) {
          id
          title
          completed
        }
      }
    `;

    const { mutate: addTodoMutation } = useMutation(ADD_TODO);

    const addTodo = () => {
      if (newTodoText.value.trim()) {
        addTodoMutation({ title: newTodoText.value });
        emit('add-todo', newTodoText.value); // Emitindo o evento para o componente pai
        newTodoText.value = ''; // Limpa o campo de entrada após adicionar a tarefa
      }
    };

    return {
      newTodoText,
      addTodo,
    };
  },
};
</script>

<template>
  <div class="add-todo flex items-center mb-4">
    <input 
      v-model="newTodoText" 
      type="text" 
      placeholder="Digite uma nova tarefa" 
      class="flex-1 border border-gray-300 rounded-md px-4 py-2 mr-2"
    />
    <button 
      @click="addTodo" 
      class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
    >
      Adicionar
    </button>
  </div>
</template>