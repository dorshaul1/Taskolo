<template>
  <div class="task-container">
    <h1>task</h1>
    <button @click="openTaskPreview">...</button>
    <!-- <router-link to="/board/:boardId/task/:taskId">...</router-link> -->
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

<style>
.task-container {
  height: 50px;
  width: 240px;
  background-color: burlywood;
  border: 2px solid white;
}
</style>