<template>
  <div class="group-container" @click.stop="updateGroupTitle">
    <div class="group-main">
      <div class="group-header flex space-between align-center">
        <div>
          <h2
            v-if="!isEditTitle"
            @click.stop="editTitle"
            class="group-title flex align-center"
          >
            {{ group.title }}
          </h2>
          <input
            @change="updateGroupTitle"
            v-else
            class="groupTitleEdit"
            ref="titleEdit"
            type="text"
            v-model="title"
            :placeholder="group.title"
          />
        </div>
        <div class="menu-options">
          <span @click="openGroupMenu" class="group-menu-btn"
            ><i class="el-icon-more"></i
          ></span>
          <base-modal
            @close-modal="closeMenu"
            title="list"
            v-if="isGroupMenuOpen"
            class="group-edit-modal"
          >
            <group-menu @delete-group="deleteGroup"></group-menu>
          </base-modal>
        </div>
      </div>
      <!-- :class="{'drag-start': drag}" -->
       <!-- v-touch:touchhold="longTapHandler"
          v-touch:end = "endLongTapHandler"
          :disabled="isMobileScreen"
          :scroll-sensitivity="200" 
              :scroll-sensitivity="200" 
          :scroll-sensitivity="200" -->
      <div class="group-main-body">
        <draggable
          :force-fallback="true"
          v-model="clonedGroup.tasks"
          group="task"
          v-bind="dragOptions"
          @end="dragDone"
        >
          <transition-group
            type="transition"
            :name="!drag ? 'flip-list' : null"
          >
            <task-preview
              @task-modal-open="openPreviewModal"
              v-for="task in clonedGroup.tasks"
              :key="task.id"
              :task="task"
              :group="clonedGroup"
              :boardId="boardId"
            ></task-preview>
          </transition-group>
        </draggable>
        <div class="group-footer flex space-between">
          <section v-show="!isTakeTask">
            <h3 @click="openTaskAdd" class="add-new-Card">
              <img
                class="plus-group"
                src="../../assets/task-icon/plus.svg"
                alt="+"
              />
              Add another card
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
            <div class="task-btn-container flex align-center">
              <button @click="addNewTask" class="add-task">Add card</button>
              <button @click="closeTaskAdd" class="exit-task">
                <img src="@/assets/task-icon/trello-icon-pack/close.svg" />
              </button>
            </div>
          </section>
        </div>
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
      isEditTitle: false,
      title: this.group.title,
      screenWidth: null,
      isMobileScreen: false,
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
        const boardCopy = this.$clone(this.getBoard);
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
        const boardCopy = this.$clone(this.getBoard);
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
        const boardCopy = this.$clone(this.getBoard);
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
    editTitle() {
      this.isEditTitle = true;
      this.$nextTick(() => {
        this.$refs.titleEdit.select();
      });
    },
    async updateGroupTitle() {
      try {
        console.log("new title", this.title);
        const boardCopy = this.$clone(this.getBoard);
        var groups = boardCopy.groups;
        var currGroupIdx = groups.findIndex(
          (group) => group.id === this.group.id
        );
        boardCopy.groups[currGroupIdx].title = this.title;
        await this.$store.dispatch({ type: "updateBoard", board: boardCopy });
        this.isEditTitle = false;
        this.title = this.group.title;
      } catch (error) {
        console.log("cant update group title", error);
      }
    },
    openPreviewModal(task) {
      this.$emit("task-modal-open", task);
    },
    onResize() {
      this.screenWidth = window.innerWidth;
      // console.log("this.screenWidth:", this.screenWidth);
      this.isMobileScreen = this.screenWidth <= 690 ? true : false;
      console.log("isMobileScreen:", this.isMobileScreen);
    },
    longTapHandler() {
      console.log('ddd');
      this.isMobileScreen = false;
    },
    endLongTapHandler(){
      this.isMobileScreen = true;
    }
  },
  mounted() {
    this.onResize();
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
      // console.log(window.innerWidth);
    });
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
  components: {
    taskPreview,
    groupMenu,
    baseModal,
    draggable,
  },
};
</script>