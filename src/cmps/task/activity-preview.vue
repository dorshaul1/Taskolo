<template>
    <section class="activity flex column">
        <img class="activity-icon" src="@/assets/task-icon/list.svg" alt="" />
        <div class="acitivty-title flex space-between align-center">
            <h3>Activity</h3>
            <button @click="toggleShowDetails">Show Details</button>
        </div>
        <input type="text" placeholder="Wtire a comment..." />

        <div v-if="isShowDetailsOpen">
            <section
                class="activity-item flex flex-start"
                v-for="activity in activites"
                :key="activity.id"
            >
                <img class="profile" :src="activity.byMember.imgUrl" />
                <div class="activity-data">
                    <div>
                        <span>{{ activity.byMember.fullname }}</span
                        >{{ activity.txt }}
                    </div>
                    <a href="#">{{ formatDate(activity.createdAt) }}</a>
                </div>
            </section>
        </div>
    </section>
</template>

<script>
export default {
    name: "activity-preview",
    props: {
        activites: { type: Array }
    },
    data() {
        return {
            isShowDetailsOpen: true
        }
    },
    methods: {
        formatDate(data) {
            return this.$moment(data).format('lll')
        },
        toggleShowDetails() {
            this.isShowDetailsOpen = !this.isShowDetailsOpen
        }
    },
    created() {
        console.log('activity', this.activites)
    }
};
</script>

<style>
</style>