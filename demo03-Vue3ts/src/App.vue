<template>
  <NavBar />
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
