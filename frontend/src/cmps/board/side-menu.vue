<template>
  <section class="side-menu-container flex column">
    <!-- <component :is="currComponent"></component> -->
    <button @click="closeMenu" class="close-menu flex center">X</button>
    <!-- <component :is="currCmp"></component> -->
    <section class="side-menu-content flex column align-center">
      <h1>Menu</h1>
      <ul class="clean-list">
        <li>
          <div class="side-menu-option">About This Board</div>
          <div class="aboutThisBoard"></div>
        </li>
        <li>
          <label for="background-input">
            <div class="side-menu-option">Change Background</div>
          </label>
          <input
            @change="changeBackground"
            id="background-input"
            type="color"
            v-model="backgroundColor"
          />
        </li>
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
      // currCmp: 'menu-home'
    },
  },
  name: "side-menu",
  data() {
    return {
      backgroundColor: "white",
    };
  },
  methods: {
    closeMenu() {
      this.$emit("close");
    },
    changeBackground() {
      const clone = require("rfdc");
      const newBoard = clone({ proto: true })(Object.create(this.board));
      newBoard.style = this.backgroundColor;
      // console.log('newBoard:', newBoard)
      this.$store.dispatch({ type: "updateBoard", board: newBoard });
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