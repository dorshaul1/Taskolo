<template>
    <section class="members-modal">
        <input type="text" placeholder="Search members..." />
        <div
            v-for="member in members"
            :key="member._id"
            @click="addMember(member)"
            class="member-container flex align-center space-between"
        >
            <div class="member-data flex align-center">
                <!-- <div class="member-icon"> -->
                <img class="member" :src="member.imgUrl" alt="-" />
                <!-- </div> -->
                <h3>{{ member.fullname }}</h3>
            </div>
            <a v-show="isAlreadyTaskMember(member._id)" href="#"
                ><i class="el-icon-check"></i>
            </a>
        </div>
        <div>
            <a href="#" class="other-members-btn">Show other team members</a>
        </div>
    </section>
</template>

<script>
export default {
    name: "members",
    props: {
        members: {},
        taskMembers: {},
    },
    methods: {
        addMember(member) {
            this.$emit("add-member", member);
        },
        isAlreadyTaskMember(memberId) {
            let isInTask = false;
            if (this.taskMembers) {
                this.taskMembers.forEach((member) => {
                    if (member._id === memberId) isInTask = true;
                });
            }
            return isInTask;
        },
    },
    computed: {},
};
</script>

<style>
</style>