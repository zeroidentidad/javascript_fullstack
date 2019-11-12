<template>
    <div>
        <button @click="show=!show">Toggle</button>
        <transition 
        name="fade"
        enter-active-class="animated tada"
        leave-active-class="animated bounce"
        >
        <h1 v-if="show">Watahea</h1>
        </transition>
    </div>
</template>

<script>
export default {
    data() {
        return {
            show: true
        }
    }
}
</script>

<style scoped>
/*.fade-enter-active, .fade-leave-active {
    transition: 2.5s
}
.fade-enter, .fade-leave-to {
    opacity: 0;
}*/
</style>