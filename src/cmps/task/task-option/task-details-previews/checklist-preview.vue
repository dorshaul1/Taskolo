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
            <input
                type="text"
                v-if="isAddItemClicked"
                placeholder="Add an item"
                v-model="todo.txt"
            />
            <div
                v-if="isAddItemClicked"
                class="checklist-actions flex space-between"
            >
                <div class="add-delete flex">
                    <button @click="addToChecklist">Add</button>
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
            checklist: [],
            todo: {
                txt: "",
                isDone: false,
            },
            isAddItemClicked: false,
        };
    },
    methods: {
        addToChecklist() {
            if (this.todo.txt) {
                const todoToAdd = { ...this.todo };
                this.checklist.push(todoToAdd);
                this.todo = { txt: "", isDone: false };
                console.log(this.checklist)
            }
        },
    },
};
</script>

<style>
</style>