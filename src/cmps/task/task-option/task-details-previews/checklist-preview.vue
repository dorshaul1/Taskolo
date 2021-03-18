<template>
    <section class="checklist flex column">
        <div class="checklist-title flex space-between">
            <h3>Checklist</h3>
            <button>Delete</button>
        </div>
        <div class="checklist-bar"></div>
        <div class="checklist-button flex column align-start">
            <button v-if="!isAddItemClicked" @click="isAddItemClicked = true">
                Add an item
            </button>
            <textarea
                v-if="isAddItemClicked"
                placeholder="Add more details description..."
                rows="6"
            ></textarea>
            <div class="checklist-actions flex space-between">
                <div class="add-delete flex">
                    <button>Add</button>
                    <button>X</button>
                </div>

                <div class="text-actions flex">
                    <button>Mention</button>
                    <button>Emoji</button>
                    <button>Assign</button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            isAddItemClicked: false,
        };
    },
};
</script>

<style>
</style>