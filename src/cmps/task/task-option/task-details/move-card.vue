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
            <!-- <el-select></el-select>
            <el-select></el-select> -->
        </div>
    </section>
</template>

<script>
export default {
    props: {
        boards: {
            type: Array,
        },
    },
    data() {
        return {
            copyTo: {
                board: null,
            },
        };
    },

    created() {
        console.log("move card created", this.boards);
    },
};
</script>

<style>
</style>