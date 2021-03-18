<template>
    <section v-if="boards">
        <h1>Board List</h1>
        <ul>
            <li class="board-preview" v-for="board in boards" :key="board._id" @click="boardPreviewClicked(board._id)">
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
    methods: {
        boardPreviewClicked(boardId) {
            this.$router.push(`/board/${boardId}`)
        }
    },
    created() {
        this.$store.dispatch({ type: "loadBoards" });
    },
};
</script>

<style>
.board-preview{
    background-color: black;
    color: white;
    height: 150px;
    width: 150px;
    cursor: pointer;
    margin: 30px;
}
</style>