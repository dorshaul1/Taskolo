<template>
  <section class="due-date-preview flex column align-start">
    <img
      class="task-prev-icon"
    <!-- <img src="@/assets/task-icon/trello-icon-pack/clock.svg" alt="" /> -->

    <div
      v-if="date.start"
      class="date-preview-range flex align-start"
      @click="openDueDateModal"
    >
      <div class="start-date flex column align-start">
        <h3>Start Date</h3>
        <!-- {{ dateToShow.start | moment("dddd, MMMM Do YYYY, h:mm a") }} -->
        <span class="date">
          {{ dateToShow.start | moment("MMM Do h:mm A") }}
          <!-- <font-awesome-icon class="icon" :icon="['fas', 'chevron-down']" /> -->
        </span>
      </div>
      <div class="end-date flex column align-start">
        <h3>Due Date</h3>
        <span class="date">
          {{ dateToShow.end | moment("MMM Do h:mm A") }}
          <!-- <font-awesome-icon class="icon" :icon="['fas', 'chevron-down']" /> -->
        </span>
        <!-- {{ dateToShow.end | moment("dddd, MMMM Do YYYY, h:mm a") }} -->
      </div>
    </div>
    <div
      v-else
      class="date-preview flex column align-start"
      @click="openDueDateModal"
    >
      <h3>Due Date</h3>
      <span class="date">
        {{ dateToShow | moment("MMM Do h:mm A") }}
        <!-- <font-awesome-icon class="icon" :icon="['fas', 'chevron-down']" /> -->
      </span>
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