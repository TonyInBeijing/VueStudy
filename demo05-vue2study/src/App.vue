<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Component1 helloMsg="Hello Vue2 !!!"></Component1>
  </div>
</template>

<script>

import Component1 from "./components/component1.vue";

export default {
  name: 'App',
  components: {
    Component1
  },
  data() {
    return {}
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
</style>
