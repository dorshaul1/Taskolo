<template>
  <section class="side-menu-container flex column">
    <button @click="closeMenu" class="close-menu">X</button>
    <section class="side-menu-content">
      <h1>Menu</h1>
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