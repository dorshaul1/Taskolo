<template>
    <section v-if="boards">
        <h1>Board List</h1>
        <ul>
            <li v-for="board in boards" :key="board._id">
                {{board._id}}
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    name: "boardList",
    computed: {
        boards() {
            return this.$store.getters.boards;
        },
    },
    created() {
        this.$store.dispatch({ type: "loadBoards" });
    },
};
</script>

<style>
</style>