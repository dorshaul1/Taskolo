<template>
    <section class="move-card flex column align-start">
        <h4>Suggested</h4>
        <a class="button-link" href="#">To Do</a>
        <h4></h4>
        <el-select v-model="copyTo.board">
            <el-option
                v-for="board in boards"
                :key="board._id"
                :label="board.title"
                :value="board._id"
            ></el-option>
        </el-select>
        <div class="select-container flex">
            <el-select v-model="copyTo.group">
                <el-option
                    v-for="group in selectedBoard.groups"
                    :key="group.id"
                    :label="group.title"
                    :value="group.id"
                ></el-option>
            </el-select>
            <el-select v-model="copyTo.position">
                <el-option
                    v-for="idx in taskCount"
                    :key="idx"
                    :label="idx"
                    :value="idx"
                ></el-option>
            </el-select>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        boards: {
            type: Array,
        },
        currBoard: {
            type: Object,
        },
        currGroup: {
            type: Object,
        },
    },
    data() {
        return {
            copyTo: {
                board: null,
                group: null,
                position: null,
            },
        };
    },
    computed: {
        selectedBoard() {
            if (!this.copyTo.board) return this.currBoard;
            const selectedBoard = this.boards.find(
                (board) => board._id === this.copyTo.board
            );
            return selectedBoard;
        },
        taskCount() {
            if (!this.copyTo.group) return this.currGroup.tasks.length;
            const selectedGroup = this.selectedBoard.groups.find(
                (group) => group._id === !this.copyTo.group.id
            );
            return selectedGroup.tasks.length;
        },
    },

    created() {
        console.log("move card created", this.boards);
    },
};
</script>

<style>
</style>