<template>
  <section v-if="currBoard">
    <board-header @open="isMenuOpen = true" />
    <side-menu @close="isMenuOpen = false" :class="{ 'menu-show': isMenuOpen }" />
    <main class="flex board-details">
      <group
        v-for="group in currBoard.groups"
        :key="group.id"
        :group="group"
        :boardId="currBoard._id"
      ></group>
    </main>
    <router-view />
  </section>
</template>

<script>
import group from "../cmps/group/group";
import boardHeader from "../cmps/board/board-header";
import sideMenu from "../cmps/board/side-menu";

export default {
  name: "board-details",
  data() {
    return {
      isMenuOpen: false,
    };
  },
  computed: {
    boardId() {
      return this.$route.params.boardId;
    },
    currBoard() {
      return this.$store.getters.currBoard;
    },
  },
  methods: {
    // openMenu() {
    //   // console.log('efewf');
    //   this.isMenuOpen = true;
    //   console.log("this.isMenuOpen:", this.isMenuOpen);
    // },
    // closeMenu() {
    //   this.isMenuOpen = false;
    //   console.log('this.isMenuOpen:', this.isMenuOpen)
    // },
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
    boardHeader,
    sideMenu,
  },
};
</script>

<style>
</style>