<template>
  <section class="due-date-preview flex column align-start">
    <img
      class="task-prev-icon"
      src="../../../../assets/task-icon/wall-clock.svg"
      alt=""
    />

    <div
      v-if="date.start"
      class="date-preview-range flex align-start"
      @click="openDueDateModal"
    >
      <div class="start-date flex column align-start">
        <h3>start Date</h3>
        {{ dateToShow.start | moment("dddd, MMMM Do YYYY, h:mm a") }}
      </div>
      <div class="end-date flex column align-start">
        <h3>Due Date</h3>
        {{ dateToShow.end | moment("dddd, MMMM Do YYYY, h:mm a") }}
      </div>
    </div>
    <div
      v-else
      class="date-preview flex column align-start"
      @click="openDueDateModal"
    >
      <h3>Due Date</h3>
      {{ dateToShow | moment("dddd, MMMM Do YYYY, h:mm a") }}
    </div>
  </section>
</template>

<script>
export default {
  name: "due-date-preview",
  props: {
    date: {},
  },
  computed: {
    dateToShow() {
      console.log("this.date:", this.date);
      return this.date;
    },
    // checkIfRange() {
    //   console.log(' typeof this.date:',  typeof this.date)
    //   return typeof this.date === String;
    // },
  },
  methods: {
    openDueDateModal() {
      this.$emit("setDate");
    },
    // checkIfRange() {
    //   const type = typeof this.date;
    //   console.log("type:", type);
    //   //   return typeof this.date === String;
    // },
  },
};
</script>

<style>
</style>