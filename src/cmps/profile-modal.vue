<template>
  <section class="profile-modal flex">
    <div class="member-avatar-container flex column">
      <img class="member-avatar" :src="user.imgUrl" alt="" />
    </div>
    <div class="account-data">
      <h1>{{ user.username }}</h1>
      <h4>{{ user.fullname }}</h4>
      <h4>{{ user.email }}</h4>
    </div>
    <a @click="logout" class="logput-btn">Log out</a>
  </section>
</template>

<script>
// import { userService } from "../services/user.service";

export default {
  computed: {
    user() {
      return this.$store.getters.loggedinUser;
    },
  },
  methods: {
    async logout() {
        await this.$store.dispatch({
          type: "logout",
        });      // userService.logout();
      this.$router.push("/");

      // this.$forceUpdate(); // Notice we have to use a $ here
    },
  },
};
</script>

<style>
</style>