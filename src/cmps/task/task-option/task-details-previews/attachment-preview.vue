<template>
  <section class="attachmnet-preview flex column">
    <img src="@/assets/task-icon/attachment.svg" alt="" />
    <div class="title-container flex align-center">
      <h3>Attachment</h3>
      <!-- <button @click="openEditInput">Edit</button> -->
    </div>
    <!-- <div class="attach-img-container"> -->
      <img class="attach-img" :src="imgUrl" alt="" />
    <!-- </div> -->
  </section>
</template>

<script>
export default {
  props: { imgUrl: {} },
};
</script>

<style>
</style>