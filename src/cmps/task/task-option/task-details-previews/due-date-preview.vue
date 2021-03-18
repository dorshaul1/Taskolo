<template>
  <section class="due-date-preview flex column align-start">
    <h3>Due Date</h3>
    <div class="date-preview" @click="openDueDateModal">
      {{ dateToShow | moment("dddd, MMMM Do YYYY, h:mm a") }}
    </div>
    <!-- <div v-else class="date-preview" @click="openDueDateModal">rrr</div> -->
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
  },
  methods: {
    openDueDateModal() {
      this.$emit("setDate");
    },
    checkIfRange() {
      const type = typeof this.date;
      console.log("type:", type);
    //   return typeof this.date === String;
    },
  },
};
</script>

<style>
</style>