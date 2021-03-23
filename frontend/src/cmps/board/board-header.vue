<template>
  <header v-if="this.currBoard" class="board-header flex align-center">
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
    <div class="board-title">
      <h1 v-if="!isEdititle" >
        {{ this.currBoard.title }}
      </h1>
      <!-- <form class="edit-title-input" v-else @submit.prevent="changeBoardTitle">
        <el-input ref="title" v-model="this.currBoard.title"></el-input>
      </form> -->
    </div>

    <span class="seperate">|</span>
    <ul class="members-list flex clean-list align-center">
      <li
        v-for="member in this.currBoard.members"
        :key="member._id"
        class="member-avatar"
      >
        <img :src="member.imgUrl" alt="-" />
      </li>
      <button class="add-member-btn" @click="isMembersOpen = !isMembersOpen">
        Invite
      </button>
    </ul>

    <base-task-modal
      @close-modal="isMembersOpen = false"
      v-if="isMembersOpen"
      title="Members"
    >
      <!-- <members :members="this.currBoard.members" @add-member="addMember" /> -->
      <invite-members />
    </base-task-modal>

    <button class="show-menu-btn" @click="openMenu">
      <i class="el-icon-more"></i> Show Menu
    </button>
  </header>
</template>

<script>
// import sideMenu from "./side-menu";
import members from "../task/task-option/task-details/members";
import baseTaskModal from "../base-task-modal";
import inviteMembers from "../invite-members";

export default {
  name: "board-header",
  props: {
    // currBoard: {},
  },
  data() {
    return {
      // boardTitle: this.currBoard.title,
      chossenBoard: "",
      isMembersOpen: false,
      isEdititle: false,
      // editedTitle: this.currBoard.title,
    };
  },
  // components: {
  //   sideMenu,
  // },
  computed: {
    getBoards() {
      return this.$store.getters.boards;
    },
    getUsers() {
      // console.log('this.$store.getters.users:', this.$store.getters.users)
      return this.$store.getters.users;
    },
    currBoard() {
      const clone = require("rfdc");
      return clone({ proto: true })(
        Object.create(this.$store.getters.currBoard)
      );
      // return this.$store.getters.currBoard;
    },
    // currBoard() {
    //   return this.$store.getters.currBoard;
    // },
    // boardTitle(){
    //   return this.$store.getters.currBoard.title
    // }
    // menuOpen() {
    //   if (this.isMenuOpen) return "is-show-menu";
    // },
  },
  methods: {
    changeBoardTitle() {
      // const clone = require("rfdc");
      // const newBoard = clone({ proto: true })(Object.create(this.currBoard));
      newBoard.title = this.currBoard.title;
      // console.log('newBoard:', newBoard)
      this.$store.dispatch({ type: "updateBoard", board: newBoard });
      this.isEdititle = false;
    },
    editTitle() {
      this.isEdititle = true;
      this.$nextTick(() => {
        this.$refs.title.select();
      });
    },

    openMenu() {
      // console.log( 'open')
      this.$emit("open"); // console.log("this.isMenuOpen:", this.isMenuOpen);
    },
    // addUser(member) {
    // try {
    //   // task clone
    //   const clone = require("rfdc");
    //   const boardCopy = clone({ proto: true })(Object.create(this.currBoard));

    //   //toggle members
    //   let boardMembers = boardCopy.members;
    //   if (!boardMembers) boardMembers = [];
    //   const isBoardMember = boardMembers.some(
    //     (boardMember) => boardMember._id === member._id
    //   );

    //   console.log("isBoardMember", isBoardMember);

    //   if (!isBoardMember) {
    //     console.log("pushing...");
    //     boardMembers.push(member);
    //   } else {
    //     console.log("deleteing......");
    //     const memberIdx = boardMembers.findIndex((m) => {
    //       m._id = member._id;
    //     });
    //     boardMembers.splice(memberIdx, 1);
    //   }

    //   boardCopy.members = boardMembers;

    //   // change values
    //   this.$store.dispatch({ type: "updateBoard", board: boardCopy });
    // } catch (err) {
    //   console.log(err);
    // }
    // },
  },
  components: {
    members,
    baseTaskModal,
    inviteMembers,
  },
  mounted() {
    //   // console.log(this.currBoard._id);
    console.log(this.currBoard);
  },
};
</script>

<style>
</style>