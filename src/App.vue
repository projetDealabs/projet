<template>
  <div id="app">
    <TopBar :key="$route.fullPath"></TopBar>
    <router-view></router-view>
  </div>
</template>

<script>
import TopBar from './components/TopBar'

export default {
  name: 'App',
  components: {
    TopBar
  }
}
</script>

<style>
#app {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #F5F5F5;
  color: #000000;
  min-height: 100vh
}
</style>
