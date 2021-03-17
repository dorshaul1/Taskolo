<template>
<section v-if="currBoard">
    <h1>Curr board: {{currBoard._id}}</h1>
</section>
</template>

<script>
export default {
    name: "board-details",
    computed: {
        boardId() {
            return this.$route.params.boardId;
        },
        currBoard() {
            return this.$store.getters.currBoard
        }
    },

    watch: {
        boardId: {
            handler() {
                this.$store.dispatch({
                    type: "loadAndWatchBoard",
                    boardId: this.boardId,
                });
            },
            immediate: true,
        },
    },
};
</script>

<style>
</style>