<template>
    <section class="checklist flex column">
        <div class="checklist-title flex space-between">
            <h3>Checklist</h3>
            <button>Delete</button>
        </div>
        <div class="checklist-bar"></div>

        <!-- CHANGE KEY TO ID  -->
        <div v-for="todo in checklist" :key="todo.id" class="todo-item flex">
            <input type="checkbox" :checked="todo.isDone" />
            <span
                :class="{ done: todo.isDone }"
                @change="toggleTodoState(todo.id)"
                >{{ todo.txt }}</span
            >
        </div>
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
import { utilService } from "@/services/util.service.js";
export default {
    props: {
        checklistProp: {},
    },
    data() {
        return {
            checklist: this.checklistProp || [],
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
                todoToAdd.id = utilService.makeId();
                this.checklist.push(todoToAdd);
                this.$emit("update-checklist", this.checklist);
                this.todo = { txt: "", isDone: false };
            }
        },
        toggleTodoState(todoId) {
            console.log("toggleTodoState");
            todoIdx = this.checklist.findIndex((todo) => todoId === todo.id);
            console.log("toggleTodoState", todoIdx);
            this.checklist[todoIdx].isDone = !this.checklist[todoIdx].isDone;
        },
    },
    created() {
        console.log("created checklist",this.checklist);
    },
};
</script>

<style>
</style>