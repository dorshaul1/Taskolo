<template></template>

<script>
export default {
    name: "boardList",
    computed: {
        boards() {
            return this.$store.getters.boards;
        },
    },
    created() {
        console.log(this.boards);
    },
};
</script>

<style>
</style>