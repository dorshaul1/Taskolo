<template>
    <section class="cover-colors flex column flex-start">
        <div class="size-container flex column flex-start">
            <h4>Size</h4>
            <div class="size-buttons flex">
                <div :style="{backgroundColor: cover.bgColor}" @click="coverStateClicked(false)"><img src="@/assets/task-icon/covering.svg" alt=""></div>
                <div :style="{backgroundColor: cover.bgColor}" @click="coverStateClicked(true)"><img src="@/assets/task-icon/cover.svg" alt=""></div>
            </div>
        </div>
        <h4>Colors</h4>
        <div class="colors-container">
            <div
                v-for="color in colors"
                :key="color"
                class="color-item"
                :style="{ backgroundColor: color }"
                @click="colorClicked(color)"
            ></div>
        </div>
        <div class="attachtment-container flex column flex-start">
            <h4>Attachments</h4>
            <el-button>Upload an image</el-button>
        </div>
    </section>
</template>

<script>
export default {
    name: "cover-color",
    props: {
        colors: {},
    },
    data() {
        return {
            cover: {
                bgColor: "#fff",
                isCover: false,
            },
        };
    },
    methods: {
        colorClicked(color) {
            this.cover.bgColor = color;
            this.$emit("update-cover", this.cover);
        },
        coverStateClicked(isCover) {
            this.cover.isCover = isCover;
            this.$emit("update-cover", this.cover);
        },
    },
};
</script>

<style>
</style>