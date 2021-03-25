<template>
  <section class="signup flex column">
    <img class="main-logo" src="../assets/logo/logo-full.png" alt="" />
    <main>
      <div class="sign-up-form">
        <h1>Sign up for your account</h1>
        <input
          type="email"
          class="email-input"
          outocorrect="off"
          spellcheck="false"
          outocompitalize="off"
          placeholder="Enter email"
          autocomplete="username email"
          v-model="credentials.email"
          @input="editMail"
        />
        <form v-if="isEnterMail" class="credentials-signup">
          <input
            type="text"
            class="username-input"
            placeholder="Enter full name"
            v-model="credentials.username"
          />
          <input
            type="password"
            class="password-input"
            placeholder="Create password"
            v-model="credentials.password"
          />
        </form>
        <button
          class="continue-btn"
          :class="{ 'continue-active': isValidMail }"
          @click="enterMail"
        >
          Continue
        </button>
        <div class="form-option" v-if="!isEditMail">
          <div class="login-method-seperator">OR</div>
          <div class="google-login flex center">Continue with Google</div>
          <hr />
          <span class="bottom-form-link">
            <a href=""> Already have an account? Log In </a>
          </span>
        </div>
      </div>
    </main>
  </section>
</template>

<script>
export default {
  data() {
    return {
      credentials: {
        email: "",
        username: "",
        password: "",
      },
      isEditMail: false,
      isValidMail: false,
      isEnterMail: false,
    };
  },
  methods: {
    editMail() {
      var re = /\S+@/;
      this.isEditMail = true;
      if (this.credentials.email === "") this.isEditMail = false;
      if (re.test(this.credentials.email)) this.isValidMail = true;
      else this.isValidMail = false;
      //   return re.test(email);
    },
    enterMail() {
      if (this.isValidMail) {
        this.isEnterMail = true;
        this.isEditMail = false;
      }
    },
  },
};
</script>

<style>
</style>