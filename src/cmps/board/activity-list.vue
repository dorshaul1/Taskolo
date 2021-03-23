<template>
  <!-- <pre> -->
  <!-- {{this.board.activities}} -->
  <section class="activity-list-container">
    <ul class="clean-list activity-list flex column">
      <li v-for="activity in this.board.activities" :key="activity.id" class="flex">
        <div class="member"></div>
        <h1>{{ activity.byMember.username }}</h1>
        {{ activity.txt }}
      </li>
    </ul>
  </section>
  <!-- </pre> -->
</template>

<script>
export default {
  props: {
    board: {
      type: Object,
    },
  },
  name: "activity-list",
  //   created() {
  //     console.log(this.board);
  //   },
};
</script>

<style>
</style>