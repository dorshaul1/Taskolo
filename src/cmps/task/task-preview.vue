<template>
  <div class="task-container" v-if="task" @click="openTaskPreview">

    <div class="task-header">
      <div
        v-if="task.style"
        class="taskColor"
        :style="{ 'background-color': task.style.bgColor }"
      ></div>
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
        {{ task.title }}
      </div>

      <div class="badges flex space-between">
        <div class="watch" v-if="task.watch">
          <img
            class="task-prev-icon"
            src="../../assets/task-icon/watch.png"
            alt=""
          />
        </div>

        <div class="dute-date" v-if="task.dueDate">
          <span>mar 18</span>
        </div>

        <div class="desc" v-if="task.description">
          <img
            class="task-prev-icon"
            src="../../assets/task-icon/desc.png"
            alt=""
          />
        </div>

        <div class="comments" v-if="task.comments">
          <img
            class="task-prev-icon"
            src="../../assets/task-icon/comments.png"
            alt=""
          />
        </div>

        <div class="checklist" v-if="task.checklists">
          <img
            class="task-prev-icon"
            src="../../assets/task-icon/checklist.png"
            alt=""
          />
        </div>
      </div>

      <div class="members flex" v-if="task.members">
        <li class="memeber" v-for="member in task.members" :key="member._id">
          <img
            class="task-prev-icon member"
            :src="member.imgUrl"
            alt=""
          />
        </li>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    boardId: {},
    group: {},
    task: {},
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
      this.$router.push(`/board/${this.boardId}/task/${this.task.id}`);
    },
    getTaskColor(taskLabelId) {
      let labels = this.currBoard.labels;
      let currLabel = labels.find((label) => label.id === taskLabelId);
      return currLabel.color;
    },
  },
};
</script>
