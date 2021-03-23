<template>
  <div class="members-main-container flex column align-start">
    <!-- <img
      class="task-prev-icon"
      src="../../../../assets/task-icon/member.png"
      alt=""
    /> -->
    <h3>Members</h3>
    <div class="members-container flex">
      <div v-for="member in members" :key="member._id" class="member">
        <img class="member" :src="member.imgUrl" alt="-" />
      </div>
      <div class="member-plus-icon flex center">+</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    members: {},
  },
};
</script>

<style>
</style>