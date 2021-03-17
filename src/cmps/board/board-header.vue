<template>
  <header class="board-header">
    <!-- <button class="boards-btn">Boards</button> -->
    <el-select v-model="chossenBoard" placeholder="Select">
      <el-option
        v-for="board in getBoards"
        :placeholder="Boards"
        :key="board._id"
        :label="board.title"
        :value="board._id"
      >
      </el-option>
    </el-select>
  </header>
</template>

<script>
export default {
  name: "board-header",
   data() {
      return {
        chossenBoard: '',
      }
    },
    computed:{
      getBoards(){
        console.log('this.$store.getters.boards:', this.$store.getters.boards)
        return this.$store.getters.boards
      }
    }
};
</script>

<style>
</style>