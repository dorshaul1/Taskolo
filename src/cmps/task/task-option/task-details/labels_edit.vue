<template>
    <section class="edit-label-container">
        <input type="text" placeholder="Name..." v-model="label.title" />
        <div class="label-edit-color-container">
            <div
                v-for="label in labels"
                :key="label.id"
                @click="setCurrColor(label.color)"
                class="label-edit-item"
                :style="{ backgroundColor: label.color }"
            >
                <a href="#" v-show="isCurrColor(label.color)"
                    ><i class="el-icon-check"></i
                ></a>
            </div>
        </div>
        <div class="label-edit-btns flex space-between">
            <button @click="saveLabel">Save</button>
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
    data() {
        return {
            label: null,
        };
    },
    methods: {
        isCurrColor(color) {
            return color === this.label.color;
        },
        saveLabel() {
            this.$emit("save-label", this.label);
        },
        setCurrColor(color) {
            console.log("setting color...", color);
            this.label.color = color;
        },
    },
    created() {
        console.log("labelToEdit inside labels_edit", this.labelToEdit);
        this.label = { ...this.labelToEdit };
    },
};
</script>

<style>
</style>