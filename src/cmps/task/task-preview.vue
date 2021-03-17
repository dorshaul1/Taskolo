<template>
  <div class="task-container">
    <div class="task-main flex space-between">
      <h3>{{task.title}}</h3>
      <button @click="openTaskPreview">...</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    task: {},
    boardId: {},
  },
  name: "task-preview",
  methods: {
    openTaskPreview() {
      this.$router.push("/board/" + this.boardId + "/task/" + this.task.id);
    },
  },
};
</script>
