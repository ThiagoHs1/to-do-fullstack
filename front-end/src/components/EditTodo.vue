<template>
  <div class="modal-overlay"> 
    <div class="modal-content bg-white shadow-md rounded-lg p-4">
      <input 
        type="text" 
        v-model="todoText" 
        class="todo-input px-4 py-2 border border-gray-300 rounded-md w-full"
        @keyup.enter="saveTodo"
      />
      <div class="mt-4 flex justify-end">
        <button @click="cancelEdit" class="cancel-button bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500 transition mr-2">Cancelar</button>
        <button @click="saveTodo" class="save-button bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition">Salvar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      todoText: this.todo.text
    };
  },
  methods: {
    saveTodo() {
      this.$emit('save-todo', { index: this.todo.index, text: this.todoText });
    },
    cancelEdit() {
      this.$emit('cancel-edit', this.todo.index);
    }
  }
};
</script>

<style scoped>
.modal-overlay {
  position: fixed; 
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); 
  display: flex;
  justify-content: center;
  align-items: center; 
}

.modal-content {
  z-index: 100; 
}
</style>