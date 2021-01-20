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
