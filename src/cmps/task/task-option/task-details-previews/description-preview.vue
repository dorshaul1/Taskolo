<template>
  <section class="description flex start column">
    <img src="@/assets/task-icon/left-alignment.svg" alt="" />
    <div class="title-container flex align-center">
      <h3>Description</h3>
      <!-- <button @click="openEditInput">Edit</button> -->
    </div>

    <div
      v-if="!isDescriptionEdit"
      @click="openEditInput"
      class="desc-container flex"
    >
      {{ descriptionToDisplay }}
    </div>

    <textarea
      class="desc-input"
      ref="descTitle"
      v-else
      placeholder="Add more details description..."
      rows="6"
      v-model="descriptionTxt"
    ></textarea>
    <div v-if="isDescriptionEdit" class="desc-input-buttons flex align-center">
      <button @click="updateDesc" class="flex center">Save</button>
      <button @click="isDescriptionEdit = false" class="flex center"><img src="@/assets/task-icon/trello-icon-pack/close.svg"/></button>
    </div>
  </section>
</template>



<script>
export default {
  props: {
    task: Object,
  },
  data() {
    return {
      isDescriptionEdit: false,
      descriptionTxt: this.task.description,
    };
  },
  computed: {
    descriptionToDisplay() {
      if (!this.task.description) return "Add more details description...";

      return this.task.description;
    },
  },
  methods: {
    openEditInput() {
      this.isDescriptionEdit = true;
      this.$nextTick(() => {
        this.$refs.descTitle.select();
      });
    },
    updateDesc() {
      let cloneDesc = JSON.parse(JSON.stringify(this.descriptionTxt));
      this.$emit("updateDesc", cloneDesc);
      this.isDescriptionEdit = false;
    },
  },
};
</script>

<style>
</style>