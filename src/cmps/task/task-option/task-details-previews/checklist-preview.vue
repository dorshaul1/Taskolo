<template>
    <section class="checklist flex column">
            <img src="../../../../assets/task-icon/check-box.svg" alt="" />
        <div class="checklist-title flex space-between">
            <h3>{{ checklist.title }}</h3>
            <button @click="toggleDeleteConfrimation">Delete</button>
            <base-task-modal
                title="Delete checklist?"
                v-if="isDeleteConfirmOpen"
            >
                <checklist-delete-confirm @delete-checklist="deleteChecklist" />
            </base-task-modal>
        </div>
        <div class="checklist-bar-container flex align-center">
            <div class="status-txt">{{ percentagesToDisplay }}</div>
            <checklist-bar :percentages="percentages" />
        </div>

        <div
            v-for="todo in checklist.todos"
            :key="todo.id"
            class="todo-item flex"
        >
            <input
                type="checkbox"
                :checked="todo.isDone"
                @change="toggleTodoState(todo.id)"
            />
            <span
                v-if="!isEdit"
                :class="{ done: todo.isDone }"
                @click="selectEditItem"
                >{{ todo.txt }}</span
            >
            <input v-else type="text" v-model="todo.txt" ref="todoItem" />
        </div>

        <div class="checklist-button flex column align-start">
            <button v-if="!isAddItemClicked && !isEdit" @click="addItemClicked">
                Add an item
            </button>
            <input
                type="text"
                v-if="isAddItemClicked"
                placeholder="Add an item"
                v-model="todo.txt"
                ref="addItem"
            />
            <div
                v-if="isAddItemClicked || isEdit"
                class="checklist-actions flex space-between"
            >
                <div class="add-delete flex">
                    <button v-if="!isEdit" @click="addToChecklist">Add</button>
                    <button v-else @click="editItem">Save</button>
                    <button @click="closeAddItemClicked">X</button>
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
import checklistDeleteConfirm from "../task-details/checklist-delete-confirm";
import baseTaskModal from "../../../base-task-modal";
import checklistBar from "../../../checklist-bar";
import { boardService } from "@/services/board.service.js";
export default {
    props: {
        checklistProp: {},
    },
    data() {
        return {
            // checklist: { ...this.checklistProp },
            checklist: null,
            todo: boardService.getEmptyTodo(),
            isAddItemClicked: false,
            isDeleteConfirmOpen: false,
            isEdit: false,
        };
    },
    methods: {
        addToChecklist() {
            if (this.todo.txt) {
                const todoToAdd = { ...this.todo };
                this.checklist.todos.push(todoToAdd);
                this.$emit("update-checklist", this.checklist);
                this.todo = boardService.getEmptyTodo();
                this.focusAddItemInput();
            }
        },
        toggleTodoState(todoId) {
            console.log("toggeling...", todoId, this.checklist);
            const todoIdx = this.checklist.todos.findIndex(
                (todo) => todoId === todo.id
            );
            console.log("toggeling...todoIdx", todoIdx);
            this.checklist.todos[todoIdx].isDone = !this.checklist.todos[
                todoIdx
            ].isDone;
            this.$emit("update-checklist", this.checklist);
        },
        deleteChecklist() {
            this.toggleDeleteConfrimation();
            this.$emit("delete-checklist", this.checklist.id);
        },
        toggleDeleteConfrimation() {
            this.isDeleteConfirmOpen = !this.isDeleteConfirmOpen;
        },
        closeAddItemClicked() {
            this.isAddItemClicked = false;
        },
        addItemClicked() {
            this.isAddItemClicked = true;
            this.focusAddItemInput();
        },
        selectEditItem() {
            this.isEdit = true;
            this.$nextTick(() => {
                console.log(this.$refs.todoItem[1]);
                this.$refs.todoItem[0].select();
            });
        },
        editItem() {
            console.log('savingg///')
        },
        focusAddItemInput() {
            this.$nextTick(() => {
                this.$refs.addItem.focus();
            });
        },
    },
    computed: {
        percentages() {
            if (!this.checklist.todos.length) return 0;
            const unCompleted = this.checklist.todos.reduce((sum, todo) => {
                if (todo.isDone) sum += 1;
                return sum;
            }, 0);
            return ((unCompleted / this.checklist.todos.length) * 100).toFixed(
                2
            );
        },
        percentagesToDisplay() {
            return Math.floor(this.percentages) + "%";
        },
    },
    created() {
        const clone = require("rfdc");
        (this.checklist = clone({ proto: true })(
            Object.create(this.checklistProp)
        )),
            console.log("checklist", this.checklist);
    },
    components: {
        checklistDeleteConfirm,
        baseTaskModal,
        checklistBar,
    },
};
</script>

<style>
</style>