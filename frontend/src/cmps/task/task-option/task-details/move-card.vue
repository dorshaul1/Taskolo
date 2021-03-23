<template>
    <section class="move-card flex column align-start">
        <h4>SUGGESTED</h4>
        <a class="button-link" href="#">Title Here</a>
        <h4>SELECT DESTINATION</h4>
        <select-card-position
            :boards="boards"
            :currBoard="currBoard"
            :currGroup="currGroup"
            @task-position-changed="positionChanged"
        />
        <el-button @click="moveTask" type="success">Move</el-button>
    </section>
</template>

<script>
import selectCardPosition from "../../../select-card-position.vue";
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
                boardId: this.currBoard._id,
                groupId: this.currGroup.id,
                position: 1,
            },
        };
    },
    methods: {
        positionChanged(copyTo) {
            this.copyTo = copyTo;
        },
        moveTask() {
            this.$emit("move-task", {
                copyTo: this.copyTo,
                isCopy: false,
            });
        },
    },

    components: {
        selectCardPosition,
    },
};
</script>

<style>
</style>