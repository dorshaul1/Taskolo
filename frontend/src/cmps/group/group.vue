<template>
  <div class="group-container">
    <div class="group-main">
      <div class="group-header flex space-between align-center">
        <h2 class="group-title flex align-center">{{ group.title }}</h2>
        <!-- <input v-if="isEdititle" ref="title" class="group-title editable"  :value="group.title" /> -->

        <div>
          <span @click="openGroupMenu" class="group-menu-btn"
            ><i class="el-icon-more"></i
          ></span>

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
        <draggable
          v-model="clonedGroup.tasks"
          group="task"
          v-bind="dragOptions"
          @start="drag = true"
          @end="dragDone"
        >
          <transition-group
            type="transition"
            :name="!drag ? 'flip-list' : null"
          >
            <task-preview
              v-for="task in clonedGroup.tasks"
              :key="task.id"
              :task="task"
              :group="clonedGroup"
              :boardId="boardId"
            ></task-preview>
          </transition-group>
        </draggable>
  
  
      </div>
    </div>
  </div>
</template>

<script>
import taskPreview from "../task/task-preview";
import { utilService } from "../../services/util.service.js";
import groupMenu from "../group/group-menu";
import baseModal from "../base-task-modal";
import draggable from "vuedraggable";

export default {
  name: "group",
  props: {
    group: {},
    boardId: {},
  },
  data() {
    return {
      newTask: {
        title: "",
      },
      isTakeTask: false,
      isGroupMenuOpen: false,
      isEdititle: false,
      drag: false,
    };
  },
  computed: {
    getBoard() {
      return this.$store.getters.currBoard;
    },
    clonedGroup() {
      return this.group;
    },
    dragOptions() {
      return {
        animation: 200,
        group: "description",
        disabled: false,
        ghostClass: "ghost",
      };
    },
  },
  methods: {
    openTaskAdd() {
      this.isTakeTask = true;
      this.$nextTick(() => {
        this.$refs.taskTitle.focus();
      });
    },
    closeTaskAdd() {
      this.isTakeTask = false;
      this.newTask.title = "";
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
          style: { bgColor: "" },
        });
        await this.$store.dispatch({ type: "updateBoard", board: boardCopy });
        this.closeTaskAdd();
        this.openTaskAdd();
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
    async dragDone() {
      this.drag = false;
      try {
        //clone
        const clone = require("rfdc");
        const boardCopy = clone({ proto: true })(Object.create(this.getBoard));

        //replace the group- find index
        var groups = boardCopy.groups;
        var currGroupIdx = groups.findIndex(
          (group) => group.id === this.group.id
        );
        boardCopy.groups.splice(currGroupIdx, 1, this.clonedGroup);
        this.$emit("drag-done");
      } catch (error) {
        console.log("group cmp: error with drag task inside group");
      }
    },
  },
  components: {
    taskPreview,
    groupMenu,
    baseModal,
    draggable,
  },
};
</script>

