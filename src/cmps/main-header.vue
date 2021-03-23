<template>
  <header class="app-header flex align-center space-between">
    <section class="app-header-container flex align-center space-between">
      <nav class="flex align-center">
        <button class="home-btn flex center" @click="$router.push('/')">
          <font-awesome-icon :icon="['fas', 'home']" />
        </button>
        <button class="boards-btn flex center" @click="$router.push('/board')">
          Boards
        </button>
        <!-- <router-link to="/">Home</router-link> | -->
        <!-- <router-link to="/board">Board</router-link> | -->
      </nav>
      <section class="logo flex align-center" @click="$router.push('/')">
        <img src="../assets/logo/logo-txt-white.png" alt="" />
        <!-- <img src="../assets/logo/logo-full.png" alt=""> -->
      </section>
    </section>
    <section class="profile-details">
      <!-- <div class="member-avatar"> -->
      <img
        class="member-avatar"
        src="https://randomuser.me/api/portraits/thumb/men/75.jpg"
        alt=""
      />
      <!-- </div> -->
    </section>
  </header>
</template>

<script>
export default {
  name: "main-header",
};
</script>

<style>
</style>