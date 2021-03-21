<template>
    <section class="edit-label-container">
        <input type="text" placeholder="Name..." />
        <div class="label-edit-color-container">
            <div
                v-for="label in labels"
                :key="label.id"
                class="label-edit-item"
                :style="{ backgroundColor: label.color }"
            ></div>
        </div>
        <div class="label-edit-btns flex space-between">
            <button>Save</button>
            <button>Delete</button>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        labels: {},
        labelToEdit: {},
    },
    created() {
        console.log("labelToEdit inside labels_edit", this.labelToEdit);
    },
};
</script>

<style>
</style>