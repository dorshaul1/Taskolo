<template>
  <main
    v-if="currBoard"
    class="dashboard"
    :style="{ 'background': currBoard.style }"
  >
    <main-header />
      <button class="btn-back" @click="backToBoard">Back To Board</button>

    <div class="flex center">
      <h1 class="title">Dashboard</h1>
    </div>

    <div class="data-boxes flex center">
      <div class="box flex">
        <div class="icon-member flex center">
          <img
            class="icon-check"
            src="../assets/dashboard-icon/dash-team.svg"
            alt="dfas"
          />
        </div>
        <h4 class="data-box">MEMBERS <div class="val">{{ currUsers.length }}</div> </h4>
      </div>

      <div class="box flex">
        <div class="icon-total-task flex center">
          <img
            class="icon-check"
            src="../assets/dashboard-icon/dash-checklist.svg"
            alt="dfas"
          />
        </div>
        <h4 class="data-box">TOTAL TASKS <div class="val"> {{ totalTasksForDisplay }} </div></h4>
      </div>

      <div class="box flex">
        <div class="icon-completed-task flex center">
          <img
            class="icon-check"
            src="../assets/dashboard-icon/dash-check.svg"
            alt="dfas"
          />
        </div>
        <h4 class="data-box"
          >COMPLETED TASKS <div class="val"> {{ completedTasksForDisplay }} </div></h4
        >
      </div>

      <div class="box flex">
        <div class="icon-incomplete-task flex center">
          <img
            class="icon-check"
            src="../assets/dashboard-icon/dash-cancell.svg"
            alt="dfas"
          />
        </div>
        <h4 class="data-box"
          >INCOMPLETE TASKS <div class="val"> {{ incompletedTasksForDisplay }} </div> </h4
        >
      </div>
    </div>

    <section class="chart-by-group flex center">
      <!-- <div class="chart-task">
        <h1>task status by member</h1>
        <chart-bar :data="taskByMemberDataForDisplay" />
      </div> -->

      <div class="chart-task">
        <h1>Task done per list</h1>
        <chart :data="taskByMemberDataForDisplay" />
      </div>
    </section>
  </main>
</template>

<script>
import mainHeader from "../cmps/main-header";
import chart from "../cmps/board/chart";
import chartBar from "../cmps/board/chart-bar";

export default {
  name: "dashboard",
  data() {
    return {
      chartByGroup: null,
    };
  },
  computed: {
    boardId() {
      return this.$route.params.boardId;
    },
    currBoard() {
      return this.$store.getters.currBoard;
    },
    totalTasksForDisplay() {
      let totalCount = 0;
      this.currBoard.groups.forEach((group) => {
        group.tasks.forEach((task) => {
          if (!task.checklists) return;
          task.checklists.forEach((checklist) => {
            checklist.todos.forEach((todo) => {
              if (todo) {
                totalCount++;
              }
            });
          });
        });
      });
      return totalCount;
    },
    completedTasksForDisplay() {
      let dones = 0;
      this.currBoard.groups.forEach((group) => {
        group.tasks.forEach((task) => {
          if (!task.checklists) return;
          task.checklists.forEach((checklist) => {
            checklist.todos.forEach((todo) => {
              if (todo.isDone) {
                dones++;
              }
            });
          });
        });
      });
      return dones;
    },
    incompletedTasksForDisplay() {
      let notDones = 0;
      this.currBoard.groups.forEach((group) => {
        group.tasks.forEach((task) => {
          if (!task.checklists) return;
          task.checklists.forEach((checklist) => {
            checklist.todos.forEach((todo) => {
              if (!todo.isDone) {
                notDones++;
              }
            });
          });
        });
      });
      return notDones;
    },
    completeTaskPerGroup() {
      let dataDone = this.currBoard.groups.map((group) => {
        let cnt = 0;
        group.tasks.forEach((task) => {
          if (!task.checklists) return;
          task.checklists.forEach((checklist) => {
            checklist.todos.forEach((todo) => {
              if (todo.isDone) {
                cnt++;
              }
            });
          });
        });
        console.log(dataDone);
        return cnt;
      });
      return dataDone;
    },
    currUsers() {
      return this.$store.getters.users;
    },
    namesUsers() {
      let names = this.currUsers.map((user) => {
        return user.fullname;
      });
      return names;
    },
    groupsName() {
      return this.currBoard.groups.map((group) => group.title);
    },
    taskByMemberDataForDisplay() {
      return {
        datasets: [
          {
            backgroundColor: ["#70b500", "#f2d600", "#EB5A46", "#0079BF"],
            data: this.completeTaskPerGroup,
          },
        ],
        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: this.groupsName,
      };
    },
  },
  methods: {
    backToBoard() {
      this.$router.push(`/board/${this.currBoard._id}`);
    },
  },
  watch: {
    boardId: {
      handler() {
        this.$store.dispatch({
          type: "loadBoard",
          boardId: this.boardId,
        });
      },
      immediate: true,
    },
  },
  created() {
    this.$store.dispatch({ type: "loadUsers" });
  },
  components: {
    mainHeader,
    chart,
    chartBar,
  },
};
</script>

<style>
</style>
