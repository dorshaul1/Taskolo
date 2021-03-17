<template>
  <header class="board-header">
    <!-- <button class="boards-btn">Boards</button> -->
    <el-select v-model="value" placeholder="Select">
      <el-option
        v-for="board in getBoards"
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
        // options: [{
        //   value: 'Option1',
        //   label: 'Option1'
        // }, {
        //   value: 'Option2',
        //   label: 'Option2'
        // }, {
        //   value: 'Option3',
        //   label: 'Option3'
        // }, {
        //   value: 'Option4',
        //   label: 'Option4'
        // }, {
        //   value: 'Option5',
        //   label: 'Option5'
        // }],
        value: ''
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