<template>
  <div class="modal-container">

        <ul class="clean-list">
              <li @click="deleteGroup">
                  delete this list
              </li>
               <li>
                    add a card
              </li>
        </ul>
  </div> 
</template>

<script>
export default {
  name: "group-menu",
  methods: {
    closeMenu() {
      this.$emit("closeMenu");
    },
    deleteGroup() {
           this.$emit("delete-group");
    },
  },
};
</script>

<style>
</style>