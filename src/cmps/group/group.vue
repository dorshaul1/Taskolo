<template>
  <div class="group-container">
    <div class="group-main">
      <div class="group-header flex space-between">
        <h3 class="group-title">{{ group.title }}</h3>
        <button class="group-menu-btn">...</button>
      </div>
      <task-preview
        v-for="task in group.tasks"
        :key="task.id"
        :task="task"
        :boardId="boardId"
      ></task-preview>
      <div class="group-footer flex space-between">
        <div class="flex">
          <h3 class="add-new-Card"><span>+</span> add a card</h3>
        </div>
        <div>
          <button class="group-menu-btn">+</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import taskPreview from "../task/task-preview";
export default {
  name: "group",
  props: {
    group: {},
    boardId: {},
  },
  components: {
    taskPreview,
  },
};
</script>

