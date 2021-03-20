<template>
  <div
    class="task-container"
    v-if="task"
    @click="openTaskPreview"
    @mouseover="isEdit = true"
    @mouseleave="isEdit = false"
  >
    <div class="edit-btn">
      <img
        v-show="isEdit"
        @click="openEditModal"
        class="task-edit"
        src="../../assets/task-icon/pen.png"
        alt=""
      />

      <img
        v-show="isEdit"
        @click.stop="deleteTask"
        class="task-delete"
        src="../../assets/task-icon/delete (2).png"
        alt=""
      />
    </div>

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

      <div class="badges flex space-between align-center">
        <div class="watch" v-if="task.watch">
          <img
            class="task-prev-icon"
            src="../../assets/task-icon/watch.png"
            alt=""
          />
        </div>

        <div
          class="dute-date flex align-center space-between"
          v-if="task.dueDate"
        >
          <img
            class="task-prev-icon"
            src="../../assets/task-icon/wall-clock.png"
            alt=""
          />

          <span class="time-display"> {{ timeForDisplay }}</span>
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

        <div class="checklist flex align-center" v-if="task.checklists">
          <img
            class="task-prev-icon checklist-icon"
            src="../../assets/task-icon/checklist.png"
            alt=""
          />
          <span class="checklist-display"> {{ checklistForDisplay }}</span>
        </div>
      </div>

      <div class="members flex" v-if="task.members">
        <li class="memeber" v-for="member in task.members" :key="member._id">
          <img class="task-prev-icon member" :src="member.imgUrl" alt="" />
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
      isEdit: false,
    };
  },
  computed: {
    currBoard() {
      return this.$store.getters.currBoard;
    },
    timeForDisplay() {
      return this.$moment(this.task.dueDate).format("MMM D");
    },
    // checklistForDisplay() {
    //   let size = 0;
    //   let dones = 0;

    //   let checklist = this.task.checklists;
    //   let size = checklist.length;
    //   let dones = checklist.filter((item) => item.isDone);
    //   return `${dones.length} / ${size}`;
    // },
    checklistForDisplay() {
      let size = 0;
      let dones = 0;

      this.task.checklists.forEach((checklist) => {
        checklist.todos.forEach((todo) => {
          size++;
          if (todo.isDone) dones++;
        });
      });

      return `${dones} / ${size}`;

      // const unCompleted = this.checklist.todos.reduce((sum, todo) => {
      //   if (todo.isDone) sum += 1;
      //   return sum;
      // }, 0);
      // return ((unCompleted / this.checklist.todos.length) * 100).toFixed(2);
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
    openEditModal() {
      console.log("task modal open");
    },
    deleteTask() {
//               try {
//         console.log("task delete");
//         const clone = require("rfdc");
//         const boardCopy = clone({ proto: true })(Object.create(this.getBoard));

//         var groups = boardCopy.groups;
//         var currGroupIdx = groups.findIndex(
//           (group) => group.id === this.group.id
//         );

// //splice to this task
//         // boardCopy.groups.splice(currGroupIdx, 1);

//         await this.$store.dispatch({ type: "updateBoard", board: boardCopy });
//       } catch (error) {
//         console.log("task-preview cmp: error with delete task", error);
//       }
    },
  },
};
</script>
