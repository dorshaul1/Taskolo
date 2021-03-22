<template>
    <section class="task-attchment flex column align-start">
        <label for="attchment"> Attach a link</label>
        <el-input
            type="text"
            name="attchment"
            placeholder="Paste any link here..."
            v-model="url"
        />
        <el-button @click="addUrl">Attach</el-button>
    </section>
</template>

<script>
export default {
    name: "task-attachment",
    data() {
        return {
            url: "",
        };
    },
    methods: {
        addUrl() {
            if (!this.url) return;
            this.$emit("add-url", this.url);
        },
    },
};
</script>

<style>
</style>