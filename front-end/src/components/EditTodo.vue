<script>
import { ref, watch } from 'vue';

export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const todoText = ref(props.todo.text); // Usar 'ref' para 'todoText'

    // Assistir mudanças na prop 'todo' e atualizar 'todoText' quando mudar
    watch(
      () => props.todo,
      (newTodo) => {
        todoText.value = newTodo.text;
      },
      { immediate: true }
    );

    const saveTodo = () => {
      props.$emit('save-todo', { index: props.todo.index, text: todoText.value });
    };

    const cancelEdit = () => {
      props.$emit('cancel-edit', props.todo.index);
    };

    return {
      todoText,
      saveTodo,
      cancelEdit,
    };
  },
};
</script>
