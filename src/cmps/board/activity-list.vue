<template>
  <!-- <pre> -->
  <!-- {{this.board.activities}} -->
  <section class="activity">
    <ul class="clean-list activity-list flex column">
      <li v-for="activity in this.board.activities" :key="activity.id" class="flex">
        <!-- <div class="member"></div> -->

        <!-- <img :src="userImg(activity)" alt="">
        <h1>{{ activity.byMember.username }}</h1>
        {{ activity.txt }} -->
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
  computed:{
    userImg(activity){
      return activity.byMember.imgUrl
    }
  }
  //   created() {
  //     console.log(this.board);
  //   },
};
</script>

<style>
</style>