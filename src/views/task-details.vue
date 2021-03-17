<template>
    <section class="task-details-container">
        <div class="cover">
            <a class="change-cover" href="#">Cover</a>
            <a class="close-modal-btn" href="#">X</a>
        </div>

        <div class="title flex align-start column">
            <h1>Finish Tech Design</h1>
            <h4>in list To Do</h4>
        </div>

        <div class="task-details-grid">
            <section class="left-column">
                <section class="members-labels flex column">
                    <h4>Members</h4>
                    <div class="members-container flex">
                        <div class="member"></div>
                        <div class="member"></div>
                        <div class="member"></div>
                    </div>

                    <h4>Labels</h4>
                    <div class="labels-container flex">
                        <div class="label"></div>
                        <div class="label"></div>
                        <div class="label"></div>
                    </div>
                </section>

                <section class="description flex start column">
                    <div class="title-container flex align-center">
                        <h4>Description</h4>
                        <button>Edit</button>
                    </div>
                    <textarea placeholder="Add more details description..." rows="6"></textarea>
                    <div class="desc-input-buttons flex align-center">
                        <button>Save</button>
                        <button>X</button>
                    </div>
                </section>

                <section class="activity flex column">
                    <div class="acitivty-title flex space-between align-center">
                        <h4>Activity</h4>
                        <button>Show Details</button>
                    </div>
                    <input type="text" placeholder="Wtire a comment..." />
                </section>
            </section>

            <section class="right-column">
                <h3>Add to card</h3>
                <a class="link-button" href="#" title="Members">
                    <span>Members</span>
                </a>
                <a class="link-button" href="#" title="Members">
                    <span>Labels</span>
                </a>
                <a class="link-button" href="#" title="Members">
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
};
</script>

<style>
</style>