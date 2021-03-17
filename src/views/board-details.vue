<template>
  <section v-if="currBoard">
    <main>
      <group v-for="group in currBoard.groups" :key="group.id" :group="group" :boardId="currBoard._id"></group>
    </main>
  </section>
</template>

<script>
import group from "../cmps/group/group";
export default {
  name: "board-details",
  computed: {
    boardId() {
      return this.$route.params.boardId;
    },
    currBoard() {
      return this.$store.getters.currBoard;
    },
  },

  watch: {
    boardId: {
      handler() {
        this.$store.dispatch({
          type: "loadAndWatchBoard",
          boardId: this.boardId,
        });
      },
      immediate: true,
    },
  },
  components: {
    group,
  },
};
</script>

<style>
</style>