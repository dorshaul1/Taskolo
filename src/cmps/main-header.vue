<template>
  <header class="app-header flex align-center space-between">
    <section class="app-header-container flex align-center ">
      <nav class="flex align-center">
        <button class="home-btn flex center" @click="$router.push('/')">
          <font-awesome-icon :icon="['fas', 'home']" />
        </button>
        <button class="boards-btn flex center" @click="$router.push('/board')">
          Boards
        </button>
      </nav>
      <section class="logo-container flex align-center" @click="$router.push('/')">
        <img src="../assets/logo/logo-img-white.png" alt="" />
        <img src="../assets/logo/logo-txt-white.png" alt="" />
      </section>
    </section>
    <img
      v-if="loggedinUser"
      @click="isProfileModalOpen = !isProfileModalOpen"
      class="member-avatar"
      :src="userImg"
      alt=""
    />
    <button @click="login" v-if="!isLoginUser" class="login-btn">Log in</button>
    <base-task-modal
      @close-modal="isProfileModalOpen = false"
      v-if="isProfileModalOpen"
      title="Account"
    >
      <!-- <members :members="this.currBoard.members" @add-member="addMember" /> -->
      <profile-modal />
    </base-task-modal>
  </header>
</template>

<script>
import baseTaskModal from "../cmps/base-task-modal";
import profileModal from "../cmps/profile-modal";
export default {
  name: "main-header",
  data() {
    return {
      isProfileModalOpen: false,
      // isLoginUser: ,
    };
  },
  computed: {
    loggedinUser() {
      return this.$store.getters.loggedinUser;
    },
    userImg() {
      console.log(
        "this.$store.getters.loggedinUser:",
        this.$store.getters.loggedinUser
      );
      if (!this.$store.getters.loggedinUser) return;
      return this.$store.getters.loggedinUser.imgUrl;
    },
    isLoginUser() {
      return this.$store.getters.loggedinUser ? true : false;
    },
  },
  methods: {
    login() {
      this.$router.push("/login");
    },
  },
  components: {
    baseTaskModal,
    profileModal,
  },
};
</script>

<style>
</style>