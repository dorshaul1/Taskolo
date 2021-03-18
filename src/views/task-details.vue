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
            console.log("member", member);
        },
    },
    computed: {
        task() {
            return this.$store.getters.currTask;
        },
        board() {
            return this.$store.getters.currBoard;
        },
        groupName() {
            return this.$store.getters.groupName;
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

    created() {
        console.log(board, "board in task details");
    },
};
</script>

<style>
</style>