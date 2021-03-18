<template>
  <section v-if="currBoard">
    <board-header @open="isMenuOpen = true" />
    <side-menu
      @close="isMenuOpen = false"
      :class="{ 'menu-show': isMenuOpen }"
      :board="currBoard"
    />
    <main class="flex board-details">
      <group
        v-for="group in currBoard.groups"
        :key="group.id"
        :group="group"
        :boardId="currBoard._id"
      ></group>

      <section v-show="!isTakeGroup">
        <h3 @click="openGroupkAdd" class="add-new-group">
          <span>+</span> Add another list
        </h3>
      </section>

      <section v-show="isTakeGroup" class="take-new-group flex">
        <textarea
          class="group-Add-input"
          ref="groupTitle"
          v-show="isTakeGroup"
          name="NoteTxt"
          v-model="newGroup.title"
          placeholder="Enter a title for this card..."
          rows="2"
        >
        </textarea>

        <div class="flex space-between">
          <button @click="addNewTask" class="add-task">Add card</button>
          <button @click="closeTaskAdd">x</button>
        </div>
      </section>
    </main>
    <router-view />
  </section>
</template>

<script>
import group from "../cmps/group/group";
import boardHeader from "../cmps/board/board-header";
import sideMenu from "../cmps/board/side-menu";

export default {
  name: "board-details",
  data() {
    return {
      newGroup: {
        title: null,
      },
      isMenuOpen: false,
      isTakeGroup: false,
    };
  },
  computed: {
    boardId() {
      return this.$route.params.boardId;
    },
    currBoard() {
      return this.$store.getters.currBoard;
    },
  },
  methods: {
    openMenu() {
      // console.log('efewf');
      this.isMenuOpen = true;
      console.log("this.isMenuOpen:", this.isMenuOpen);
    },
    closeMenu() {
      this.isMenuOpen = false;
      console.log("this.isMenuOpen:", this.isMenuOpen);
    },
    openGroupkAdd() {
      this.isTakeGroup = true;
    },
  },
  watch: {
    boardId: {
      handler() {
        this.$store.dispatch({
          type: "loadAndWatchBoard",
          boardId: this.boardId,
        });
      },
      immediate: true,
    },
  },
  components: {
    group,
    boardHeader,
    sideMenu,
  },
};
</script>

<style>
</style>