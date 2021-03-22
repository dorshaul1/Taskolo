<template>
  <section class="members-modal">
    <input type="text" placeholder="Search user..." />
    <div
      v-for="user in users[0]"
      :key="user._id"
      @click="addUser(user)"
      class="user-container flex align-center space-between"
    >
      <div class="user-data flex align-center space-between">
        <!-- <div class="user-icon"> -->
        <img class="member" :src="user.imgUrl" alt="-" />
        <!-- </div> -->
        <h3>{{ user.fullname }}</h3>
      </div>
      <a v-if="isAlreadyTaskUser(user)" href="#"
        ><i class="el-icon-check"></i>
      </a>
    </div>
    <div>
      <a href="#" class="other-users-btn">Show other team users</a>
    </div>
  </section>
</template>

<script>
export default {
  name: "users",
  props: {
    // users: {},
    // taskUsers: {},
  },
  data() {
    return {
      //   users: null
    };
  },
  computed: {
    currBoard() {
      const clone = require("rfdc");

      return clone({ proto: true })(
        Object.create(this.$store.getters.currBoard)
      );
    },
    users() {
      return this.$store.getters.users;
    },
  },
  methods: {
    addUser(user) {
      //   console.log('user:', user._id)
      // console.log('this user is', user)
      // this.$emit("add-user", user);
      //   const clone = require("rfdc");
      //   let boardCopy = clone({ proto: true })(Object.create(this.currBoard));
      try {
        // board clone
        // console.log("boardCopy:", boardCopy);

        let members = this.currBoard.members;
        // //toggle users
        // let boardUsers = boardCopy.members;
        // console.log('boardUsers:', boardUsers)
        // if (!boardUsers) boardUsers = [];

        const isBoardUser = members.some((member) => member._id === user._id);

        // console.log("isBoardUser", isBoardUser);

        if (!isBoardUser) {
          console.log("pushing...");
          members.push(user);
          // console.log("members:", members);
        } else {
          console.log("deleteing......");
          const userIdx = members.findIndex((m) => {
            return m._id === user._id;
          });
          console.log("userIdx:", userIdx);
          members.splice(userIdx, 1);
        }

        // boardCopy.members = boardUsers;

        console.log("members:", members);
        // // change values
        this.$store.dispatch({ type: "updateBoard", board: this.currBoard });
      } catch (err) {
        console.log(err);
      }
    },
    isAlreadyTaskUser(user) {
      //   let isInTask = false;
      //   if (this.taskUsers) {
      //     this.taskUsers.forEach((user) => {
      //       if (user._id === userId) isInTask = true;
      //     });
      //   }
      return this.currBoard.members.some((member) => member._id === user._id);
      //   return isInTask;
    },
  },
  created() {
    console.log(this.users);
    // this.users = this.$store.getters.users
  },
};
</script>

<style>
</style>