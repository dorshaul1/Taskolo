<template>
  <section class="signup flex column">
    <img class="main-logo" src="../assets/logo/logo-full.png" alt="" />
    <main>
      <div class="sign-up-form">
        <h1>Log in your account</h1>

        <div class="credentials-signup">
          <input
            type="text"
            class="username-input"
            placeholder="Username"
            v-model="credentials.username"
            @input="checkCredentials"
          />
          <input
            type="password"
            class="password-input"
            placeholder="Password"
            v-model="credentials.password"
            @input="checkCredentials"
          />
          <h4 v-if="!validUser">Username or password is incorrect</h4>
          <button
            class="continue-btn"
            :class="{ 'continue-active': isFullnameOrPassword }"
            @click="login"
          >
            Login
          </button>
        </div>
        <div class="login-method-seperator">OR</div>
        <div class="google-login flex center">Continue with Google</div>
        <hr />
        <span class="bottom-form-link">
          <router-link to="/signup">
            Dont have an account? Sign up
          </router-link>
        </span>
      </div>
    </main>
  </section>
</template>

<script>
export default {
  data() {
    return {
      credentials: {
        username: "",
        password: "",
      },
      isFullnameOrPassword: false,
      validUser: true,
    };
  },
  methods: {
    checkCredentials() {
      // var re = /\S+@/;
      // this.isEditMail = true;
      if (this.credentials.username === "" || this.credentials.password === "")
        this.isFullnameOrPassword = false;
      else this.isFullnameOrPassword = true;
      //   return re.test(email);
    },
    async login() {
      try {
        const user = this.$clone(Object.create(this.credentials));
        const loginUser = await this.$store.dispatch({
          type: "login",
          userCred: user,
        });
        if (loginUser) {
          this.$router.push("/board");
        }
      } catch (error) {
        console.log("user or password  dont correct:", error);
        this.validUser = false;
      }
    },
  },
};
</script>

<style>
</style>