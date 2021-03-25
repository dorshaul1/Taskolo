<template>
    <section>
        <el-input type="text" placeholder="Title" v-model="title" />
        <el-button @click="addTitle">Add</el-button>
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