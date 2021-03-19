<template>
    <section v-if="task" class="task-details-container">
        <div class="cover">
            <a class="change-cover" href="#">Cover</a>
            <router-link class="close-modal-btn" :to="`/board/${board._id}`"
                >X</router-link
            >
        </div>

        <div class="title flex align-start column">
            <h1>{{ task.title }}</h1>

            <!-- <h4 v-if="boardName">in list {{boardName}}</h4> -->
        </div>

        <div class="task-details-grid">
            <section class="left-column">
                <members-preview
                    v-if="task.members && task.members"
                    :members="task.members"
                />
                <labels-preview v-if="isLabelsOpen" />
                <description-preview />
                <checklist-preview
                    v-for="checklist in task.checklists"
                    :key="checklist.id"
                    @update-checklist="updateChecklist"
                    @delete-checklist="deleteChecklist"
                    :checklistProp="checklist"
                />

                <due-date-preview
                    v-if="task.dueDate"
                    :date="task.dueDate"
                    @setDate="toggleSection('DueDate')"
                />
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
                    <members
                        :members="board.members"
                        :taskMembers="task.members"
                        @add-member="addMember"
                    />
                </base-task-modal>

                <a
                    class="link-button"
                    href="#"
                    title="Labels"
                    @click="toggleSection('Labels')"
                >
                    <span>Labels</span>
                </a>
                <a
                    class="link-button"
                    href="#"
                    title="Checklist"
                    @click="toggleSection('Checklist')"
                >
                    <span>Checklist</span>
                </a>

                <base-task-modal v-if="isChecklistOpen" title="Checklist">
                    <checklist @add-checklist-title="addToChecklist" />
                </base-task-modal>
                <a
                    class="link-button"
                    href="#"
                    title="Due Date"
                    @click="toggleSection('DueDate')"
                >
                    <span>Due Date</span>
                </a>
                <base-task-modal v-if="isDueDateOpen" title="Due Date">
                    <due-date @setDate="setDate" />
                </base-task-modal>
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
import dueDatePreview from "../cmps/task/task-option/task-details-previews/due-date-preview";

import members from "../cmps/task/task-option/task-details/members";
import dueDate from "../cmps/task/task-option/task-details/due-date";
import checklist from "../cmps/task/task-option/task-details/checklist";

import { utilService } from "../services/util.service.js";
import { boardService } from "../services/board.service.js";

// import { board } from "../data/board";
export default {
    name: "task-details",
    data() {
        return {
            isMembersOpen: false,
            isLabelsOpen: false,
            isChecklistOpen: false,
            isDueDateOpen: false,
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
                case "DueDate":
                    this.isDueDateOpen = !this.isDueDateOpen;
                    break;
                default:
                    break;
            }
        },
        setDate(date) {
            try {
                const clone = require("rfdc");
                const taskCopy = clone({ proto: true })(
                    Object.create(this.task)
                );
                taskCopy.dueDate = date;
                this.toggleSection("DueDate");
                this.$store.dispatch({ type: "updateTask", task: taskCopy });
                console.log("date:", date);
            } catch (error) {
                console.log(err);
            }
        },
        addMember(member) {
            try {
                // task clone
                const clone = require("rfdc");
                const taskCopy = clone({ proto: true })(
                    Object.create(this.task)
                );

                // const taskCopy = this.$clone({ proto: true })(
                //     Object.create(this.task)
                // );

                //toggle members
                let taskMembers = taskCopy.members;
                if (!taskMembers) taskMembers = [];
                const isTaskMember = taskMembers.some(
                    (taskMember) => taskMember._id === member._id
                );

                console.log("isTaskMember", isTaskMember);

                if (!isTaskMember) {
                    console.log("pushing...");
                    taskMembers.push(member);
                } else {
                    console.log("deleteing......");
                    const memberIdx = taskMembers.findIndex((m) => {
                        m._id = member._id;
                    });
                    taskMembers.splice(memberIdx, 1);
                }

                taskCopy.members = taskMembers;

                // change values
                this.$store.dispatch({ type: "updateTask", task: taskCopy });
            } catch (err) {
                console.log(err);
            }
        },

        updateChecklist(checklist) {
            const clone = require("rfdc");
            const taskCopy = clone({ proto: true })(Object.create(this.task));
            checklist = clone({ proto: true })(Object.create(checklist));
            // if (!taskCopy.checklists) taskCopy.checklists = [];
            // if (!checklist.id) checklist.id = utilService.makeId();
            const isChecklistExist = taskCopy.checklists.some(
                (cl) => cl.id === checklist.id
            );
            console.log("isChecklistExist", isChecklistExist);
            if (!isChecklistExist) taskCopy.checklists.push(checklist);
            else {
                const checklistIdx = taskCopy.checklists.findIndex((cl) => {
                    console.log("findIndx:", cl.id, checklist.id);
                    return cl.id === checklist.id;
                });

                // taskCopy.checklists[checklistIdx].todos = checklist.todos;
                taskCopy.checklists.splice(checklistIdx, 1, checklist);
            }
            this.$store.dispatch({ type: "updateTask", task: taskCopy });
        },

        addToChecklist(title) {
            const clone = require("rfdc");
            const taskCopy = clone({ proto: true })(Object.create(this.task));
            if (!taskCopy.checklists) {
                taskCopy.checklists = [];
            }
            const checklist = boardService.getEmptyCheckList();
            console.log("getEmptyCheckList", boardService.getEmptyCheckList());
            checklist.title = title;
            taskCopy.checklists.push(checklist);
            this.$store.dispatch({ type: "updateTask", task: taskCopy });
        },
        deleteChecklist(checklistId) {
            const clone = require("rfdc");
            const taskCopy = clone({ proto: true })(Object.create(this.task));
            const checklistIdx = taskCopy.checklists.findIndex(
                (checklist) => checklist.id === checklistId
            );
            console.log(checklistIdx, "idx");
            taskCopy.checklists.splice(checklistIdx, 1);
            this.$store.dispatch({ type: "updateTask", task: taskCopy });
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
        dueDate,
        dueDatePreview,
        checklist,
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
        // console.log("task", this.task);
        // console.log(board, "board in task details");
        // console.log(this.taskId, "taskId in created task details");
        //1. taskID from route
        //2. commit setTaskById (mutation) find task in group
    },
};
</script>

<style>
</style>