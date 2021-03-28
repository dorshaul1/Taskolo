<template>
  <div class="form__field">
    <div class="form__label">
      <strong>Please choose a color:</strong>
    </div>
    <div class="form__input">
      <v-swatches
      @input="setColor"
        v-model="color"
        :swatches="swatches"
        show-fallback
        fallback-input-type="color"
        popover-x="left"
      ></v-swatches>
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
      setColor(){
          this.$emit('setColor', this.color)
      }
  },
};
</script>
