<template>
  <section class="dueDate-modal flex column align-center">
    <v-date-picker v-if="!isRangeDates" v-model="date" mode="dateTime" />
    <v-date-picker v-else v-model="range" is-range mode="dateTime" />
    <div class="date-options flex column">
      <button class="due-date-range-btn" @click="isRangeDates = !isRangeDates">
        Range Dates
      </button>
      <button @click="removeDate">Remove</button>
      <button class="due-date-save-btn" @click="saveDate">Save</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "due-date",
  data() {
    return {
      isRangeDates: false,
      date: new Date(),
      range: {
        start: new Date(2020, 0, 1),
        end: new Date(2020, 0, 5),
      },
    };
  },
  methods: {
    saveDate(){
      const date = this.isRangeDates ? this.range : this.date
      this.$emit('setDate', date)
    },
    removeDate(){

    }
  },
};
</script>

<style>
</style>