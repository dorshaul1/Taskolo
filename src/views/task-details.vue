<template>
    <section v-if="task" class="task-details-container">
        <div class="cover">
            <a class="change-cover" href="#">Cover</a>
            <a class="close-modal-btn" href="#">X</a>
        </div>

        <div class="title flex align-start column">
            <h1>{{ task.title }}</h1>

            <!-- <h4 v-if="boardName">in list {{boardName}}</h4> -->
        </div>

        <div class="task-details-grid">
            <section class="left-column">
                <members-preview v-if="isMembersOpen" />

                <labels-preview v-if="isLabelsOpen" />
                <description-preview />
                <checklist-preview v-if="isChecklistOpen" />
                <activity-preview />
            </section>

            <section class="right-column">
                <h3>Add to card</h3>

                <a
                    class="link-button"
                    href="#"
                    title="Members"
                    @click="toggleSection('Members')"
                >
                    <span>Members</span>
                </a>
                <base-task-modal v-if="isMembersOpen" title="Members">
                    <members :members="board.members" @add-member="addMember" />
                </base-task-modal>

                <a
                    class="link-button"
                    href="#"
                    title="Members"
                    @click="toggleSection('Labels')"
                >
                    <span>Labels</span>
                </a>
                <a
                    class="link-button"
                    href="#"
                    title="Members"
                    @click="toggleSection('Checklist')"
                >
                    <span>Checklist</span>
                </a>
                <a class="link-button" href="#" title="Members">
                    <span>Due Date</span>
                </a>
                <a class="link-button" href="#" title="Members">
                    <span>Attachment</span>
                </a>
            </section>
        </div>
    </section>
</template>

<script>
import membersPreview from "../cmps/task/task-option/task-details-previews/members-preview";
import labelsPreview from "../cmps/task/task-option/task-details-previews/labels-preview";
import descriptionPreview from "../cmps/task/task-option/task-details-previews/description-preview";
import checklistPreview from "../cmps/task/task-option/task-details-previews/checklist-preview";
import baseTaskModal from "../cmps/base-task-modal";
import activityPreview from "../cmps/task/activity-preview";

import members from "../cmps/task/task-option/task-details/members";
import { board } from "../data/board";
export default {
    name: "task-details",
    data() {
        return {
            isMembersOpen: false,
            isLabelsOpen: false,
            isChecklistOpen: false,
        };
    },
    methods: {
        toggleSection(sectionName) {
            switch (sectionName) {
                case "Members":
                    this.isMembersOpen = !this.isMembersOpen;
                    break;
                case "Labels":
                    this.isLabelsOpen = !this.isLabelsOpen;
                    break;
                case "Checklist":
                    this.isChecklistOpen = !this.isChecklistOpen;
                    break;
                default:
                    break;
            }
        },
        addMember(member) {
            try {
                const clone = require("rfdc");
                const boardCopy = clone({ proto: true })(
                    Object.create(this.board)
                );

                console.log(this.group, this.task)

                let currTaskIdx;
                const currGroupIdx = boardCopy.groups.findIndex((group) => {
                    if (group.id === this.group.id) {
                        currTaskIdx = group.tasks.findIndex((task) => {
                            return task.id === this.task.id;
                        });
                        return true;
                    }
                });
                const currTask =  boardCopy.groups[currGroupIdx].tasks[currTaskIdx]


                if (!currTask.members) currTask.members = [];
                currTask.members.push(member);
                boardCopy.groups[currGroupIdx].tasks[currTaskIdx] = currTask;

                this.$store.dispatch({ type: "updateBoard", board: boardCopy });
            } catch (err) {
                console.log(err);
            }
        },
    },
    computed: {
        task() {
            return this.$store.getters.currTask;
        },
        group() {
            return this.$store.getters.currGroup;
        },
        board() {
            return this.$store.getters.currBoard;
        },
        groupName() {
            return this.$store.getters.groupName;
        },
        taskId() {
            return this.$route.params.taskId;
        },
    },
    components: {
        membersPreview,
        labelsPreview,
        activityPreview,
        descriptionPreview,
        checklistPreview,
        baseTaskModal,
        members,
    },
    watch: {
        taskId: {
            handler() {
                this.$store.commit({
                    type: "setTaskById",
                    taskId: this.taskId,
                });
            },
            immediate: true,
        },
    },

    created() {
        // console.log(board, "board in task details");
        // console.log(this.taskId, "taskId in created task details");
        //1. taskID from route
        //2. commit setTaskById (mutation) find task in group
    },
};
</script>

<style>
</style>