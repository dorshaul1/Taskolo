<template>
  <header class="board-header flex align-center">
    <!-- <button class="boards-btn">Boards</button> -->
    <el-select v-model="chossenBoard" placeholder="Boards">
      <el-option
        v-for="board in getBoards"
        :key="board._id"
        :label="board.title"
        :value="board._id"
      >
      </el-option>
    </el-select>

    <h1 v-if="!isEdititle" @click="editTitle">
      {{ currBoards.title }}
    </h1>
    <form class="edit-title-input" v-else @submit.prevent="changeBoardTitle">
      <el-input
        ref="title"
        placeholder="Please input"
        v-model="editedTitle"
      ></el-input>
    </form>

    <div class="members-list flex">
      <div class="member"></div>
      <div class="member"></div>
      <div class="member"></div>
      <div class="member"></div>
      <button class="add-member-btn">Invite</button>
    </div>

    <button class="show-menu-btn" @click="openMenu">··· Show Menu</button>
  </header>
</template>

<script>
// import sideMenu from "./side-menu";
export default {
  name: "board-header",
  data() {
    return {
      chossenBoard: "",
      isEdititle: false,
      editedTitle: this.$store.getters.currBoard.title,
    };
  },
  // components: {
  //   sideMenu,
  // },
  computed: {
    getBoards() {
      return this.$store.getters.boards;
    },
    currBoards() {
      return this.$store.getters.currBoard;
    },
    // menuOpen() {
    //   if (this.isMenuOpen) return "is-show-menu";
    // },
  },
  methods: {
    changeBoardTitle() {
      // this.$store.dispatch({ type: "changeBoardProperty" , properties: 'title', this.editedTitle)
      this.isEdititle = false;
    },
    editTitle() {
      this.isEdititle = true;
      // console.log(this.$refs["title"]);
      // this.$refs["title"].focus();
    },
    openMenu() {
      // console.log( 'open')
      this.$emit('open'); // console.log("this.isMenuOpen:", this.isMenuOpen);
    },
  },
};
</script>

<style>
</style>