<script>
import { ref } from 'vue';
import gql from 'graphql-tag';
import { useMutation } from '@vue/apollo-composable';

export default {
  setup(_, { emit }) { // Adiciona 'emit' como segundo argumento no 'setup'
    const newTodoText = ref('');

    const ADD_TODO = gql`
      mutation($title: String!) {
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
        emit('add-todo', newTodoText.value); 
        newTodoText.value = ''; 
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
  <div class="add-todo container mx-auto mt-20 w-3/5">
    <input 
      v-model="newTodoText" 
      type="text" 
      placeholder="Digite uma nova tarefa" 
      class="px-4 py-2 border border-gray-300 rounded-md w-3/5"
    />
    <button 
      @click="addTodo" 
      class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition w-1/5 ml-4"
    >
      Adicionar
    </button>
  </div>
</template>