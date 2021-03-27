<template>
  <section class="side-menu-container flex column">
    <!-- <component :is="currComponent"></component> -->
    <button @click="closeMenu" class="close-menu flex center"><img src="@/assets/task-icon/trello-icon-pack/close.svg"/></button>
    <!-- <component :is="currCmp"></component> -->
      <h1 class="menu-title flex center">Menu</h1>

    <section class="side-menu-content flex column align-center">
      <ul class="clean-list">
        <li><div class="side-menu-option" @click="isActivitiesShow=true">Activities</div></li>

        <li>
          <label for="background-input">
            <div class="side-menu-option" @click="isActivitiesShow=false">Change Background</div>
          </label>
          <input
            @change="changeBackground"
            id="background-input"
            type="color"
            v-model="backgroundColor"
          />
        </li>
        <li>
          <div class="side-menu-option" @click="moveToDashBoard">Dashboard</div>
          <div class="aboutThisBoard"></div>
        </li>
        <!-- <router-link to="/dashboard">Dashboard</router-link> -->
        <!-- <li>more</li> -->
      </ul>

      <!-- <component :is="currCmp"></component> -->
      <div v-if="isActivitiesShow" class="menu-activities">
        <!-- <activity-list :board="board" /> -->
        <activity-preview :activites="board.activities" />
      </div>
    </section>
  </section>
  <!-- </section> -->
</template>

<script>
import activityList from "./activity-list";
import activityPreview from "../task/activity-preview";

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
      isActivitiesShow: true,
      // currCmp: activityList
    };
  },
  methods: {
    closeMenu() {
      this.$emit("close");
    },
    changeBackground() {
      const newBoard = this.$clone(this.board);
      newBoard.style = this.backgroundColor;
      // console.log('newBoard:', newBoard)
      this.$store.dispatch({ type: "updateBoard", board: newBoard });
    },
    moveToDashBoard(){
      this.$router.push(`/board/${this.board._id}/dashboard`)
    }
  },
  components: {
    activityList,
    activityPreview
  },
  // created() {
  //   console.log(this.board);
  // },
};
</script>