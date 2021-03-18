<template>
  <!-- <pre> -->
  <!-- {{this.board.activities}} -->
  <section class="activity-list">
    <ul class="clean-list">
      <li v-for="activity in this.board.activities" :key="activity.id">
        <div class="member"></div>
        {{ activity.byMember.username }}
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