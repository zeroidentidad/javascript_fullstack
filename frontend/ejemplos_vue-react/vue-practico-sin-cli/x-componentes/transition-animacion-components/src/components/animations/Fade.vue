<template>
    <transition
    enter-active-class="animated shake"
    leave-active-class="animated rollIn"    
    >
    <slot></slot>
    </transition>
</template>

<script>
export default {

}
</script>

<style scoped>
</style>