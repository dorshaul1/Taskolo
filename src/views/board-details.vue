<template>
    <section class="border-detials-body" v-if="currBoard">
        <board-header></board-header>
        <main class="flex">
            <group
                v-for="group in currBoard.groups"
                :key="group.id"
                :group="group"
                :boardId="currBoard._id"
            ></group>
        </main>
        <router-view />
    </section>
</template>

<script>
import group from "../cmps/group/group";
import boardHeader from "../cmps/board/board-header";
export default {
    name: "board-details",
    computed: {
        boardId() {
            return this.$route.params.boardId;
        },
        currBoard() {
            return this.$store.getters.currBoard;
        },
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
    components: {
        group,
        boardHeader,
    },
};
</script>

<style>
</style>