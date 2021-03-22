<template>
    <section class="members-modal">
        <input type="text" placeholder="Search user..." />
        <div
            v-for="user in users[0]"
            :key="user._id"
            @click="addUser(user)"
            class="member-container flex align-center space-between"
        >
            <div class="member-data flex align-center space-between">
                <!-- <div class="user-icon"> -->
                <img class="member" :src="user.imgUrl" alt="-" />
                <!-- </div> -->
                <h3>{{ user.fullname }}</h3>
            </div>
            <a v-show="isAlreadyTaskUser(user._id)" href="#"
                ><i class="el-icon-check"></i>
            </a>
        </div>
        <div>
            <a href="#" class="other-members-btn">Show other team users</a>
        </div>
    </section>
</template>

<script>
export default {
    name: "users",
    props: {
        users: {},
        taskUsers: {},
    },
    methods: {
        addUser(user) {
            this.$emit("add-user", user);
        },
        isAlreadyTaskUser(userId) {
            let isInTask = false;
            if (this.taskUsers) {
                this.taskUsers.forEach((user) => {
                    if (user._id === userId) isInTask = true;
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