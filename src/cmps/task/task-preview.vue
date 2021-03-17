<template>
  <div class="task-container" v-if="task">
    <div class="task-header flex space-between">
      <div
        v-if="task.style"
        class="taskColor"
        :style="{ 'background-color': task.style.bgColor }"
      ></div>
      <button class="open-task-btn" @click="openTaskPreview">...</button>
    </div>

    <div class="task-main">
      <ul class="flex labels" v-if="task.labelIds">
        <li class="label" v-for="(label, index) in task.labelIds" :key="index">
          <div
            class="taskLabel"
            :style="{ 'background-color': getTaskColor(label) }"
          ></div>
        </li>
      </ul>

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
  data() {
    return {
      labels: this.task.labelIds,
    };
  },
  computed: {
    currBoard() {
      return this.$store.getters.currBoard;
    },
  },
  methods: {
    async openTaskPreview() {
      await this.$store.dispatch({ type: "setTask", task: this.task });
      this.$router.push("/board/" + this.boardId + "/task/" + this.task.id);
    },
    getTaskColor(taskLabelId) {
      let labels = this.currBoard.labels;
      let currLabel = labels.find((label) => label.id === taskLabelId);
      return currLabel.color;
    },
  },
};
</script>
