<template>
  <div class="form__field">
    <div class="form__label">
      <h1>Choose color</h1>
    </div>
    <div class="form__input">
      <v-swatches
        @input="setBackground('color')"
        v-model="color"
        :swatches="swatches"
        show-fallback
        fallback-input-type="color"
        popover-x="left"
      ></v-swatches>
    </div>

    <h1>Choose background</h1>
    <div class="background-image-list flex">
      <div v-for="idx in 15" :key="idx" class="background-container">
        <img
          @click="setBackground('img', idx)"
          class="background-img"
          :src="getImgUrl(idx)"
          v-bind:alt="idx"
        />
      </div>
    </div>
  </div>
</template>

<script>
import VSwatches from "vue-swatches";

export default {
  data() {
    return {
      color: "#0079bf",
      swatches: [
        "#0079bf",
        "#70b500",
        "#ff9f1a",
        "#eb5a46",
        "#f2d600",
        "#c377e0",
        "#ff78cb",
        "#00c2e0",
        "#51e898",
        "#c4c9cc",
      ],
    };
  },
  components: { VSwatches },
  methods: {
    setBackground(type, idx = null) {
      if ( type === 'color')
      this.$emit("setBackground",this.color)
      else if(type === 'img')
      this.$emit("setBackground",`url(${this.getImgUrl(idx)})`);
    },
    getImgUrl(idx) {
      return require(`../../assets/images/${idx}.png`);
    },
  },
};
</script>
<style >
</style>
