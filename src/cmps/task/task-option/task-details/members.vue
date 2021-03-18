<template>
    <section class="members-modal">
        <input type="text" placeholder="Search members..." />
        <div v-for="member in members" :key="member._id" @click="addMember(member)" class="member-container flex align-center">
            <div class="member-icon"></div>
            <h3>{{member.fullname}}</h3>
        </div>
        <div>
          <a href="#" class="other-members-btn">Show other team members</a>
        </div>
    </section>
</template>

<script>
export default {
    name: "members",
    props: {
      members: {}
    },
    methods: {
      addMember(member) {
        this.$emit('add-member', member)
      }
    }
};
</script>

<style>
</style>