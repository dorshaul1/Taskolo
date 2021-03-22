<template>
    <section class="select-card-position">
        <el-select class="main-select" v-model="copyTo.boardId" @change="taskPositionChanged">
            <el-option
                v-for="board in boards"
                :key="board._id"
                :label="board.title"
                :value="board._id"
            ></el-option>
        </el-select>
        <div class="select-container flex">
            <el-select v-model="copyTo.groupId" class="select-group"  @change="taskPositionChanged">
                <el-option
                    v-for="group in selectedBoard.groups"
                    :key="group.id"
                    :label="group.title"
                    :value="group.id"
                ></el-option>
            </el-select>
            <el-select v-model="copyTo.position" class="select-position"  @change="taskPositionChanged">
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
        title: {
            type: String,
        },
    },
    data() {
        return {
            copyTo: {
                boardId: this.currBoard._id,
                groupId: this.currGroup.id,
                position: 1,
            },
        };
    },
    methods: {
        taskPositionChanged() {
            this.$emit("task-position-changed", this.copyTo);
        },
    },
    computed: {
        selectedBoard() {
            if (!this.copyTo.board) return this.currBoard; //remove
            const selectedBoard = this.boards.find(
                (board) => board._id === this.copyTo.boardId
            );
            return selectedBoard;
        },
        taskCount() {
            if (!this.copyTo.groupId) return this.currGroup.tasks.length; //remove
            const selectedGroup = this.selectedBoard.groups.find(
                (group) => group.id === this.copyTo.groupId
            );
            return selectedGroup.tasks.length;
        },
    },
};
</script>

<style>
</style>