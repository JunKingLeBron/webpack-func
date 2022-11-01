<template>
    <header>
        <h1>Hello App</h1>
        <div>{{name}}</div>
        <ElCalendar v-model="value"></ElCalendar>
        <div>
            <RouterLink to="/">home</RouterLink>
            <RouterLink to="/about">about</RouterLink>
        </div>
    </header>
    <RouterView />
</template>

<script setup>
    import { ElCalendar } from 'element-plus'
    import { RouterLink, RouterView } from 'vue-router'
    import { ref } from 'vue'
    const value = ref(new Date())
    const name = 'hello'
</script>

<style>

</style>