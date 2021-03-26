<template>
    <section class="activity flex column">
        <img src="@/assets/task-icon/list.svg" alt="" />
        <div class="acitivty-title flex space-between align-center">
            <h3>Activity</h3>
            <button>Show Details</button>
        </div>
        <input type="text" placeholder="Wtire a comment..." />

        <section class="activity flex">
            <div class="profile"></div>
            <div class="activity-data">
                <div><span></span></div>
                <a href="#"></a>
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
    created() {
      console.log('activity', this.activites)
    }
};
</script>

<style>
</style>