<template>
    <section>
        <p>
            Deleting a checklist is permanent and there is no way to get it
            back.
        </p>
        <button @click="deleteChecklist">Delete</button>
    </section>
</template>

<script>
export default {
    methods: {
        deleteChecklist() {
            this.$emit('delete-checklist')
        }
    }
};
</script>

<style>
</style>