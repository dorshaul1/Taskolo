<template>
    <section class="base-side-menu">
        <header class="side-menu-header">
            <span class="title">{{title}}</span>
            <a href="#" @click="closeMenu" class="close-btn">X</a>
        </header>
        <slot></slot>
    </section>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        }
    },
    methods:{
        closeModal(){
           this.$emit('close-modal')
        }
    }
};
</script>

<style>
</style>