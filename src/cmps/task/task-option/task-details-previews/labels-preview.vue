<template>
    <div class="labels-main-contaier flex column align-start">
        <h3>Labels</h3>
        <div class="labels-container flex">
            <span v-for="label in labels" :key="label.id" @click="labelClicked" class="label" :style="{backgroundColor: label.color}">{{label.title}}</span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        labels: {},
    },
    methods:{
        labelClicked() {
            this.$emit('label-clicked')
        }
    },
    created() {
        console.log("labels preview", this.labels);
    },
};
</script>

<style>
</style>