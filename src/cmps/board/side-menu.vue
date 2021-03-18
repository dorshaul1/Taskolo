<template>
  <section class="side-menu-container flex column">
    <button @click="closeMenu" class="close-menu">X</button>
    <section class="side-menu-content flex column align-center">
      <h1>Menu</h1>
      <ul class="clean-list">
        <li><div class="side-menu-option">About This Board</div></li>
        <li><div class="side-menu-option">Change Background</div></li>
        <li><div class="side-menu-option">more</div></li>
        <!-- <li>more</li> -->
      </ul>
      <h1>Activities</h1>
      <activity-list :board="board" />
    </section>
  </section>
  <!-- </section> -->
</template>

<script>
import activityList from "./activity-list";

export default {
  props: {
    board: {
      type: Object,
    },
  },
  name: "side-menu",
  methods: {
    closeMenu() {
      this.$emit("close");
    },
  },
  components: {
    activityList,
  },
  // created() {
  //   console.log(this.board);
  // },
};
</script>