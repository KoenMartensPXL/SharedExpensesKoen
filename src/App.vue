<template>
    <div id="app">
        <nav>
        </nav>
        <router-view />
    </div>
</template>

<script>
import HomePage from './views/HomePage.vue';

export default {
    name: 'App',
    components: {
        // eslint-disable-next-line vue/no-unused-components
        HomePage
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
nav {
    margin-bottom: 20px;
}
nav a {
    margin: 0 15px;
    text-decoration: none;
    color: #42b983;
}
</style>
