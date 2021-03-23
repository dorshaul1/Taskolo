<template>
    <div class="status-bar">
        <div class="status-bar-value" :style="barValue"></div>
    </div>
</template>

<script>
export default {
    props: {
        percentages: {},
    },
    computed: {
        barValue() {
            return {
                width: this.percentages + "%",
                //round corner when completed
                "border-bottom-right-radius":
                    Math.floor(this.percentages) === 100 ? 10 + "px" : "",
                "border-top-right-radius":
                    Math.floor(this.percentages) === 100 ? 10 + "px" : "",
            };
        },
    
    },
};
</script>

<style>
</style>