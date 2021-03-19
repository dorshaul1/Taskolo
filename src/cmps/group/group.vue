<template>
  <div class="group-container">
    <div class="group-main">
      <div class="group-header flex space-between">
        <h3 class="group-title">{{ group.title }}</h3>

        <div>
          <button @click="openGroupMenu" class="group-menu-btn">...</button>

          <base-modal
            @close-modal="closeMenu"
            title="list"
            v-if="isGroupMenuOpen"
          >
            <group-menu @delete-group="deleteGroup"></group-menu>
          </base-modal>
        </div>
      </div>

      <div class="group-main-body">
        <task-preview
          v-for="task in group.tasks"
          :key="task.id"
          :task="task"
          :group="group"
          :boardId="boardId"
        ></task-preview>
      </div>

      <div class="group-footer flex space-between">
        <section v-show="!isTakeTask">
          <h3 @click="openTaskAdd" class="add-new-Card">
            <span>+</span> add a card
          </h3>
        </section>

        <section v-show="isTakeTask" class="take-new-task flex">
          <textarea
            class="task-Add-input"
            ref="taskTitle"
            v-show="isTakeTask"
            name="NoteTxt"
            v-model="newTask.title"
            placeholder="Enter a title for this card..."
            rows="2"
          >
          </textarea>

          <div class="flex space-between">
            <button @click="addNewTask" class="add-task">Add card</button>
            <button @click="closeTaskAdd">x</button>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import taskPreview from "../task/task-preview";
import { utilService } from "../../services/util.service.js";
import groupMenu from "../group/group-menu";
import baseModal from "../base-task-modal";

export default {
  name: "group",
  props: {
    group: {},
    boardId: {},
  },
  data() {
    return {
      newTask: {
        title: null,
      },
      isTakeTask: false,
      isGroupMenuOpen: false,
    };
  },
  computed: {
    getBoard() {
      return this.$store.getters.currBoard;
    },
  },
  methods: {
    openTaskAdd() {
      this.isTakeTask = true;
    },
    closeTaskAdd() {
      this.isTakeTask = false;
      this.newTask.title = "Enter a title for this card...";
    },
    openGroupMenu() {
      this.isGroupMenuOpen = true;
    },
    closeMenu() {
      this.isGroupMenuOpen = false;
    },
    async addNewTask() {
      try {
        const clone = require("rfdc");
        const boardCopy = clone({ proto: true })(Object.create(this.getBoard));
        var groups = boardCopy.groups;
        var currGroupIdx = groups.findIndex(
          (group) => group.id === this.group.id
        );
        boardCopy.groups[currGroupIdx].tasks.push({
          id: utilService.makeId(),
          title: this.newTask.title,
        });
        await this.$store.dispatch({ type: "updateBoard", board: boardCopy });
        this.closeTaskAdd();
      } catch (err) {
        console.log("group-cmp: error with try to add new task", err);
      }
    },
    async deleteGroup() {
      try {
        console.log("group delete");
        const clone = require("rfdc");
        const boardCopy = clone({ proto: true })(Object.create(this.getBoard));
        var groups = boardCopy.groups;
        var currGroupIdx = groups.findIndex(
          (group) => group.id === this.group.id
        );
        boardCopy.groups.splice(currGroupIdx, 1);
        await this.$store.dispatch({ type: "updateBoard", board: boardCopy });
      } catch (error) {
        console.log("group cmp: error with delete group", error);
      }
    },
  },
  components: {
    taskPreview,
    groupMenu,
    baseModal,
  },
};
</script>

