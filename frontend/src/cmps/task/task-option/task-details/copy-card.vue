<template>
    <section class="copy-card flex column align-start">
        <label for="title">Title</label>
        <textarea ref="title" name="title" v-model="title"></textarea>
        <label for="select">Copy to...</label>
        <select-card-position
            :boards="boards"
            :currBoard="currBoard"
            :currGroup="currGroup"
            @task-position-changed="positionChanged"
        />
        <el-button type="success" @click="copyTask">Create card</el-button>
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
        titleProp: {
            type: String,
        },
    },
    data() {
        return {
            title: JSON.parse(JSON.stringify(this.titleProp)),
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
            copyTo.title = this.title;
        },
        copyTask(copyTo) {
            copyTo.title = this.title;
            this.$emit("move-task", {
                copyTo: this.copyTo,
                isCopy: true,
            });
        },
    },
    components: {
        selectCardPosition,
    },
    created() {
        console.log("move card created", this.boards);
    },
    mounted() {
        this.$nextTick(() => {
            this.$refs.title.select();
        });
    },
};
</script>

<style>
</style>