<template>
    <section class="task-labels">
        <input type="text" />
        <h3>Labels</h3>
        <div v-for="label in labels" :key="label.id" class="flex">
            <span class="label" :style="{backgroundColor: label.color}">{{label.title}}</span>
            <span>Edit</span>
        </div>

        <button>Create a new label</button>
    </section>
</template>

<script>
export default {
    name: "labels",
    props: {
      labels:{}
    },
    created() {
      console.log(this.labels)
    }
};
</script>

<style>
</style>