<template>
  <div
    class="task-container"
    v-if="task"
    @click="openTaskPreview"
    @mouseover="isEdit = true"
    @mouseleave="isEdit = false"
  >
    <div class="edit-btn">
      <div class="editing">
        <font-awesome-icon
          v-show="isEdit"
          @click="openEditModal"
          class="task-edit"
          :icon="['fas', 'pencil-alt']"
        />

        <font-awesome-icon
          v-show="isEdit"
          @click.stop="deleteTask"
          class="task-delete"
          :icon="['fas', 'trash-alt']"
        />
      </div>
    </div>

    <div
      class="task-main cover"
      v-if="task.style.isCover"
      :style="{ 'background-color': task.style.bgColor }"
    >
      <div class="title-cover">
        {{ task.title }}
      </div>
    </div>

    <div v-else>
      <div class="task-header">
        <div
          v-if="task.style.bgColor"
          class="taskColor"
          :style="{ 'background-color': task.style.bgColor }"
        ></div>
      </div>

      <div class="task-main">
        <ul class="flex labels" v-if="task.labelIds">
          <li
            class="label"
            v-for="(label, index) in task.labelIds"
            :key="index"
          >
            <div
              class="taskLabel"
              :style="{ 'background-color': getTaskColor(label) }"
            ></div>
          </li>
        </ul>

        <div v-if="task.attachment" class="attachment">
          <img
            :src="task.attachment"
            alt="picture"
            class="picture-preview"
            style="width: auto"
          />
        </div>

        <div class="title">
          {{ task.title }}
        </div>

        <div class="badges flex">
          <div class="watch" v-if="task.watch">
            <!-- <font-awesome-icon :icon="['far', 'eye']" /> -->
            <img
              class="task-prev-icon"
              src="../../assets/task-icon/visibility.svg"
              alt=""
            />
          </div>

          <div
            class="dute-date flex align-center space-between"
            v-if="task.dueDate"
            :class="{
              isTimePass: this.$moment().isAfter(task.dueDate) && !task.isDone,
              isToday: this.$moment().isSame(task.dueDate, 'day'),
              isDone: task.isDone,
            }"
            @mouseover="userOverDueDate"
            @mouseout="isClockHover = ''"
            @click.stop="isDoneToggle"
          >
            <font-awesome-icon
              class="due-date-icon"
              v-show="isClockHoverForDisplay === ''"
              :icon="['far', 'clock']"
            />
            <font-awesome-icon
              class="due-date-icon"
              v-show="isClockHoverForDisplay === 'notDone'"
              :icon="['far', 'square']"
            />
            <font-awesome-icon
              class="due-date-icon"
              v-show="isClockHoverForDisplay === 'done'"
              :icon="['far', 'check-square']"
            />
            <!-- <v-if="isClockHover" font-awesome-icon :icon="['fas', 'stop']" /> -->
            <span class="time-display"> {{ timeForDisplay }}</span>
          </div>

          <div class="desc" v-if="task.description">
            <!-- <font-awesome-icon :icon="['fas', 'align-left']" /> -->
            <img
              class="task-prev-icon"
              src="../../assets/task-icon/left-alignment.svg"
              alt=""
            />
          </div>

          <div class="comments" v-if="task.comments">
            <font-awesome-icon :icon="['far', 'comment']" />
          </div>

          <div class="checklist flex align-center" v-if="task.checklists">
            <!-- <font-awesome-icon :icon="['far', 'check-square']" /> -->
            <img
              class="task-prev-icon"
              src="../../assets/task-icon/check-box.svg"
              alt=""
            />
            <span class="checklist-display"> {{ checklistForDisplay }}</span>
          </div>

          <div class="members flex" v-if="task.members">
            <li
              class="memeber"
              v-for="member in task.members"
              :key="member._id"
            >
              <img class="task-prev-icon member" :src="member.imgUrl" alt="" />
            </li>
          </div>
        </div>
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
      isClockHover: "",
    };
  },
  computed: {
    currBoard() {
      return this.$store.getters.currBoard;
    },
    timeForDisplay() {
      return this.$moment(this.task.dueDate).format("MMM D");
    },
    checklistForDisplay() {
      let size = 0;
      let dones = 0;

      this.task.checklists.forEach((checklist) => {
        checklist.todos.forEach((todo) => {
          size++;
          if (todo.isDone) dones++;
        });
      });
      return `${dones}/${size}`;
    },
    getBoard() {
      return this.$store.getters.currBoard;
    },
    isClockHoverForDisplay() {
      return this.isClockHover;
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
    async deleteTask() {
      try {
        console.log("task delete");
        const clone = require("rfdc");

        const boardCopy = clone({ proto: true })(Object.create(this.getBoard));
        var groups = boardCopy.groups;

        var currGroupIdx = groups.findIndex(
          (group) => group.id === this.group.id
        );

        var currTaskIdx = groups[currGroupIdx].tasks.findIndex(
          (task) => task.id === this.task.id
        );

        boardCopy.groups[currGroupIdx].tasks.splice(currTaskIdx, 1);
        //update board
        await this.$store.dispatch({ type: "updateBoard", board: boardCopy });
      } catch (error) {
        console.log("task-preview cmp: error with delete task", error);
      }
    },
    async isDoneToggle() {
      try {
        await this.$store.commit({
          type: "setTaskById",
          taskId: this.task.id,
        });
        const clone = require("rfdc");
        let taskCopy = clone({ proto: true })(Object.create(this.task));
        taskCopy.isDone = !taskCopy.isDone;
        this.$store.dispatch({ type: "updateTask", task: taskCopy });
      } catch (error) {
        console.log("cant toggle is done", error);
      }
    },
    userOverDueDate() {
      this.isClockHover = "notDone";
      if (this.task.isDone) {
        this.isClockHover = "done";
      }
    },
  },
  created() {},
};
</script>
