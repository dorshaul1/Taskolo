<template>
  <section v-if="boards" class="board-list">
    <main-header />

    <h1>Board List</h1>
    <ul>
      <li
        class="board-preview"
        v-for="board in boards"
        :key="board._id"
        @click="boardPreviewClicked(board._id)"
      >
        <div class="board-title">{{ board.title }}</div>
      </li>
    </ul>
  </section>
</template>

<script>
import mainHeader from "../cmps/main-header";

export default {
  name: "boardList",
  components: {
    mainHeader,
  },
  computed: {
    boards() {
      return this.$store.getters.boards;
    },
  },
  methods: {
    boardPreviewClicked(boardId) {
      this.$router.push(`/board/${boardId}`);
    },
  },
  created() {
    this.$store.dispatch({ type: "loadBoards" });
    this.$store.dispatch({ type: "loadUsers" });
  },
};
</script>

<style>
.board-preview {
  background-color: black;
  color: white;
  height: 150px;
  width: 150px;
  cursor: pointer;
  margin: 30px;
}
</style>