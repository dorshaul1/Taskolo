<template>
    <section class="delete-card">
        <p>
            All actions will be removed from the activity feed and you won’t be
            able to re-open the card. There is no undo.
        </p>
        <el-button type="danger" @click="deleteCard">Delete</el-button>
    </section>
</template>

<script>
export default {
    methods:{
        deleteCard() {
            this.$emit('delete-card')
        }
    }
};
</script>

<style>
</style>