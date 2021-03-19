<template>
    <section>
        <input type="text" placeholder="Title" v-model="title" />
        <button @click="addTitle">Add</button>
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