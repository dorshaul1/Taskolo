<template>
    <section class="checklist-modal flex column">
        <h3>Title</h3>
        <el-input type="text" placeholder="Checklist" v-model="title" />
        <button class="add-btn flex center" @click="addTitle">Add</button>
    </section>
</template>

<script>
export default {
    name: "cheacklist",
    data() {
      return {
        title: ''
      }
    },
    methods: {
      addTitle() {
        if(this.title) this.$emit('add-checklist-title', this.title)
      }
    }
};
</script>

<style>
</style>