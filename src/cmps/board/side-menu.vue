<template>
  <section class="side-menu-container flex column">
    <button @click="closeMenu" class="close-menu">X</button>
    <section class="side-menu-content flex column align-center">
      <h1>Menu</h1>
      <ul class="clean-list">
        <li>About This Board</li>
        <li>Change Background</li>
        <li>more</li>
      </ul>
      <h1>Activities</h1>
    </section>
  </section>
  <!-- </section> -->
</template>

<script>
export default {
  name: "side-menu",
  methods: {
    closeMenu() {
      this.$emit("close");
    },
  },
};
</script>