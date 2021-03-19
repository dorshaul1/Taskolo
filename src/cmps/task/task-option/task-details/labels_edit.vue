<template>
<section class="edit-label-container">
    <div v-for="label in labels" :key="label.id" class="label-edit-item" :style="{backgroundColor: label.color}"></div>
    <div class="label-edit-btns flex space-between">
        <button>Save</button>
        <button>Delete</button>
    </div>
</section>
</template>

<script>
export default {
    props: {
        labels: {}
    }
}
</script>

<style>

</style>