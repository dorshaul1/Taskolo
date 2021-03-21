<template>
    <section class="task-labels">
        <input type="text" />
        <h3>Labels</h3>
        <div v-for="label in labelsFromProp" :key="label.id" class="flex" @click="addLabel(label)">
            <span class="label" :style="{ backgroundColor: label.color }">{{
                label.title
            }}</span>
            <span @click="openLabelsEdit(label)">Edit</span>
        </div>

        <button>Create a new label</button>
        <!-- 
        <section v-if="labelToEdit" class="edit-label-container">
            <div
                v-for="label in labels"
                :key="label.id"
                class="label-edit-item"
                :style="{ backgroundColor: label.color }"
            ></div>
            <div class="label-edit-btns flex space-between">
                <button>Save</button>
                <button>Delete</button>
            </div>
        </section> -->
    </section>
</template>

<script>
export default {
    name: "labels",
    props: {
        labels: {},
        editedLabel: {},
        // labelToEdit: null,
    },
    methods: {
        openLabelsEdit(label) {
            // console.log(label, this.labels)
            // this.labelToEdit = {...label};
            this.$emit("open-label-edit", label);
        },
        setEditedLabel() {
            if (!this.editedLabel) return;
            const labelIdx = this.labelsFromProp.findIndex((label) => {
                return label.id === this.editedLabel.id;
            });
            this.labelsFromProp.splice(labelIdx, 1, this.editedLabel);
        },
        addLabel(label) {
          console.log('adding label...', label)
          this.$emit('add-label', label)
        }
    },
    created() {
        this.labelsFromProp = JSON.parse(JSON.stringify(this.labels));
        this.setEditedLabel();
    },
};
</script>

<style>
</style>