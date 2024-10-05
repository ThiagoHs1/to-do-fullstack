<template>
    <li>
      <input type="checkbox" v-model="task.completed">
      <span :class="{ completed: task.completed }">{{ task.title }}</span>
      <button @click="$emit('removeTask')">Remover</button>
    </li>
  </template>
  
  <script>
  export default {
    props: {
      task: Object
    }
  }
  </script>
  
  <style>
  .completed {
    text-decoration: line-through;
  }
  </style>
  