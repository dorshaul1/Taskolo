<template>
  <div class="group-container">
    <h1>hh</h1>
    <task-preview v-for="task in group.tasks" :key="task.id" :task="task" :boardId="boardId" ></task-preview>
  </div>
</template>

<script>
import taskPreview from '../task/task-preview'
export default {
  name: "group",
  props: {
    group: {},
    boardId: {},
  },
  components:{
    taskPreview
  }
};
</script>

<style>
.group-container{
  height: 200px;
  width: 272px;
  background-color: lightgray;
}
</style>