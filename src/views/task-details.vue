<template>
    <section v-if="task" class="task-details-container">
        <div class="cover">
            <a class="change-cover" href="#">Cover</a>
            <a class="close-modal-btn" href="#">X</a>
        </div>

        <div class="title flex align-start column">
            <h1>{{task.title}}</h1>
            <h4>in list To Do</h4>
        </div>

        <div class="task-details-grid">
            <section class="left-column">
                <div
                    v-if="isMembersOpen"
                    class="members-main-container flex column align-start"
                >
                    <h3>Members</h3>
                    <div class="members-container flex">
                        <div class="member"></div>
                        <div class="member"></div>
                        <div class="member"></div>
                        <div class="member-plus-icon">+</div>
                    </div>
                </div>

                <div
                    v-if="isLabelsOpen"
                    class="labels-main-contaier flex column align-start"
                >
                    <h3>Labels</h3>
                    <div class="labels-container flex">
                        <div class="label"></div>
                        <div class="label"></div>
                        <div class="label"></div>
                    </div>
                </div>

                <section class="description flex start column">
                    <div class="title-container flex align-center">
                        <h3>Description</h3>
                        <button>Edit</button>
                    </div>
                    <textarea
                        placeholder="Add more details description..."
                        rows="6"
                    ></textarea>
                    <div class="desc-input-buttons flex align-center">
                        <button>Save</button>
                        <button>X</button>
                    </div>
                </section>

                <section class="activity flex column">
                    <div class="acitivty-title flex space-between align-center">
                        <h3>Activity</h3>
                        <button>Show Details</button>
                    </div>
                    <input type="text" placeholder="Wtire a comment..." />
                </section>

                <section v-if="isChecklistOpen" class="checklist flex column">
                    <div class="checklist-title flex space-between">
                        <h3>Checklist</h3>
                        <button>Delete</button>
                    </div>
                    <div class="checklist-bar"></div>
                    <div class="checklist-button flex column align-start">
                        <button
                            v-if="!isAddItemClicked"
                            @click="isAddItemClicked = true"
                        >
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
export default {
    name: "task-details",
    data() {
        return {
            isMembersOpen: false,
            isLabelsOpen: false,
            isChecklistOpen: false,
            isAddItemClicked: false,
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
    },
    computed: {
        task() {
            return this.$store.getters.currTask
        },
        boardName() {
            return this.$store.getters.boardName
        }
    },
    created() {
    }
};
</script>

<style>
</style>