<template>
  <div class="labels-main-contaier flex column align-start">
    <h3>Labels</h3>
    <div class="labels-container flex align-center">
      <span
        v-for="label in labels"
        :key="label.id"
        @click="labelClicked"
        class="label"
        :style="{ backgroundColor: label.color }"
        >{{ label.title }}</span
      >
      <div @click="labelClicked" class="label-plus-icon flex center">
        <img src="@/assets/task-icon/plus.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    labels: {},
  },
  methods: {
    labelClicked() {
      this.$emit("label-clicked");
    },
  },
};
</script>

<style>
</style>