<template>
    <section>
        <label>
            Attach a link
            <el-input
                type="text"
                placeholder="Paste any link here..."
                v-model="url"
            />
        </label>
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