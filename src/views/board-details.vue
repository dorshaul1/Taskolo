<template>
  <section
    v-if="currBoard"
    class="main-board-container"
    :style="{ backgroundColor: currBoard.style }"
  >
    <!-- <board-header @open="isMenuOpen = true" />
    <side-menu
      @close="isMenuOpen = false"
      :class="{ 'menu-show': isMenuOpen }"
      :board="currBoard"
    /> -->

    <main class="flex board-details">
      <group
        @drag-done="dragDone"
        class="main-group-container"
        v-for="group in currBoard.groups"
        :key="group.id"
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

          <div class="flex">
            <button @click="addNewGroup" class="add-group">Add list</button>
            <button @click="closeGroupAdd">x</button>
          </div>
        </section>
      </div>
    </main>
    <router-view />
  </section>
</template>

<script>
import group from "../cmps/group/group";
import boardHeader from "../cmps/board/board-header";
import sideMenu from "../cmps/board/side-menu";
import { utilService } from "../services/util.service.js";

export default {
  name: "board-details",
  data() {
    return {
      newGroup: {
        title: "",
      },
      isMenuOpen: false,
      isTakeGroup: false,
      clonedBoard: null,
    };
  },
  computed: {
    boardId() {
      return this.$route.params.boardId;
    },
    currBoard() {
      return this.$store.getters.currBoard;
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
      // //clone boards clone
      const clone = require("rfdc");
      const boardCopy = clone({ proto: true })(Object.create(this.currBoard));

      // const boardsCopy = clone({ proto: true })(Object.create(this.getBoards));
      // var currBoardIdx = this.getBoards.findIndex(
      //   (board) => board._id === this.currBoard._id
      // );
      // console.log("func: boards copy", boardsCopy);
      // console.log("func: idx copy", currBoardIdx);

      // boardCopy.splice(0, 1, this.clonedBoard);
      //replace the group- find index

      //dispatch
      await this.$store.dispatch({ type: "updateBoard", board: boardCopy });
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
  },
  mounted() {
    const clone = require("rfdc");
    (this.clonedBoard = clone({ proto: true })(Object.create(this.currBoard))),
      console.log("board", this.currBoard);
  },
};
</script>

<style>
</style>