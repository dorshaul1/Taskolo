<template>
    <section class="activity flex column">
        <img src="@/assets/task-icon/list.svg" alt="" />
        <div class="acitivty-title flex space-between align-center">
            <h3>Activity</h3>
            <button>Show Details</button>
        </div>
        <input type="text" placeholder="Wtire a comment..." />

        <section class="activity-item flex flex-start" v-for="activity in activites" :key="activity.id">
            <img class="profile" :src="activity.byMember.imgUrl"/>
            <div class="activity-data">
                <div><span>{{activity.byMember.fullname}}</span>{{activity.txt}}</div>
                <a href="#">{{formatDate(activity.createdAt)}}</a>
            </div>
        </section>
    </section>
</template>

<script>
export default {
    name: "activity-preview",
    props: {
        activites: { type: Array }
    },
    methods: {
      formatDate(data) {
        return this.$moment(data).format('lll')
      }
    },
    created() {
      console.log('activity', this.activites)
    }
};
</script>

<style>
</style>