<template>
  <section
    v-if="currBoard"
    class="main-board-container"
    :style="{ background: currBoard.style }"
  >
    <task-preview-modal
      class="preview-modal"
      v-if="isModalOpen"
    ></task-preview-modal>

    <main-header />

    <!-- <div class="main-screen" :style="{ backgroundColor: currBoard.style }"></div> -->
    <board-header @open="isMenuOpen = true" :currBoard="currBoard" />
    <side-menu
      @close="isMenuOpen = false"
      :class="{ 'menu-show': isMenuOpen }"
      :board="currBoard"
    />
    <!-- 
    :disabled= "isMobileScreen" -->
    <main>
      <draggable
        class="flex board-details"
        v-model="currBoard.groups"
        group="group"
        @start="drag = true"
        @end="dragDone"
      >
        <group
          @task-modal-open="openPreviewModal"
          v-for="group in currBoard.groups"
          :key="group.id"
          @drag-done="dragDone"
          class="main-group-container"
          :group="group"
          :boardId="currBoard._id"
        ></group>

        <div class="new-group-container">
          <section v-show="!isTakeGroup">
            <h3 @click="openGroupkAdd" class="add-new-group flex align-center">
              <img
                class="plus-board-icon"
                src="../assets/task-icon/plus-white.svg"
                alt="+"
              />Add another list
            </h3>
          </section>

          <section
            v-show="isTakeGroup"
            class="take-new-group flex isEditable"
            :class="{ isEditable: isTakeGroup }"
          >
            <textarea
              class="group-Add-input"
              ref="groupTitle"
              v-show="isTakeGroup"
              name="NoteTxt"
              placeholder="Enter a title for this card..."
              v-model="newGroup.title"
              rows="2"
            >
            </textarea>

            <div class="group-btn-container flex">
              <button @click="addNewGroup" class="add-group">Add list</button>
              <button @click="closeGroupAdd" class="exit-group">
                <img src="@/assets/task-icon/trello-icon-pack/close.svg" />
              </button>
            </div>
          </section>
        </div>
      </draggable>
    </main>

    <router-view />
  </section>
</template>

<script>
import mainHeader from "../cmps/main-header";
import group from "../cmps/group/group";
import boardHeader from "../cmps/board/board-header";
import sideMenu from "../cmps/board/side-menu";
import { utilService } from "../services/util.service.js";
import draggable from "vuedraggable";
import { socketService } from "../services/socket.service.js";
import taskPreviewModal from "../cmps/task/task-preview-modal";

export default {
  name: "board-details",
  data() {
    return {
      newGroup: {
        title: "",
      },
      isMenuOpen: false,
      isTakeGroup: false,
      drag: null,
      isModalOpen: false,
      screenWidth: null,
      isMobileScreen: false,
    };
  },
  computed: {
    boardId() {
      return this.$route.params.boardId;
    },
    currBoard() {
      let currBoard = this.$store.getters.currBoard;
      const boardCopy = this.$clone(currBoard);
      return boardCopy;
    },
    getBoards() {
      return this.$store.getters.boards;
    },
  },
  methods: {
    openMenu() {
      // console.log('efewf');
      this.isMenuOpen = true;
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
    openGroupkAdd() {
      this.isTakeGroup = true;
      this.$nextTick(() => {
        this.$refs.groupTitle.focus();
      });
    },
    async addNewGroup() {
      try {
        const boardCopy = this.$clone(this.currBoard);
        this.newGroup.id = utilService.makeId();
        this.newGroup.tasks = [];
        this.newGroup.style = {};
        boardCopy.groups.push(this.newGroup);

        this.closeGroupAdd();
        await this.$store.dispatch({
          type: "updateBoard",
          board: boardCopy,
        });
      } catch (err) {
        console.log("error in adding group", err);
      }
    },
    closeGroupAdd() {
      this.isTakeGroup = false;
      this.newGroup = { title: "Enter a title for this card..." };
    },
    async dragDone() {
      await this.$store.dispatch({
        type: "updateBoard",
        board: this.currBoard,
      });
    },

    openPreviewModal(task) {
      console.log("the task is", task);
      this.isModalOpen = true;
    },
    onResize() {
      this.screenWidth = window.innerWidth;
      // console.log("this.screenWidth:", this.screenWidth);
      this.isMobileScreen = this.screenWidth <= 690 ? true : false;
      console.log("isMobileScreen:", this.isMobileScreen);
    },
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
  watch: {
    boardId: {
      handler() {
        // console.log(this.boardId)
        this.$store.dispatch({
          type: "loadBoard",
          boardId: this.boardId,
        });
      },
      immediate: true,
    },
  },
  components: {
    group,
    boardHeader,
    sideMenu,
    draggable,
    mainHeader,
    taskPreviewModal,
  },
};
</script>

<style>
</style>
