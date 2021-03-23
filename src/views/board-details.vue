<template>
  <section
    v-if="currBoard"
    class="main-board-container"
    :style="{ backgroundColor: currBoard.style }"
  >
    <main-header />

    <!-- <div class="main-screen" :style="{ backgroundColor: currBoard.style }"></div> -->
    <board-header @open="isMenuOpen = true" />
    <side-menu
      @close="isMenuOpen = false"
      :class="{ 'menu-show': isMenuOpen }"
      :board="currBoard"
    />

    <main>
      <draggable
        class="flex board-details"
        v-model="currBoard.groups"
        group="group"
        @start="drag = true"
        @end="dragDone"
      >
        <group
          v-for="group in currBoard.groups"
          :key="group.id"
          @drag-done="dragDone"
          class="main-group-container"
          :group="group"
          :boardId="currBoard._id"
        ></group>

        <div class="new-group-container">
          <section v-show="!isTakeGroup">
            <h3
              @click="openGroupkAdd"
              class="add-new-group flex justify-center align-center"
            >
              <span>+</span> Add another list
            </h3>
          </section>

          <section v-show="isTakeGroup" class="take-new-group flex">
            <textarea
              class="group-Add-input"
              ref="groupTitle"
              v-show="isTakeGroup"
              name="NoteTxt"
              v-model="newGroup.title"
              placeholder="Enter a title for this card..."
              rows="2"
            >
            </textarea>

            <div class="group-btn-container flex">
              <button @click="addNewGroup" class="add-group">Add list</button>
              <button @click="closeGroupAdd" class="exit-group">x</button>
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
    };
  },
  computed: {
    boardId() {
      return this.$route.params.boardId;
    },
    currBoard() {
      const clone = require("rfdc");
      let currBoard = this.$store.getters.currBoard;
      const boardCopy = clone({ proto: true })(Object.create(currBoard));
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
      console.log("this.isMenuOpen:", this.isMenuOpen);
    },
    closeMenu() {
      this.isMenuOpen = false;
      console.log("this.isMenuOpen:", this.isMenuOpen);
    },
    openGroupkAdd() {
      this.isTakeGroup = true;
      this.$nextTick(() => {
        this.$refs.groupTitle.focus();
      });
    },
    async addNewGroup() {
      try {
        const clone = require("rfdc");
        const boardCopy = clone({ proto: true })(Object.create(this.currBoard));
        this.newGroup.id = utilService.makeId();
        this.newGroup.tasks = [];
        this.newGroup.style = {};
        console.log("addind new group", this.newGroup);
        boardCopy.groups.push(this.newGroup);
        console.log("addind board", boardCopy);

        await this.$store.dispatch({ type: "updateBoard", board: boardCopy });
        this.closeGroupAdd();
      } catch (err) {
        console.log("error in adding group", err);
      }
    },
    closeGroupAdd() {
      this.isTakeGroup = false;
      this.newGroup = { title: "Enter a title for this card..." };
      console.log("CLOSE");
    },
    async dragDone() {
      console.log("drag done in board details cmp");
      await this.$store.dispatch({
        type: "updateBoard",
        board: this.currBoard,
      });
    },
    async dragGroup() {
      console.log("drag gropps");

      // await this.$store.dispatch({
      //   type: "updateBoard",
      //   board: this.currBoard,
      // });
      // try {
      //   //clone change all the groups
      //   const clone = require("rfdc");
      //   // //replace the group- find index
      //   // var groups = currBoard().groups;
      //   // var currGroupIdx = groups.findIndex(
      //   //   (group) => group.id === this.group.id
      //   // );
      //   // boardCopy.groups.splice(currGroupIdx, 1, this.clonedGroup);
      //   //update to all the board.
      //   this.dragDone();
      // } catch (error) {
      //   console.log("group cmp: error with drag task inside group");
      // }
    },
  },
  watch: {
    boardId: {
      handler() {
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
  },
  async created() {},
};
</script>

<style>
</style>