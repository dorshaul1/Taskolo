<template>
  <div class="home">
    <main-header></main-header>
    <main class="home-main-container">
      <section class="home-main-area">
        <div class="title">Taskolo helps teams move work forward.</div>

        <div class="explanation">
          Collaborate, manage projects, and reach new productivity peaks. From
          high rises to the home office, the way your team works is
          unique—accomplish it all with Taskolo.
        </div>

        <button @click="goDemoBoard" class="board-demo-btn">Try it</button>
      </section>

      <section class="logo">
        <img alt="Vue logo" src="../assets/logo.png" />
      </section>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import mainHeader from "../cmps/main-header";

export default {
  name: "Home",
  components: {
    mainHeader
  },
  computed: {
    currBoard() {
      return this.$state.getters.currBoard;
    },
  },
  methods: {
    goDemoBoard() {
      this.$router.push(`/board`);
    },
  },
};
</script>
