<template>
  <section class="profile-modal flex">
    <div class="member-avatar-container">
      <img class="member-avatar" :src="user.imgUrl" alt="" />
    </div>
    <div class="account-data">
      <h1>{{ user.username }}</h1>
      <h4>{{ user.fullname }}</h4>
      <h4>{{ user.email }}</h4>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.getters.loggedinUser;
    },
  },
};
</script>

<style>
</style>