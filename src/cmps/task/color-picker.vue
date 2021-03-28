<template>
  <el-color-picker @change="setColor" v-model="color" show-alpha :predefine="predefineColors">
  </el-color-picker>
</template>

<script>
export default {
  data() {
    return {
      color: "rgba(255, 69, 0, 0.68)",
      predefineColors: [
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
  methods: {
        setColor(){
              this.$emit("setColor", this.color)
        }
  }
};
</script>

<style>
</style>