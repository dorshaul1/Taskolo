<template>
  <section class="activity flex column">

    <img
      class="task-prev-icon"
      src="@/assets/task-icon/bullet-list.png"
      alt=""
    />
    <div class="acitivty-title flex space-between align-center">
      <h3>Activity</h3>
      <button>Show Details</button>
    </div>
    <input type="text" placeholder="Wtire a comment..." />
  </section>
</template>

<script>
export default {
  name: "activity-preview",
};
</script>

<style>
</style>