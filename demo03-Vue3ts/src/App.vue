<template>
  <!-- <NavBar /> -->
  <div class="body">
    <router-view />
  </div>
  <nav-bar :count="0" :active="'product'"></nav-bar>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "@components/NavBar/index.vue";
export default defineComponent({
  name: "App",
  components: {
    NavBar,
  },
});
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