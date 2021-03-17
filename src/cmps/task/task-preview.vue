<template>
  <div class="task-container">

    <div class="task-header flex space-between">
      <div class="taskColor" :style="{ 'background-color': task.style.bgColor }"></div>
      <button class="open-task-btn" @click="openTaskPreview">...</button>
    </div>

    <div class="task-main">

      <div class="labels">
        <h1>labels</h1>
      </div>

      <div class="title">
        <h3>{{ task.title }}</h3>
      </div>

      <div class="badges">
        <h1>badges</h1>
      </div>

      <div class="members">
        <h1>members</h1>
      </div>
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
